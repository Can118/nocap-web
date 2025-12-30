'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FeedbackSlider({ onSubmit, receiverName, isLoading }) {
  const [rating, setRating] = useState(0) // -100 to +100
  const [hasInteracted, setHasInteracted] = useState(false)
  const sliderRef = useRef(null)

  const handleDrag = (event, info) => {
    if (!sliderRef.current) return

    const sliderWidth = sliderRef.current.offsetWidth - 64 // minus knob width
    const position = Math.max(0, Math.min(info.point.x, sliderWidth))

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

  // Determine color based on rating
  const getGradientColor = () => {
    if (rating < -30) return 'from-red-500 to-red-600'
    if (rating > 30) return 'from-green-500 to-green-600'
    return 'from-gray-400 to-gray-500'
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Rate {receiverName}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Slide to share your feedback
        </p>

        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="relative h-16 bg-gradient-to-r from-red-100 via-gray-100 to-green-100 rounded-full mb-4 overflow-visible"
        >
          {/* Labels */}
          <div className="absolute inset-0 flex items-center justify-between px-4 text-sm font-medium pointer-events-none">
            <span className="text-red-600">hell no</span>
            <span className="text-gray-500">neutral</span>
            <span className="text-green-600">yeah</span>
          </div>

          {/* Draggable Knob */}
          <motion.div
            drag="x"
            dragConstraints={sliderRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={handleDrag}
            style={{
              left: `calc(${sliderPercentage}% - 32px)`, // Center the knob
            }}
            className={`absolute top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br ${getGradientColor()} rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center transition-colors`}
          >
            <div className="text-white text-2xl font-bold">
              {rating === 0 ? '·' : rating > 0 ? '👍' : '👎'}
            </div>
          </motion.div>
        </div>

        {/* Rating Display */}
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-gray-800 mb-1">
            {Math.abs(rating)}%
          </div>
          <div className="text-lg text-gray-600">
            {rating > 0 ? 'yeah' : rating < 0 ? 'hell no' : 'neutral'}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!hasInteracted || isLoading}
          className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
            hasInteracted && !isLoading
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Submitting...' : hasInteracted ? 'Continue →' : 'Drag the slider first'}
        </button>

        <p className="text-center text-xs text-gray-400 mt-4">
          Completely anonymous - they won't know it's you
        </p>
      </div>
    </div>
  )
}
