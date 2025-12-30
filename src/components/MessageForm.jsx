'use client'

import { useState } from 'react'
import SliderButton from './SliderButton'

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
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Send Anonymous Message
        </h2>
        <p className="text-center text-gray-600 mb-6">
          to {receiverName} (optional)
        </p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your anonymous message here..."
          className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-purple-500 text-lg transition-colors"
          maxLength={500}
          disabled={isLoading}
        />

        <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
          <span>{message.length}/500</span>
          <span className="text-xs">Completely anonymous</span>
        </div>

        {message.trim() ? (
          <SliderButton
            onSlide={handleSubmit}
            disabled={!message.trim() || isLoading}
            text="Slide to send"
          />
        ) : (
          <button
            onClick={handleSkip}
            disabled={isLoading}
            className="w-full py-4 rounded-full font-bold text-lg transition-all bg-gray-200 text-gray-600 hover:bg-gray-300"
          >
            Skip Message
          </button>
        )}

        {message.trim() && (
          <button
            onClick={handleSkip}
            disabled={isLoading}
            className="w-full mt-3 py-2 text-gray-500 hover:text-gray-700 text-sm"
          >
            or skip
          </button>
        )}
      </div>
    </div>
  )
}
