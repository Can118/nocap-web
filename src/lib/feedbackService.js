import { supabase } from './supabase'
import { getBrowserFingerprint } from './browserFingerprint'
import { getLocationFromIP } from './ipLocation'

/**
 * Submit anonymous feedback (sliding bar rating)
 * @param {string} receiverId - UUID of user being rated
 * @param {number} ratingValue - Rating from -100 to +100
 * @param {number} questionId - The question ID (optional for backward compatibility)
 * @returns {Promise<Object>} Feedback record
 */
/**
 * Get real-time statistics for a specific question
 * @param {number} questionId - The question ID
 * @returns {Promise<Object>} Statistics: { totalRatings, percentageYes }
 */
export async function getQuestionStats(questionId) {
  if (!questionId) {
    return { totalRatings: 0, percentageYes: 0 }
  }

  try {
    // Fetch all feedbacks for this question
    const { data: feedbacks, error } = await supabase
      .from('feedbacks')
      .select('rating_value')
      .eq('question_id', questionId)

    if (error) {
      console.error('Error fetching question stats:', error)
      return { totalRatings: 0, percentageYes: 0 }
    }

    const totalRatings = feedbacks?.length || 0

    if (totalRatings === 0) {
      return { totalRatings: 0, percentageYes: 0 }
    }

    // Count "yes" votes (positive ratings > 0)
    const yesVotes = feedbacks.filter(f => f.rating_value > 0).length
    const percentageYes = Math.round((yesVotes / totalRatings) * 100)

    return { totalRatings, percentageYes }
  } catch (error) {
    console.error('Error in getQuestionStats:', error)
    return { totalRatings: 0, percentageYes: 0 }
  }
}

export async function submitFeedback(receiverId, ratingValue, questionId = null) {
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
        question_id: questionId, // Link to specific question
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
