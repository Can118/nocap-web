import { redirect } from 'next/navigation'
import { getUserByIdentifier } from '@/lib/userService'
import TwoStepFlow from '@/components/TwoStepFlow'

export default async function UserPage({ params }) {
  const { identifier } = await params

  // Server-side user lookup
  const user = await getUserByIdentifier(identifier)

  // If user doesn't exist, redirect to error page
  if (!user) {
    redirect('/error?reason=user_not_found')
  }

  return <TwoStepFlow user={user} />
}

// Generate metadata for SEO and social sharing
export async function generateMetadata({ params }) {
  const { identifier } = await params
  const user = await getUserByIdentifier(identifier)

  const displayName = user?.username || user?.nocap_id || 'NoCap User'

  return {
    title: `Send anonymous message to ${displayName} | NoCap`,
    description: `Send me anonymous messages and feedback on NoCap!`,
    openGraph: {
      title: `Send me anonymous messages!`,
      description: 'Click to send me something anonymously',
      type: 'website',
    },
  }
}
