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
    const sliderWidth = containerRect.width - 56 // minus knob width
    const relativeX = info.point.x - containerRect.left - 28 // account for knob radius
    const position = Math.max(0, Math.min(relativeX, sliderWidth))

    // Convert position (0 to sliderWidth) to rating (-100 to +100)
    const normalizedRating = (position / sliderWidth) * 200 - 100
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
    <div className="w-full max-w-md mx-auto">
      {/* Anonymous Badge */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/feedback/anonymous-badge.svg"
          alt="100% anonymous"
          className="h-10"
        />
      </div>

      {/* Slider Container with integrated emojis and labels */}
      <div className="relative mb-8">
        {/* Background container image */}
        <img
          src="/images/feedback/sliderbar_container.svg"
          alt="Slider container"
          className="w-full"
        />

        {/* Interactive slider overlay - positioned in the middle area */}
        <div
          ref={sliderRef}
          className="absolute inset-x-0 mx-8 top-1/2 -translate-y-1/2 h-4"
          style={{ marginTop: '10px' }} // Fine-tune vertical position if needed
        >
          {/* Invisible track for drag constraints */}
          <div className="relative w-full h-4">
            {/* Blue to pink gradient track */}
            <div className="absolute inset-0 bg-gradient-to-r from-nocap-blue to-nocap-pink rounded-full border-2 border-black" />

            {/* Draggable Knob - Large Pink Circle */}
            <motion.div
              drag="x"
              dragConstraints={sliderRef}
              dragElastic={0}
              dragMomentum={false}
              onDrag={handleDrag}
              style={{
                left: `calc(${sliderPercentage}% - 28px)`, // Center the 56px knob
              }}
              className="absolute top-1/2 -translate-y-1/2 w-14 h-14 bg-nocap-pink rounded-full border-3 border-black shadow-lg cursor-grab active:cursor-grabbing transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleSubmit}
        disabled={!hasInteracted || isLoading}
        className={`w-full transition-all ${
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
