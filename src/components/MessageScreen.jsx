'use client'

import { useState } from 'react'

export default function MessageScreen({
  onSubmit,
  onSkip,
  receiverName,
  questionText,
  isLoading
}) {
  const [message, setMessage] = useState('')

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
      {/* Confirmation Message - Independent positioning - Moved up */}
      <div className="flex justify-center" style={{ marginTop: '0px' }}>
        <img
          src="/images/message/text_message_screen.png"
          alt="Your answer is sent, but they'll never know it was you"
          className="w-full max-w-[340px]"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Message Container - Independent positioning - Scaled down */}
      <div className="relative max-w-[360px] mx-auto" style={{ marginTop: '20px' }}>
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
          <h2 className="question-text" style={{ fontSize: '18px', WebkitTextStroke: '4px #757101', textStroke: '4px #757101' }}>
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

      {/* Send Button - Independent positioning */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full max-w-[200px] mx-auto block bg-transparent border-0 p-0 outline-none transition-transform hover:scale-105"
        style={{ marginTop: '20px' }}
      >
        <img
          src="/images/message/sendbutton_messagescreen.png"
          alt={isLoading ? 'Sending...' : 'Send'}
          className="w-full"
        />
      </button>
    </div>
  )
}
