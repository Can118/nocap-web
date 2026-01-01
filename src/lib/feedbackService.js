import { supabase } from './supabase'
import { getBrowserFingerprint } from './browserFingerprint'
import { getLocationFromIP } from './ipLocation'

/**
 * Submit anonymous feedback (sliding bar rating)
 * @param {string} receiverId - UUID of user being rated
 * @param {number} ratingValue - Rating from -100 to +100
 * @returns {Promise<Object>} Feedback record
 */
export async function submitFeedback(receiverId, ratingValue) {
  if (!receiverId || typeof ratingValue !== 'number') {
    throw new Error('Invalid feedback data')
  }

  if (ratingValue < -100 || ratingValue > 100) {
    throw new Error('Rating must be between -100 and +100')
  }

  try {
    // Collect metadata for rate limiting (non-blocking)
    let fingerprint = 'unknown'
    let locationInfo = { ip: 'unknown' }

    try {
      [fingerprint, locationInfo] = await Promise.all([
        getBrowserFingerprint(),
        getLocationFromIP()
      ])
    } catch (metadataError) {
      console.warn('Failed to collect metadata, continuing with defaults:', metadataError)
    }

    // Insert feedback (completely anonymous - no sender tracking)
    const { data, error } = await supabase
      .from('feedbacks')
      .insert([{
        receiver_id: receiverId,
        rating_value: Math.round(ratingValue), // Ensure integer
        browser_fingerprint: fingerprint,
        ip_address: locationInfo.ip
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase feedback error:', error)
      // Provide more detailed error message
      throw new Error(`Database error: ${error.message || 'Failed to save feedback'}`)
    }

    return data
  } catch (error) {
    console.error('Error in submitFeedback:', error)
    throw error
  }
}
