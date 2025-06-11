"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  icon?: React.ReactNode
  color?: string
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative mt-12 ml-6">
      {/* Enhanced vertical line */}
      <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600 rounded-full shadow-lg" />

      {/* Timeline items */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12"
          >
            {/* Enhanced timeline dot */}
            <div 
              className="absolute left-[-12px] top-2 w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
              style={{ backgroundColor: experience.color || '#3b82f6' }}
            >
              {experience.icon || <div className="w-3 h-3 bg-white rounded-full" />}
            </div>

            {/* Enhanced content card */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <h4 className="text-xl font-bold text-gray-900">{experience.title}</h4>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                  {experience.period}
                </span>
              </div>
              <p className="text-blue-600 font-bold text-lg mb-3">{experience.company}</p>
              <p className="text-gray-600 text-base font-light leading-relaxed mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-blue-50 border-blue-200 text-blue-700 text-sm font-medium px-3 py-1 hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline