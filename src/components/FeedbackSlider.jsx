'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import WebGradientSlider from './WebGradientSlider'

export default function FeedbackSlider({ onSubmit, receiverName, isLoading }) {
  const [rating, setRating] = useState(0) // -100 to +100
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)
  const dragContainerRef = useRef(null)

  const handleDrag = (event, info) => {
    if (!dragContainerRef.current) return

    const containerRect = dragContainerRef.current.getBoundingClientRect()
    const sliderWidth = containerRect.width

    // info.point.x is the absolute screen position
    const relativeX = info.point.x - containerRect.left

    // Clamp between 0 and container width
    const clampedX = Math.max(0, Math.min(relativeX, sliderWidth))

    // Convert to percentage (0-100)
    const percentage = (clampedX / sliderWidth) * 100

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

      {/* Slider Container - sliderbar_container.png as background */}
      <div className="relative mb-4">
        <img
          src="/images/feedback/sliderbar_container.png"
          alt="Slider"
          className="w-full h-auto"
        />

        {/* WebGradientSlider overlay - positioned in the yellow card area */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ paddingTop: '8%' }}>
          <div className="w-[78%]" style={{ pointerEvents: 'none' }}>
            <WebGradientSlider
              percentage={sliderPercentage}
              containerWidth={undefined} // Will use 100% of parent
            />
          </div>
        </div>

        {/* Interactive draggable overlay - covers the slider track area */}
        <div
          ref={sliderRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ paddingTop: '8%' }}
        >
          <div
            ref={dragContainerRef}
            className="relative w-[78%]"
            style={{ height: '60px' }}
            onMouseDown={(e) => {
              // Handle click anywhere on track to jump to position
              if (!dragContainerRef.current) return
              const rect = dragContainerRef.current.getBoundingClientRect()
              const relativeX = e.clientX - rect.left
              const clampedX = Math.max(0, Math.min(relativeX, rect.width))
              const percentage = (clampedX / rect.width) * 100
              const normalizedRating = (percentage / 100) * 200 - 100
              setRating(Math.round(normalizedRating))
              setHasInteracted(true)
            }}
            onTouchStart={(e) => {
              // Handle touch anywhere on track
              if (!dragContainerRef.current || e.touches.length === 0) return
              const rect = dragContainerRef.current.getBoundingClientRect()
              const relativeX = e.touches[0].clientX - rect.left
              const clampedX = Math.max(0, Math.min(relativeX, rect.width))
              const percentage = (clampedX / rect.width) * 100
              const normalizedRating = (percentage / 100) * 200 - 100
              setRating(Math.round(normalizedRating))
              setHasInteracted(true)
            }}
          >
            {/* Transparent draggable area covering the entire track */}
            <motion.div
              drag="x"
              dragElastic={0}
              dragMomentum={false}
              dragConstraints={{ left: 0, right: 0 }}
              onDrag={handleDrag}
              onDragStart={() => {
                console.log('Drag started')
                setIsDragging(true)
                setHasInteracted(true)
              }}
              onDragEnd={() => {
                console.log('Drag ended')
                setIsDragging(false)
              }}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                touchAction: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
              }}
              className="cursor-pointer active:cursor-grabbing"
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
