import { redirect } from 'next/navigation'
import { getUserByIdentifier } from '@/lib/userService'
import { getQuestionById } from '@/lib/questionService'
import TwoStepFlow from '@/components/TwoStepFlow'

export default async function QuestionPage({ params }) {
  const { identifier, questionId } = await params

  // Server-side user lookup
  const user = await getUserByIdentifier(identifier)

  // If user doesn't exist, redirect to error page
  if (!user) {
    redirect('/error?reason=user_not_found')
  }

  // Fetch the specific question
  const question = await getQuestionById(parseInt(questionId))

  // If question doesn't exist or is deleted, redirect to error
  if (!question) {
    redirect('/error?reason=question_not_found')
  }

  // Verify the question belongs to this user
  if (question.user_id !== user.id) {
    redirect('/error?reason=question_not_found')
  }

  return (
    <TwoStepFlow
      user={user}
      questionId={question.id}
      questionText={question.question_text}
    />
  )
}

// Generate metadata for SEO and social sharing
export async function generateMetadata({ params }) {
  const { identifier, questionId } = await params
  const user = await getUserByIdentifier(identifier)
  const question = await getQuestionById(parseInt(questionId))

  const displayName = user?.username || user?.nocap_id || 'NoCap User'
  const questionPreview = question?.question_text?.substring(0, 100) || 'Answer this question'

  return {
    title: `${questionPreview} | ${displayName} on NoCap`,
    description: `Share your anonymous answer to: ${questionPreview}`,
    openGraph: {
      title: `${displayName} wants to know...`,
      description: questionPreview,
      type: 'website',
    },
  }
}
