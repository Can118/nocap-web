/**
 * Get location from IP address using free ip-api.com service
 * Same service used by mobile app
 */
export async function getLocationFromIP() {
  try {
    const response = await fetch('http://ip-api.com/json/')

    if (!response.ok) {
      throw new Error('Failed to fetch location')
    }

    const data = await response.json()

    if (data.status === 'success') {
      return {
        city: data.city || 'Unknown',
        formatted: data.city ? `near ${data.city}` : 'Unknown location',
        ip: data.query || 'Unknown'
      }
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
