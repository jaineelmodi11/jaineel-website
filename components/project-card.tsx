"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Sparkles } from "lucide-react"
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    live: string
    featured: boolean
    color: string
    category?: string
  }
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
    >
      {/* Enhanced image section */}
      <motion.div
        className="w-full lg:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative group">
          {/* Enhanced glow effect */}
          <div
            className="absolute -inset-2 rounded-3xl opacity-20 blur-2xl transition duration-500 group-hover:opacity-40"
            style={{ background: `linear-gradient(45deg, ${project.color}, #8b5cf6, ${project.color})` }}
          />
          
          {/* Main image container */}
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
            {!imageError ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
                priority={index === 0}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <span className="text-gray-400 text-lg">Image not available</span>
              </div>
            )}
            
            {/* Enhanced overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <div className="p-8 w-full">
                <div className="flex justify-between items-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 backdrop-blur-sm border-white/50 text-gray-900 hover:bg-white rounded-full font-medium"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-full font-medium shadow-lg" 
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Category badge */}
            {project.category && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-white/50 font-medium">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {project.category}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Enhanced content section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-display">
            {project.title}
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 font-light leading-relaxed text-lg"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="bg-gray-50 border-gray-200 text-gray-700 font-medium px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>

        {/* Enhanced action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-4 pt-4"
        >
          <Button
            variant="outline"
            className="border-2 border-gray-300 hover:bg-gray-50 text-gray-900 rounded-full px-6 py-3 font-medium"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-3 font-medium shadow-lg"
            asChild
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard