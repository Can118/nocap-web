import { supabase } from './supabase'
import { getBrowserFingerprint, getBrowserDeviceInfo } from './browserFingerprint'
import { getLocationFromIP } from './ipLocation'

/**
 * Send anonymous message from web
 * @param {string} receiverId - Receiver's UUID
 * @param {string} message - Anonymous message text (answer)
 * @param {string} source - Message source: 'instagram', 'snapchat', or 'other' (default: 'instagram')
 * @param {string} questionText - The question being answered (optional, falls back to default)
 * @returns {Promise<Object>} Created message object
 */
export async function sendAnonymousMessage(receiverId, message, source = 'instagram', questionText = null) {
  if (!receiverId || !message || typeof message !== 'string') {
    throw new Error('Invalid message data')
  }

  const trimmedMessage = message.trim()
  if (!trimmedMessage) {
    throw new Error('Message cannot be empty')
  }

  if (trimmedMessage.length > 500) {
    throw new Error('Message too long (max 500 characters)')
  }

  // Validate source parameter
  const validSources = ['instagram', 'snapchat', 'other']
  const validatedSource = validSources.includes(source) ? source : 'instagram'

  try {
    // Collect metadata
    const [deviceInfo, locationInfo] = await Promise.all([
      Promise.resolve(getBrowserDeviceInfo()),
      getLocationFromIP()
    ])

    console.log('📧 Sending message with source:', validatedSource)

    // Use provided question text, or fall back to default
    const questionToSave = questionText || "what do you really think about me? 👀"
    console.log('📝 Question:', questionToSave)

    // Insert message with null sender_id (anonymous)
    // NOTE: question = what app user created, answer = what anonymous sender typed
    const { data, error } = await supabase
      .from('messages')
      .insert([{
        sender_id: null, // ANONYMOUS!
        receiver_id: receiverId,
        question: questionToSave, // Question from app user (or default)
        answer: trimmedMessage, // Anonymous sender's response goes in answer field
        source: validatedSource, // Track message source (instagram/snapchat)
        device_model: deviceInfo.device_model,
        device_os: deviceInfo.device_os,
        device_language: deviceInfo.device_language,
        location_city: locationInfo.city,
        location_formatted: locationInfo.formatted,
        ip_address: locationInfo.ip
      }])
      .select()
      .single()

    if (error) {
      console.error('Message submission error:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in sendAnonymousMessage:', error)
    throw error
  }
}
