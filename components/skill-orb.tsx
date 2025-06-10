"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  category: string
  color: string
}

interface SkillOrbProps {
  skills: Skill[]
}

const SkillOrb = ({ skills }: SkillOrbProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const positionsRef = useRef<{ x: number; y: number }[]>([])

  // Calculate positions only once when dimensions are set
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0 || positionsRef.current.length > 0) return

    const minDistance = 80
    const padding = 40
    const maxAttempts = 100
    const newPositions: { x: number; y: number }[] = []

    skills.forEach((_, index) => {
      let attempts = 0
      let validPosition = false
      let x = 0
      let y = 0

      while (!validPosition && attempts < maxAttempts) {
        x = padding + Math.random() * (dimensions.width - 2 * padding)
        y = padding + Math.random() * (dimensions.height - 2 * padding)

        validPosition = newPositions.every(pos => {
          const dx = pos.x - x
          const dy = pos.y - y
          return Math.sqrt(dx * dx + dy * dy) >= minDistance
        })

        attempts++
      }

      newPositions.push({ x, y })
    })

    positionsRef.current = newPositions
  }, [dimensions, skills])

  // Set dimensions only once on mount
  useEffect(() => {
    if (containerRef.current && dimensions.width === 0) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {dimensions.width > 0 &&
        skills.map((skill, index) => {
          const position = positionsRef.current[index]
          const isHovered = hoveredSkill === skill.name
          const orbSize = 65 + skill.level * 0.3
          const scale = 0.6 + (skill.level / 100) * 0.3

          if (!position) return null

          return (
            <motion.div
              key={skill.name}
              initial={{ 
                opacity: 0,
                x: dimensions.width / 2,
                y: dimensions.height / 2,
                scale: 0
              }}
              animate={{ 
                opacity: 1,
                x: position.x,
                y: position.y,
                scale: scale
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.05,
                duration: 0.5
              }}
              style={{ 
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                zIndex: isHovered ? 10 : 1,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`rounded-full flex items-center justify-center ${
                  isHovered ? "shadow-lg shadow-gray-400/20" : ""
                }`}
                style={{
                  background: isHovered ? `linear-gradient(135deg, ${skill.color}, #D1D5DB)` : skill.color,
                  width: `${orbSize}px`,
                  height: `${orbSize}px`,
                  opacity: isHovered ? 1 : 0.85,
                  padding: "8px",
                }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <span 
                    className="text-[12px] font-medium text-gray-900 leading-tight"
                    style={{
                      maxWidth: `${orbSize - 16}px`,
                      wordBreak: "break-word",
                    }}
                  >
                    {skill.name}
                  </span>
                  {isHovered && (
                    <span className="text-[10px] text-gray-700 mt-1 font-medium">
                      {skill.level}%
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
    </div>
  )
}

export default SkillOrb
