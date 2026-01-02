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
  const [replyCount, setReplyCount] = useState(77) // Dynamic counter starting at 77

  // Animate counter - changes every second
  useEffect(() => {
    const interval = setInterval(() => {
      setReplyCount(prev => {
        // Generate random change between -2 and +3, excluding 0
        const changes = [-2, -1, 1, 2, 3]
        const randomChange = changes[Math.floor(Math.random() * changes.length)]
        return prev + randomChange
      })
    }, 1000) // Every 1 second

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

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Confirmation Message - Using PNG - Smaller and higher */}
      <div className="flex justify-center mb-4">
        <img
          src="/images/message/text_message_screen.png"
          alt="Your answer is sent, but they'll never know it was you"
          className="w-full max-w-[340px]"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Message Container - Using PNG Background - Smaller */}
      <div className="relative mb-6 max-w-[420px] mx-auto">
        <img
          src="/images/message/message_container.png"
          alt="Message container"
          className="w-full"
        />

        {/* Question Text Overlay */}
        <div
          className="absolute"
          style={{
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '85%',
            textAlign: 'center'
          }}
        >
          <h2 className="text-xl sm:text-2xl question-text">
            {questionText}
          </h2>
        </div>

        {/* Message Input Overlay */}
        <div
          className="absolute"
          style={{
            top: '35%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '85%'
          }}
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="you can also send an anonymous reply to your friend 😈"
            className="w-full h-32 p-4 bg-transparent border-0 resize-none focus:outline-none message-textarea"
            maxLength={500}
            disabled={isLoading}
            style={{
              fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '700',
              color: '#666',
              fontSize: '17px'
            }}
          />
        </div>
      </div>

      {/* Send Button - Using PNG - Smaller */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full max-w-[200px] mx-auto block bg-transparent border-0 p-0 outline-none transition-transform hover:scale-105"
      >
        <img
          src="/images/message/sendbutton_messagescreen.png"
          alt={isLoading ? 'Sending...' : 'Send'}
          className="w-full"
        />
      </button>

      {/* Spacer */}
      <div style={{ height: '60px' }} />

      {/* Counter - Dynamic text matching slider screen */}
      <div className="flex justify-center mb-4">
        <p className="text-base sm:text-lg counter-text">
          ↓ {replyCount} people just got anonymous messages ↓
        </p>
      </div>

      {/* CTA Button - Using PNG with Animation - Smaller */}
      <div className="flex justify-center mb-6">
        <motion.button
          className="w-full max-w-[320px] bg-transparent border-0 p-0 outline-none"
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
            src="/images/message/getyourownreplies_button.png"
            alt="Get your own replies"
            className="w-full"
          />
        </motion.button>
      </div>
    </div>
  )
}
