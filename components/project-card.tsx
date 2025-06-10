"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

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
  }
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
    >
      <motion.div
        className="w-full md:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative group">
          <div
            className="absolute -inset-1 rounded-3xl opacity-20 blur-xl transition duration-300 group-hover:opacity-30"
            style={{ background: `linear-gradient(45deg, ${project.color}, #007AFF)` }}
          />
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full">
                <div className="flex justify-between items-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 border-white/50 text-gray-900 hover:bg-white rounded-full"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full md:w-1/2 space-y-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 font-light leading-relaxed"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-gray-50 border-gray-200 text-gray-700 font-medium">
              {tech}
            </Badge>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
