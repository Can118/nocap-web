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
    <div className="w-full max-w-md mx-auto px-4 sm:px-6">
      {/* Question Text */}
      <h2 className="text-center text-2xl sm:text-3xl question-text mb-6 px-2">
        you think i stalk u on a fake account?
      </h2>

      {/* Slider Container - use sliderbar_container.png directly */}
      <div className="relative mb-4">
        <img
          src="/images/feedback/sliderbar_container.png"
          alt="Slider"
          className="w-full h-auto"
        />

        {/* Interactive knob overlay positioned on the slider track */}
        <div
          ref={sliderRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-[78%]" style={{ height: '40px' }}>
            <motion.div
              drag="x"
              dragConstraints={sliderRef}
              dragElastic={0}
              dragMomentum={false}
              onDrag={handleDrag}
              style={{
                width: '22%',
                height: '44px',
                left: `${sliderPercentage}%`,
                x: '-50%',
              }}
              className="absolute top-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#FF1B90] bg-transparent cursor-grab active:cursor-grabbing shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Anonymous Badge - use PNG version */}
      <div className="flex justify-center mb-4">
        <img
          src="/images/feedback/anonymous-badge.png"
          alt="100% anonymous"
          style={{ width: '140px', height: 'auto', maxWidth: '140px' }}
        />
      </div>

      {/* Send Button - use PNG version exactly as is */}
      <button
        onClick={handleSubmit}
        disabled={!hasInteracted || isLoading}
        className="w-full max-w-[300px] mx-auto block transition-transform hover:scale-105"
      >
        <img
          src="/images/feedback/send-button.png"
          alt={isLoading ? 'Submitting...' : hasInteracted ? 'Send' : 'Drag slider first'}
          className="w-full h-auto"
        />
      </button>
    </div>
  )
}
