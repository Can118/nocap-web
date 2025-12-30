'use client'

import { useState } from 'react'

export default function MessageForm({ onSubmit, onSkip, receiverName, isLoading }) {
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    if (!message.trim()) return
    await onSubmit(message.trim())
  }

  const handleSkip = () => {
    onSkip()
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Anonymous Badge */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/feedback/anonymous-badge.svg"
          alt="100% anonymous"
          className="h-10"
        />
      </div>

      {/* Message Card */}
      <div className="bg-nocap-yellow border-3 border-black rounded-3xl p-8 shadow-nocap-offset mb-8">
        <h2 className="text-3xl font-black text-center mb-1 text-black">
          Send Anonymous Message
        </h2>
        <p className="text-center text-gray-700 mb-6 font-medium">
          to {receiverName} (optional)
        </p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your anonymous message here..."
          className="w-full h-40 p-4 border-3 border-black rounded-2xl resize-none focus:outline-none focus:ring-4 focus:ring-nocap-pink/30 text-lg bg-nocap-cream transition-all"
          maxLength={500}
          disabled={isLoading}
        />

        <div className="flex justify-between items-center text-sm text-gray-700 font-medium mt-2">
          <span>{message.length}/500</span>
        </div>
      </div>

      {/* Action Buttons */}
      {message.trim() ? (
        <>
          {/* Send Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full transition-all ${
              isLoading
                ? 'opacity-50 cursor-not-allowed'
                : 'opacity-100 hover:translate-x-1 hover:translate-y-1'
            }`}
          >
            <img
              src="/images/feedback/send-button.png"
              alt={isLoading ? 'Sending...' : 'Send'}
              className="w-full"
            />
          </button>

          {/* Skip Link */}
          <button
            onClick={handleSkip}
            disabled={isLoading}
            className="w-full mt-3 py-2 text-gray-600 hover:text-black text-sm font-medium transition-colors"
          >
            or skip
          </button>
        </>
      ) : (
        <button
          onClick={handleSkip}
          disabled={isLoading}
          className="w-full py-4 px-8 rounded-full font-bold text-lg bg-gray-200 text-gray-700 border-3 border-black hover:bg-gray-300 transition-colors"
        >
          Skip Message
        </button>
      )}
    </div>
  )
}
