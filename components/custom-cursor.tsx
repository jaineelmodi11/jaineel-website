"use client"

import { motion } from "framer-motion"

interface CustomCursorProps {
  mousePosition: { x: number; y: number }
  cursorVariant: string
}

const CustomCursor = ({ mousePosition, cursorVariant }: CustomCursorProps) => {
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(0, 122, 255, 0.2)",
      mixBlendMode: "multiply" as const,
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(0, 122, 255, 0.3)",
      mixBlendMode: "multiply" as const,
    },
    text: {
      x: mousePosition.x - 64,
      y: mousePosition.y - 64,
      height: 128,
      width: 128,
      backgroundColor: "rgba(0, 122, 255, 0.1)",
      mixBlendMode: "multiply" as const,
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  )
}

export default CustomCursor
