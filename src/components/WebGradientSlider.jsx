'use client'

import React from 'react'

/**
 * WebGradientSlider Component - Web version of mobile GradientSlider
 * Based on Figma specs from mobile app
 *
 * Figma specs:
 * Bar: 986dp x 88dp, 8dp black border, rounded 100dp
 * Knob: 222dp x 111dp, 12dp blue border, rounded 100dp, shadow 4dp
 *
 * @param {number} percentage - The position of the knob (0-100)
 * @param {number} containerWidth - Width of the container
 */
export default function WebGradientSlider({ percentage = 50, containerWidth }) {
  // Mobile-friendly dimensions while maintaining Figma proportions
  // Use 100% width if no containerWidth specified
  const baseWidth = containerWidth || (typeof window !== 'undefined' ? window.innerWidth * 0.78 : 300)

  // Bar dimensions - scaled for mobile
  const barWidth = baseWidth
  const barHeight = 36 // Fixed height for mobile
  const barBorderWidth = 4 // Scaled down from 8dp for mobile
  const barRadius = barHeight / 2 // Fully rounded

  // Knob dimensions - pill shape with reduced size
  const knobWidth = barWidth * 0.22 // ~22% of bar width
  const knobHeight = barHeight * 1.18 // ~1.18x bar height
  const knobBorderWidth = 6 // Border width
  const knobRadius = knobHeight / 2 // Fully rounded (pill shape)

  // Total SVG height needs to accommodate the knob
  const svgHeight = knobHeight + 12 // Add padding for shadow

  // Calculate knob position to center it at the percentage point
  const knobX = (barWidth * (percentage / 100)) - (knobWidth / 2)
  const clampedKnobX = Math.max(0, Math.min(barWidth - knobWidth, knobX))

  // Vertical centering
  const barY = (svgHeight - barHeight) / 2
  const knobY = (svgHeight - knobHeight) / 2

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <svg
        height={svgHeight}
        width={barWidth}
        style={{ overflow: 'visible', pointerEvents: 'none' }}
      >
        <defs>
          {/* Bar gradient: Blue to Pink */}
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#53B4F9" stopOpacity="1" />
            <stop offset="100%" stopColor="#F80261" stopOpacity="1" />
          </linearGradient>

          {/* Shadow filter for knob */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              floodColor="#000000"
              floodOpacity="0.25"
            />
          </filter>

          {/* Mask to hide stroke under knob */}
          <mask id="strokeMask">
            {/* White background - shows stroke everywhere */}
            <rect x="0" y="0" width={barWidth} height={svgHeight} fill="white" />
            {/* Black oval at knob position - hides stroke there */}
            <rect
              x={clampedKnobX}
              y={knobY}
              width={knobWidth}
              height={knobHeight}
              rx={knobRadius}
              ry={knobRadius}
              fill="black"
            />
          </mask>
        </defs>

        {/* Slider Bar with gradient fill - no stroke */}
        <rect
          x="0"
          y={barY}
          width={barWidth}
          height={barHeight}
          rx={barRadius}
          ry={barRadius}
          fill="url(#barGradient)"
        />

        {/* Inner stroke (10% opacity) with mask to hide under knob */}
        <rect
          x={barBorderWidth}
          y={barY + barBorderWidth}
          width={barWidth - (barBorderWidth * 2)}
          height={barHeight - (barBorderWidth * 2)}
          rx={barRadius - barBorderWidth}
          ry={barRadius - barBorderWidth}
          fill="transparent"
          stroke="#191919"
          strokeWidth={barBorderWidth}
          strokeOpacity={0.1}
          mask="url(#strokeMask)"
        />

        {/* Slider Knob with transparent fill, pink border and shadow */}
        <rect
          x={clampedKnobX}
          y={knobY}
          width={knobWidth}
          height={knobHeight}
          rx={knobRadius}
          ry={knobRadius}
          fill="transparent"
          stroke="#FF1B90"
          strokeWidth={knobBorderWidth}
          filter="url(#shadow)"
        />
      </svg>
    </div>
  )
}
