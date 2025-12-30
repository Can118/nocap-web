'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FeedbackSlider from './FeedbackSlider'
import MessageForm from './MessageForm'
import { submitFeedback } from '@/lib/feedbackService'
import { sendAnonymousMessage } from '@/lib/messageService'

export default function TwoStepFlow({ user }) {
  const [step, setStep] = useState(1) // 1 or 2
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const displayName = user.username || `user ${user.nocap_id}`

  // Handle feedback submission (Screen 1)
  const handleFeedbackSubmit = async (rating) => {
    setIsLoading(true)
    try {
      await submitFeedback(user.id, rating)
      // Move to Screen 2 after successful feedback submission
      setStep(2)
    } catch (error) {
      console.error('Failed to submit feedback:', error)
      alert('Failed to submit feedback. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Handle message submission (Screen 2)
  const handleMessageSubmit = async (message) => {
    setIsLoading(true)
    try {
      await sendAnonymousMessage(user.id, message)
      // Redirect to success page
      router.push('/success')
    } catch (error) {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again.')
      setIsLoading(false)
    }
  }

  // Handle skip message (go straight to success)
  const handleSkip = () => {
    router.push('/success')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      {/* Progress Indicator */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div
          className={`w-12 h-2 rounded-full transition-all ${
            step === 1 ? 'bg-white' : 'bg-white/30'
          }`}
        />
        <div
          className={`w-12 h-2 rounded-full transition-all ${
            step === 2 ? 'bg-white' : 'bg-white/30'
          }`}
        />
      </div>

      {/* Step Content */}
      {step === 1 && (
        <FeedbackSlider
          onSubmit={handleFeedbackSubmit}
          receiverName={displayName}
          isLoading={isLoading}
        />
      )}

      {step === 2 && (
        <MessageForm
          onSubmit={handleMessageSubmit}
          onSkip={handleSkip}
          receiverName={displayName}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}
