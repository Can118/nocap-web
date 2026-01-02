import { supabase } from './supabase'
import { getBrowserFingerprint, getBrowserDeviceInfo } from './browserFingerprint'
import { getLocationFromIP } from './ipLocation'

/**
 * Send anonymous message from web
 * @param {string} receiverId - Receiver's UUID
 * @param {string} message - Anonymous message text
 * @returns {Promise<Object>} Created message object
 */
export async function sendAnonymousMessage(receiverId, message) {
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

  try {
    // Collect metadata
    const [deviceInfo, fingerprint, locationInfo] = await Promise.all([
      Promise.resolve(getBrowserDeviceInfo()),
      getBrowserFingerprint(),
      getLocationFromIP()
    ])

    // Determine message type based on platform (for envelope display)
    let messageType = 'grey-yellow' // default
    if (deviceInfo.device_model.includes('Instagram')) {
      messageType = 'pink-gradient'
    } else if (deviceInfo.device_model.includes('Snapchat')) {
      messageType = 'yellow'
    }

    // Insert message with null sender_id (anonymous)
    const { data, error } = await supabase
      .from('messages')
      .insert([{
        sender_id: null, // ANONYMOUS!
        receiver_id: receiverId,
        question: trimmedMessage,
        answer: null,
        type: messageType, // Add type field for envelope display
        device_model: deviceInfo.device_model,
        device_os: deviceInfo.device_os,
        device_language: deviceInfo.device_language,
        location_city: locationInfo.city,
        location_formatted: locationInfo.formatted,
        ip_address: locationInfo.ip,
        browser_fingerprint: fingerprint
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
