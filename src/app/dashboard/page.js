'use client'

import { useState, useRef } from 'react'

export default function DashboardPage() {
  const [question, setQuestion] = useState('')
  const inputRef = useRef(null)

  // Preset questions for the dice feature
  const presetQuestions = [
    "u think imma respond to ex's message?",
    "should i skip class for no reason?",
    "can i learn the whole semester tonight? (exam tmrw)",
    "should i go blonde this week?",
    "you think i won't ghost you?"
  ]

  // Handle dice click - pick random question and keep keyboard visible
  const handleDiceClick = () => {
    const randomIndex = Math.floor(Math.random() * presetQuestions.length)
    const randomQuestion = presetQuestions[randomIndex]
    setQuestion(randomQuestion)

    // Keep input focused so keyboard stays visible
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Handle copy link
  const handleCopyLink = () => {
    // TODO: Replace with actual username from user profile
    const link = `${window.location.origin}/username`
    navigator.clipboard.writeText(link)
    alert('Link copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-lime-200 to-green-200 flex items-center justify-center p-4">
      {/* Question Creation Card */}
      <div className="w-full max-w-md">
        {/* Yellow card with black border */}
        <div className="bg-yellow-300 border-4 border-black rounded-3xl p-8 shadow-2xl relative">
          {/* Text Input */}
          <div className="mb-6">
            <textarea
              ref={inputRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="type your question..."
              className="w-full h-48 bg-yellow-50 border-3 border-yellow-200 rounded-3xl p-6 text-gray-500 placeholder-gray-400 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              maxLength={200}
            />
          </div>

          {/* Dice Button */}
          <div className="flex justify-center">
            <button
              onClick={handleDiceClick}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
              aria-label="Get random question"
            >
              <span className="text-4xl">🎲</span>
            </button>
          </div>
        </div>

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          className="w-full mt-6 bg-yellow-300 border-4 border-black rounded-full py-4 text-2xl font-black shadow-lg hover:scale-105 transition-transform active:scale-95"
        >
          copy link
        </button>
      </div>
    </div>
  )
}
