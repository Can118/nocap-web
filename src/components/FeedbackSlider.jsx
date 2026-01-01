'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function FeedbackSlider({ onSubmit, receiverName, isLoading }) {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [rating, setRating] = useState(0) // -100 to +100
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(300)

  // Track knob position
  const x = useMotionValue(0)

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setContainerWidth(width)
        // Set initial position to center
        x.set(width / 2)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [x])

  // Calculate max drag distance (container width minus knob width)
  const knobWidth = containerWidth * 0.25 // 25% of container
  const maxDrag = containerWidth - knobWidth

  const handleDragEnd = () => {
    if (!containerRef.current) return

    const currentX = x.get()
    // Convert position to percentage (0 to 100)
    const percentage = Math.max(0, Math.min(100, (currentX / maxDrag) * 100))
    // Convert to rating (-100 to +100)
    const newRating = Math.round((percentage / 100) * 200 - 100)
    setRating(newRating)

    if (!hasInteracted) {
      setHasInteracted(true)
    }

    console.log('Rating:', newRating, 'Position:', currentX, 'Percentage:', percentage)
  }

  const handleSubmit = () => {
    if (!hasInteracted) return
    onSubmit(rating)
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6">
      {/* Upper section - moves independently from Send button */}
      <div className="-mt-16">
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

        {/* Slider positioned absolutely over the yellow card */}
        <div
          className="absolute"
          style={{
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '78%',
            zIndex: 10,
          }}
        >
          <div
            ref={containerRef}
            className="relative w-full"
            style={{
              height: '45px',
            }}
          >
            {/* Gradient Bar Track */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '80%',
                transform: 'translateY(-50%)',
                borderRadius: '100px',
                background: 'linear-gradient(to right, #53B4F9 0%, #F80261 100%)',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.15)',
              }}
            />

            {/* Draggable Knob */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: maxDrag }}
              dragElastic={0}
              dragMomentum={false}
              style={{
                x,
                position: 'absolute',
                top: '50%',
                width: `${(knobWidth / containerWidth) * 100}%`,
                height: '100%',
                minHeight: '35px',
                y: '-50%',
                touchAction: 'none',
              }}
              onDragEnd={handleDragEnd}
              onDrag={() => {
                if (!hasInteracted) setHasInteracted(true)
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              {/* Knob Visual - Pink Oval */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '100px',
                  border: '5px solid #FF1B90',
                  backgroundColor: 'rgba(255, 27, 144, 0.1)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* "tap send!" indicator - shows after interaction */}
        {hasInteracted && (
          <div
            className="absolute"
            style={{
              top: '76%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          >
            <img
              src="/images/feedback/tapsend.png"
              alt="tap send!"
              style={{ maxWidth: '90px', height: 'auto' }}
            />
          </div>
        )}
      </div>

        {/* Anonymous Badge - use PNG version */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/feedback/anonymous-badge.png"
            alt="100% anonymous"
            style={{ width: '180px', height: 'auto', maxWidth: '180px' }}
          />
        </div>
      </div>

      {/* Send Button - use PNG version exactly as is */}
      <button
        onClick={handleSubmit}
        disabled={!hasInteracted || isLoading}
        className="w-full max-w-[200px] mx-auto block transition-transform hover:scale-105 bg-transparent border-0 p-0 outline-none"
        style={{ marginTop: '26px' }}
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
