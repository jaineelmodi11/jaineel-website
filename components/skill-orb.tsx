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

    const minDistance = 90
    const padding = 50
    const maxAttempts = 150
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
    <div ref={containerRef} className="w-full h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      {dimensions.width > 0 &&
        skills.map((skill, index) => {
          const position = positionsRef.current[index]
          const isHovered = hoveredSkill === skill.name
          const orbSize = 70 + skill.level * 0.4
          const scale = 0.7 + (skill.level / 100) * 0.4

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
                stiffness: 80,
                damping: 25,
                delay: index * 0.03,
                duration: 0.8
              }}
              style={{ 
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                zIndex: isHovered ? 10 : 1,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: scale * 1.1 }}
            >
              <motion.div
                className={`rounded-full flex items-center justify-center relative overflow-hidden ${
                  isHovered ? "shadow-2xl" : "shadow-lg"
                }`}
                style={{
                  background: isHovered 
                    ? `linear-gradient(135deg, ${skill.color}, #ffffff)` 
                    : skill.color,
                  width: `${orbSize}px`,
                  height: `${orbSize}px`,
                  opacity: isHovered ? 1 : 0.9,
                  padding: "10px",
                }}
                animate={{
                  boxShadow: isHovered 
                    ? `0 20px 40px ${skill.color}40` 
                    : `0 10px 20px ${skill.color}20`
                }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30 blur-sm"
                  style={{ backgroundColor: skill.color }}
                />
                
                {/* Content */}
                <div className="flex flex-col items-center justify-center text-center relative z-10">
                  <span 
                    className="text-white font-bold leading-tight drop-shadow-lg"
                    style={{
                      fontSize: `${Math.max(10, orbSize / 6)}px`,
                      maxWidth: `${orbSize - 20}px`,
                      wordBreak: "break-word",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                    }}
                  >
                    {skill.name}
                  </span>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-1"
                    >
                      <span className="text-white/90 font-semibold text-xs drop-shadow-lg">
                        {skill.level}%
                      </span>
                      <div className="w-8 h-1 bg-white/30 rounded-full mt-1 overflow-hidden">
                        <motion.div 
                          className="h-full bg-white rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )
        })}
    </div>
  )
}

export default SkillOrb