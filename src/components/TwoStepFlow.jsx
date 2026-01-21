'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackSlider from './FeedbackSlider'
import MessageScreen from './MessageScreen'
import { submitFeedback } from '@/lib/feedbackService'
import { sendAnonymousMessage } from '@/lib/messageService'

export default function TwoStepFlow({ user, questionId, questionText }) {
  const [step, setStep] = useState(1) // 1 or 2
  const [isLoading, setIsLoading] = useState(false)
  const [clickCount, setClickCount] = useState(133) // Animated counter for step 1
  const [replyCount, setReplyCount] = useState(77) // Animated counter for step 2
  const [source, setSource] = useState('instagram') // Track message source (instagram/snapchat)
  const router = useRouter()

  const displayName = user.username || `user ${user.nocap_id}`

  // Capture source parameter from URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const sourceParam = urlParams.get('source')

      // Validate and set source (must be 'instagram' or 'snapchat')
      if (sourceParam === 'snapchat' || sourceParam === 'instagram') {
        setSource(sourceParam)
        console.log('📍 Message source detected:', sourceParam)
      } else {
        setSource('instagram') // Default to instagram
        console.log('📍 Message source defaulted to: instagram')
      }
    }
  }, [])

  // Animate counters - changes every second by -2 to +3 (never 0)
  useEffect(() => {
    const interval = setInterval(() => {
      setClickCount(prev => {
        // Generate random change between -2 and +3, excluding 0
        const changes = [-2, -1, 1, 2, 3]
        const randomChange = changes[Math.floor(Math.random() * changes.length)]
        return prev + randomChange
      })
      setReplyCount(prev => {
        // Generate random change between -2 and +3, excluding 0
        const changes = [-2, -1, 1, 2, 3]
        const randomChange = changes[Math.floor(Math.random() * changes.length)]
        return prev + randomChange
      })
    }, 1000) // Every 1 second

    return () => clearInterval(interval)
  }, [])

  // Handle feedback submission (Screen 1)
  const handleFeedbackSubmit = async (rating) => {
    setIsLoading(true)
    try {
      await submitFeedback(user.id, rating, questionId)
      // Move to Screen 2 after successful feedback submission
      setStep(2)
    } catch (error) {
      console.error('Failed to submit feedback:', error)
      // Show detailed error message for debugging
      const errorMessage = error.message || 'Failed to submit feedback. Please try again.'
      alert(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle message submission (Screen 2)
  const handleMessageSubmit = async (message) => {
    setIsLoading(true)
    try {
      await sendAnonymousMessage(user.id, message, source, questionText)
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
    <div
      className="relative min-h-screen flex flex-col justify-start items-center px-4 pt-4 pb-4 overflow-hidden"
      style={{
        backgroundColor: '#FFFECE',
        backgroundImage: 'url(/images/feedback/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* Spacer to push logo down */}
      <div style={{ height: '40px' }} />

      {/* Logo Badge at Top - Only show on step 1 */}
      {step === 1 && (
        <div className="relative z-20 mt-0 mb-6">
          <img
            src="/images/feedback/nocap-logo.png"
            alt="NoCap.bio"
            style={{ width: '120px', height: 'auto', maxWidth: '120px' }}
          />
        </div>
      )}

      {/* Step Content with Animation */}
      <div className="relative z-10 w-full max-w-lg flex flex-col" style={{ marginTop: '50px' }}>
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
                questionId={questionId}
                questionText={questionText}
                hideStats={true}
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
              <MessageScreen
                onSubmit={handleMessageSubmit}
                onSkip={handleSkip}
                receiverName={displayName}
                questionText={questionText || "what do you really think about me? 👀"}
                isLoading={isLoading}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Counter Text - Show on both steps with different content */}
      <div className="relative z-10 w-full max-w-lg flex justify-center" style={{ marginTop: '70px' }}>
        <p className="text-base sm:text-lg counter-text">
          {step === 1
            ? `↓ ${clickCount} people just clicked ↓`
            : `↓ ${replyCount} people just got anonymous messages ↓`
          }
        </p>
      </div>

      {/* CTA Button - Show on both steps with different images */}
      <div className="relative z-10 w-full max-w-lg flex justify-center" style={{ marginTop: '12px' }}>
        <motion.a
          href="https://apps.apple.com/app/id6757497386"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[320px] bg-transparent border-0 p-0 outline-none block"
          animate={{
            rotate: [0, -2, 2, -2, 0]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut"
          }}
        >
          <img
            src={step === 1
              ? "/images/feedback/cta-button.png"
              : "/images/message/getyourownreplies_button.png"
            }
            alt={step === 1
              ? "Get your own ratings now!"
              : "Get your own replies"
            }
            className="w-full"
          />
        </motion.a>
      </div>

      {/* Footer Links - Independent positioning - Moved down */}
      <div className="relative z-10 w-full max-w-lg flex justify-center" style={{ marginTop: '80px' }}>
        <div className="flex text-sm" style={{ gap: '60px' }}>
          <a href="/terms" className="footer-link hover:opacity-40 transition-opacity no-underline">
            Terms
          </a>
          <a href="/privacy" className="footer-link hover:opacity-40 transition-opacity no-underline">
            Privacy
          </a>
        </div>
      </div>
    </div>
  )
}
