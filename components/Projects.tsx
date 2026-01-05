'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiExternalLink, HiCode, HiChip, HiHeart, HiAcademicCap } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Real-Time Embedded Systems Suite',
    description:
      'Interactive applications featuring graphics rendering, real-time control systems, and embedded game implementations. Demonstrates proficiency in low-level programming and hardware optimization.',
    longDescription:
      'Built multiple interactive applications running on ARM Cortex-M4 microcontrollers. Implemented custom graphics libraries, real-time scheduling algorithms, and optimized memory management for resource-constrained environments.',
    tech: ['C/C++', 'ARM Cortex-M4', 'RTOS', 'Graphics'],
    icon: HiChip,
    color: 'from-blue-500 to-indigo-500',
    features: ['Custom Graphics Engine', 'Real-Time Scheduling', 'Hardware Optimization'],
  },
  {
    title: 'Blood Pressure Monitor',
    description:
      'Medical device with custom algorithms for accurate health monitoring. Features signal processing, user interface, and data logging capabilities.',
    longDescription:
      'Developed a comprehensive blood pressure monitoring system with custom oscillometric algorithms. Implemented digital signal processing for noise reduction and accurate pulse detection.',
    tech: ['Arduino', 'C++', 'Signal Processing', 'Sensors'],
    icon: HiHeart,
    color: 'from-red-500 to-pink-500',
    features: ['Custom Algorithms', 'Signal Processing', 'LCD Display'],
    github: 'https://github.com/jagmljk/Arduino-Blood-Pressure-Monitor',
  },
  {
    title: 'HokieHand Planner',
    description:
      'Full-stack web application helping Virginia Tech students plan their academic journey with intelligent course scheduling and degree progress tracking.',
    longDescription:
      'Built a comprehensive academic planning platform with user authentication, course database integration, and intelligent scheduling algorithms that consider prerequisites and availability.',
    tech: ['React', 'TypeScript', 'MongoDB', 'Node.js'],
    icon: HiAcademicCap,
    color: 'from-orange-500 to-amber-500',
    features: ['Course Scheduling', 'Degree Tracking', 'User Dashboard'],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="section-padding bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-accent-600 dark:text-accent-400 tracking-wide uppercase">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4">
              Things I've <span className="gradient-text">built</span>
            </h2>
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="relative h-full p-6 glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Gradient Glow Effect */}
                  <div
                    className={`absolute -inset-px bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                      {hoveredIndex === index ? project.longDescription : project.description}
                    </p>

                    {/* Features (shown on hover) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-4"
                    >
                      <div className="space-y-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    {'github' in project && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        View Code
                        <HiExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Hover Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-500/20 dark:group-hover:border-accent-400/20 transition-colors duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/jagmljk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-600 dark:text-accent-400 font-medium hover:underline"
            >
              <HiCode className="w-5 h-5" />
              View more on GitHub
              <HiExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
