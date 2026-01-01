/**
 * Get location from IP address using free ip-api.com service
 * Same service used by mobile app
 */
export async function getLocationFromIP() {
  try {
    // Use HTTPS to avoid mixed content errors on production
    const response = await fetch('https://ipapi.co/json/')

    if (!response.ok) {
      throw new Error('Failed to fetch location')
    }

    const data = await response.json()

    return {
      city: data.city || 'Unknown',
      formatted: data.city ? `near ${data.city}` : 'Unknown location',
      ip: data.ip || 'Unknown'
    }
  } catch (error) {
    console.error('Location fetch error:', error)
  }

  return {
    city: 'Unknown',
    formatted: 'Unknown location',
    ip: 'Unknown'
  }
}
