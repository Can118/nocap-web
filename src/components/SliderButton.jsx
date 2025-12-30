'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function SliderButton({ onSlide, disabled, text = 'Slide to send →' }) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragProgress, setDragProgress] = useState(0)
  const containerRef = useRef(null)

  const handleDragEnd = (event, info) => {
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth - 60
    const progress = Math.min(100, Math.max(0, (info.point.x / containerWidth) * 100))

    setDragProgress(progress)

    // If dragged more than 85% across, trigger send
    if (progress > 85 && !disabled) {
      onSlide()
    } else {
      // Reset if not completed
      setTimeout(() => setDragProgress(0), 200)
    }

    setIsDragging(false)
  }

  const handleDrag = (event, info) => {
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth - 60
    const progress = Math.min(100, Math.max(0, (info.point.x / containerWidth) * 100))
    setDragProgress(progress)
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden ${
        disabled ? 'opacity-50' : ''
      }`}
    >
      {/* Progress Background */}
      <div
        className="absolute inset-0 bg-white bg-opacity-20 transition-all"
        style={{ width: `${dragProgress}%` }}
      />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold pointer-events-none">
        {isDragging ? (dragProgress > 85 ? 'Release to send!' : 'Keep sliding...') : text}
      </div>

      {/* Draggable Button */}
      <motion.div
        drag={disabled ? false : 'x'}
        dragConstraints={{ left: 0, right: containerRef.current?.offsetWidth - 60 || 0 }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{ x: dragProgress === 0 ? 0 : undefined }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute left-1 top-1 w-12 h-12 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center z-10"
      >
        <span className="text-2xl">{dragProgress > 85 ? '✓' : '→'}</span>
      </motion.div>
    </div>
  )
}
