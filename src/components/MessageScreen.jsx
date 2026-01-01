'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MessageScreen({
  onSubmit,
  onSkip,
  receiverName,
  questionText,
  isLoading
}) {
  const [message, setMessage] = useState('')
  const [messageCount, setMessageCount] = useState(77) // Animated counter

  // Animate counter - changes every second
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageCount(prev => {
        const changes = [-2, -1, 1, 2, 3]
        const randomChange = changes[Math.floor(Math.random() * changes.length)]
        return prev + randomChange
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async () => {
    if (!message.trim()) {
      // If no message, just skip
      onSkip()
      return
    }
    await onSubmit(message.trim())
  }

  const handleSkip = () => {
    onSkip()
  }

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Confirmation Message */}
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-black leading-tight">
          Your answer is sent,<br />
          but they'll <span className="relative inline-block">
            never
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
          </span> know it was you.
        </h1>
      </div>

      {/* Question Card */}
      <div
        className="relative mb-6 rounded-3xl overflow-hidden"
        style={{
          backgroundColor: '#FFFECE',
          border: '4px solid #000',
          boxShadow: '6px 6px 0px #000'
        }}
      >
        {/* Question Text - shown at top of card */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-center text-xl sm:text-2xl question-text">
            {questionText}
          </h2>
        </div>

        {/* Message Input Area */}
        <div className="px-6 pb-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="you can also send an anonymous reply to your friend 😈"
            className="w-full h-32 p-4 bg-white/50 border-0 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 text-base placeholder-gray-400"
            maxLength={500}
            disabled={isLoading}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif'
            }}
          />
        </div>
      </div>

      {/* Send Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full max-w-[280px] mx-auto block bg-transparent border-0 p-0 outline-none transition-transform hover:scale-105"
      >
        <img
          src="/images/feedback/send-button.png"
          alt={isLoading ? 'Sending...' : 'Send'}
          className="w-full"
        />
      </button>

      {/* Spacer */}
      <div style={{ height: '80px' }} />

      {/* Counter Text */}
      <div className="text-center mb-3">
        <p className="text-base sm:text-lg counter-text">
          ↓ {messageCount} people just got anonymous messages ↓
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-6">
        <motion.button
          className="w-full max-w-[380px] bg-transparent border-0 p-0 outline-none"
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
          <div
            className="relative rounded-full py-5 px-8 text-center text-xl sm:text-2xl font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            Get your own replies
          </div>
        </motion.button>
      </div>

      {/* Footer Links */}
      <div className="flex justify-center" style={{ gap: '60px', marginTop: '30px' }}>
        <a href="/terms" className="footer-link hover:opacity-40 transition-opacity no-underline text-sm">
          Terms
        </a>
        <a href="/privacy" className="footer-link hover:opacity-40 transition-opacity no-underline text-sm">
          Privacy
        </a>
      </div>
    </div>
  )
}
