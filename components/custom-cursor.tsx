"use client"

import { motion } from "framer-motion"

interface CustomCursorProps {
  mousePosition: { x: number; y: number }
  cursorVariant: string
}

const CustomCursor = ({ mousePosition, cursorVariant }: CustomCursorProps) => {
  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(59, 130, 246, 0.15)",
      border: "2px solid rgba(59, 130, 246, 0.3)",
      mixBlendMode: "multiply" as const,
    },
    button: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      border: "2px solid rgba(59, 130, 246, 0.5)",
      mixBlendMode: "multiply" as const,
    },
    text: {
      x: mousePosition.x - 80,
      y: mousePosition.y - 80,
      height: 160,
      width: 160,
      backgroundColor: "rgba(59, 130, 246, 0.08)",
      border: "2px solid rgba(59, 130, 246, 0.2)",
      mixBlendMode: "multiply" as const,
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden lg:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      style={{
        backdropFilter: "blur(2px)",
      }}
    />
  )
}

export default CustomCursor