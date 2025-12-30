'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
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
    <div className="relative min-h-screen bg-nocap-cream flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/feedback/background.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo Badge at Top */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="/images/feedback/nocap-logo.svg"
          alt="NoCap.bio"
          className="h-12"
        />
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        <div
          className={`w-12 h-2 rounded-full border-2 border-black transition-all ${
            step === 1 ? 'bg-black' : 'bg-transparent'
          }`}
        />
        <div
          className={`w-12 h-2 rounded-full border-2 border-black transition-all ${
            step === 2 ? 'bg-black' : 'bg-transparent'
          }`}
        />
      </div>

      {/* Step Content with Animation */}
      <div className="relative z-10 w-full max-w-md mt-16 mb-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="slider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FeedbackSlider
                onSubmit={handleFeedbackSubmit}
                receiverName={displayName}
                isLoading={isLoading}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MessageForm
                onSubmit={handleMessageSubmit}
                onSkip={handleSkip}
                receiverName={displayName}
                isLoading={isLoading}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Counter */}
      <div className="relative z-10 mb-4 text-center">
        <p className="text-sm font-bold text-black">
          ↓ 133 people just clicked ↓
        </p>
      </div>

      {/* CTA Button */}
      <button className="relative z-10 transition-transform hover:translate-x-1 hover:translate-y-1">
        <img
          src="/images/feedback/cta-button.svg"
          alt="Get your own ratings now!"
          className="h-14"
        />
      </button>

      {/* Footer Links */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6 text-sm z-10">
        <a href="/terms" className="text-gray-600 hover:text-black underline transition-colors">
          Terms
        </a>
        <a href="/privacy" className="text-gray-600 hover:text-black underline transition-colors">
          Privacy
        </a>
      </div>
    </div>
  )
}
