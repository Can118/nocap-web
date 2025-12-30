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
    // Collect metadata for rate limiting
    const [fingerprint, locationInfo] = await Promise.all([
      getBrowserFingerprint(),
      getLocationFromIP()
    ])

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
      console.error('Feedback submission error:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in submitFeedback:', error)
    throw error
  }
}
