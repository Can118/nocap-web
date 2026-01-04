import { supabase } from './supabase'

/**
 * Get a question by ID
 * @param {number} questionId - The question ID
 * @returns {Promise<Object|null>} Question object with user data
 */
export async function getQuestionById(questionId) {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`
        *,
        user:user_id (
          id,
          username,
          nocap_id
        )
      `)
      .eq('id', questionId)
      .eq('status', 'active')
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // Not found
        return null
      }
      console.error('Error fetching question:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in getQuestionById:', error)
    return null
  }
}

/**
 * Get a question by user identifier and question ID
 * @param {string} identifier - Username or NoCap ID
 * @param {number} questionId - The question ID
 * @returns {Promise<Object|null>} Question object
 */
export async function getQuestionByUserAndId(identifier, questionId) {
  try {
    // First check if identifier is a number (NoCap ID)
    const isNocapId = !isNaN(identifier)

    let query = supabase
      .from('questions')
      .select(`
        *,
        user:user_id (
          id,
          username,
          nocap_id
        )
      `)
      .eq('id', questionId)
      .eq('status', 'active')

    if (isNocapId) {
      // Join with users table to filter by nocap_id
      const { data: users, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('nocap_id', parseInt(identifier))
        .single()

      if (userError || !users) {
        return null
      }

      query = query.eq('user_id', users.id)
    } else {
      // Join with users table to filter by username
      const { data: users, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('username', identifier)
        .single()

      if (userError || !users) {
        return null
      }

      query = query.eq('user_id', users.id)
    }

    const { data, error } = await query.single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null
      }
      console.error('Error fetching question:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in getQuestionByUserAndId:', error)
    return null
  }
}
