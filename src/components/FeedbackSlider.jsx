'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

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
    const knobWidth = sliderWidth * 0.22 // 22% of slider width

    // info.point.x is the absolute position, we need relative to container
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

  // Convert rating (-100 to +100) to x position in pixels
  // Start at 0 (left edge) when rating is -100, end at container width when rating is +100
  const getKnobPosition = () => {
    if (!dragContainerRef.current) return 0
    const sliderWidth = dragContainerRef.current.offsetWidth || 300
    const percentage = ((rating + 100) / 200) // 0 to 1
    return sliderWidth * percentage
  }

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

        {/* Slider Track and Draggable Knob */}
        <div
          ref={sliderRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ paddingTop: '8%' }}
        >
          <div ref={dragContainerRef} className="relative w-[78%]" style={{ height: '60px' }}>
            {/* Gradient Background Bar */}
            <div
              className="absolute top-1/2 left-0 right-0"
              style={{
                height: '36px',
                transform: 'translateY(-50%)',
                borderRadius: '18px',
                background: 'linear-gradient(to right, #53B4F9 0%, #F80261 100%)',
                boxShadow: 'inset 0 2px 4px rgba(25, 25, 25, 0.1)',
              }}
            />

            {/* Draggable Knob */}
            <motion.div
              drag="x"
              dragElastic={0}
              dragMomentum={false}
              dragConstraints={dragContainerRef}
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
              animate={!isDragging ? { x: getKnobPosition() } : undefined}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                width: '22%',
                height: '42px',
                position: 'absolute',
                top: '50%',
                left: 0,
                y: '-50%',
                touchAction: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              {/* Knob Visual */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '21px',
                  border: '6px solid #FF1B90',
                  background: 'transparent',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
                }}
              />
            </motion.div>
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
