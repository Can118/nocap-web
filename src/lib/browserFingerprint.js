import FingerprintJS from '@fingerprintjs/fingerprintjs'

let fpPromise = null

/**
 * Get browser fingerprint for anonymous sender tracking (rate limiting only)
 */
export async function getBrowserFingerprint() {
  try {
    if (!fpPromise) {
      fpPromise = FingerprintJS.load()
    }
    const fp = await fpPromise
    const result = await fp.get()
    return result.visitorId
  } catch (error) {
    console.error('Failed to get browser fingerprint:', error)
    return 'unknown'
  }
}

/**
 * Extract device info from browser for message clues
 */
export function getBrowserDeviceInfo() {
  if (typeof window === 'undefined') {
    return {
      device_model: 'Server',
      device_os: 'Server',
      device_language: 'en'
    }
  }

  const ua = navigator.userAgent

  // Detect browser
  let browser = 'Unknown Browser'
  if (ua.includes('Instagram')) browser = 'Instagram'
  else if (ua.includes('Snapchat')) browser = 'Snapchat'
  else if (ua.includes('Chrome') && !ua.includes('Edge')) browser = 'Chrome'
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari'
  else if (ua.includes('Firefox')) browser = 'Firefox'
  else if (ua.includes('Edge')) browser = 'Edge'

  // Detect OS
  let os = 'Unknown OS'
  if (ua.includes('Windows')) os = 'Windows'
  else if (ua.includes('Mac OS X')) os = 'macOS'
  else if (ua.includes('Linux')) os = 'Linux'
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS'
  else if (ua.includes('Android')) os = 'Android'

  // Detect language
  const language = navigator.language?.split('-')[0] || 'en'

  return {
    device_model: `Browser: ${browser}`,
    device_os: os,
    device_language: language
  }
}
