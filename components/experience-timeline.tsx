"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative mt-8 ml-4">
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600" />

      {/* Timeline items */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-8px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h4 className="text-lg font-semibold text-gray-900">{experience.title}</h4>
                <span className="text-sm text-gray-500 font-light">{experience.period}</span>
              </div>
              <p className="text-blue-600 font-semibold">{experience.company}</p>
              <p className="text-gray-600 text-sm font-light">{experience.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {experience.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-gray-50 border-gray-200 text-gray-700 text-xs font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline
