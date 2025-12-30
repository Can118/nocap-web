import { supabase } from './supabase'

/**
 * Get user by username or NoCap ID
 * @param {string} identifier - Username or NoCap ID
 * @returns {Promise<Object|null>} User data or null
 */
export async function getUserByIdentifier(identifier) {
  if (!identifier) return null

  try {
    // Try as username first (case-insensitive)
    const { data: userByUsername, error: usernameError } = await supabase
      .from('users')
      .select('*')
      .ilike('username', identifier)
      .maybeSingle()

    if (!usernameError && userByUsername) {
      return userByUsername
    }

    // Try as NoCap ID (numeric)
    if (/^\d+$/.test(identifier)) {
      const { data: userByNocapId, error: nocapIdError } = await supabase
        .from('users')
        .select('*')
        .eq('nocap_id', parseInt(identifier, 10))
        .maybeSingle()

      if (!nocapIdError && userByNocapId) {
        return userByNocapId
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}
