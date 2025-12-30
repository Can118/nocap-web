'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FeedbackSlider({ onSubmit, receiverName, isLoading }) {
  const [rating, setRating] = useState(0) // -100 to +100
  const [hasInteracted, setHasInteracted] = useState(false)
  const sliderRef = useRef(null)

  const handleDrag = (event, info) => {
    if (!sliderRef.current) return

    const containerRect = sliderRef.current.getBoundingClientRect()
    const sliderWidth = containerRect.width
    const knobWidth = sliderWidth * 0.22 // 22% of slider width

    // Calculate position relative to container
    const relativeX = info.point.x - containerRect.left - (knobWidth / 2)
    const maxX = sliderWidth - knobWidth
    const position = Math.max(0, Math.min(relativeX, maxX))

    // Convert position to percentage (0-100)
    const percentage = (position / maxX) * 100

    // Convert percentage to rating (-100 to +100)
    const normalizedRating = (percentage / 100) * 200 - 100
    setRating(Math.round(normalizedRating))

    if (!hasInteracted) {
      setHasInteracted(true)
    }
  }

  const handleSubmit = () => {
    if (!hasInteracted) return
    onSubmit(rating)
  }

  // Convert rating (-100 to +100) to percentage (0 to 100) for UI
  const sliderPercentage = ((rating + 100) / 200) * 100

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Question Text - matches QuestionText.js styling */}
      <h2 className="text-center text-3xl sm:text-4xl question-text mb-6 px-4">
        you think i stalk u on a fake account?
      </h2>

      {/* Slider Container - using the SVG with emojis */}
      <div className="relative mb-6">
        <img
          src="/images/feedback/sliderbar_container.svg"
          alt="Slider"
          className="w-full"
        />

        {/* Invisible overlay for drag interaction */}
        <div
          ref={sliderRef}
          className="absolute inset-0 flex items-center px-4 sm:px-6"
        >
          {/* Gradient Slider Bar */}
          <div className="relative w-full" style={{ height: '36px' }}>
            {/* Blue to Pink gradient bar */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-[#53B4F9] to-[#F80261]" />
            </div>

            {/* Draggable Knob - Pill shape with pink border */}
            <motion.div
              drag="x"
              dragConstraints={sliderRef}
              dragElastic={0}
              dragMomentum={false}
              onDrag={handleDrag}
              style={{
                width: '22%',
                height: '42px',
                left: `${sliderPercentage}%`,
                x: '-50%',
              }}
              className="absolute top-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#FF1B90] bg-transparent cursor-grab active:cursor-grabbing"
            />
          </div>
        </div>
      </div>

      {/* Anonymous Badge */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/feedback/anonymous-badge.svg"
          alt="100% anonymous"
          className="h-8 sm:h-10"
        />
      </div>

      {/* Send Button */}
      <button
        onClick={handleSubmit}
        disabled={!hasInteracted || isLoading}
        className={`w-full max-w-sm mx-auto block transition-all ${
          hasInteracted && !isLoading
            ? 'opacity-100 hover:translate-x-1 hover:translate-y-1'
            : 'opacity-50 cursor-not-allowed'
        }`}
      >
        <img
          src="/images/feedback/send-button.png"
          alt={isLoading ? 'Submitting...' : hasInteracted ? 'Send' : 'Drag the slider first'}
          className="w-full"
        />
      </button>
    </div>
  )
}
