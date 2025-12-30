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
    <div className="relative min-h-screen bg-nocap-cream flex flex-col items-center p-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/feedback/background.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo Badge at Top */}
      <div className="relative z-20 mt-4 mb-6">
        <img
          src="/images/feedback/nocap-logo.png"
          alt="NoCap.bio"
          style={{ width: '120px', height: 'auto', maxWidth: '120px' }}
        />
      </div>

      {/* Step Content with Animation */}
      <div className="relative z-10 w-full max-w-lg flex-1 flex flex-col justify-center">
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

      {/* Bottom Section */}
      <div className="relative z-10 w-full max-w-lg mt-auto mb-8 flex flex-col items-center gap-4">
        {/* Counter - SF Pro Bold, #191919 */}
        <p className="text-base sm:text-lg counter-text">
          ↓ 133 people just clicked ↓
        </p>

        {/* CTA Button */}
        <button className="transition-transform hover:translate-x-1 hover:translate-y-1 w-full max-w-md">
          <img
            src="/images/feedback/cta-button.png"
            alt="Get your own ratings now!"
            className="w-full"
          />
        </button>

        {/* Footer Links - SF Pro Heavy, #565300 at 20% opacity */}
        <div className="flex gap-6 text-sm mt-2">
          <a href="/terms" className="footer-link hover:opacity-40 transition-opacity">
            Terms
          </a>
          <a href="/privacy" className="footer-link hover:opacity-40 transition-opacity">
            Privacy
          </a>
        </div>
      </div>
    </div>
  )
}
