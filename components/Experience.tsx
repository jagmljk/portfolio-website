'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiSparkles, HiCog, HiLightningBolt } from 'react-icons/hi'

const experiences = [
  {
    icon: HiSparkles,
    title: 'AI Research',
    company: 'Sanghani Center for AI',
    location: 'Virginia Tech',
    period: 'Oct 2025 - Present',
    description:
      'Developing intelligent image generation systems combining large language models with diffusion models. Researching novel approaches to controllable generation and multi-modal understanding.',
    tags: ['LLMs', 'Diffusion Models', 'PyTorch', 'Computer Vision'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: HiCog,
    title: 'Robotics Engineer',
    company: 'Bioinspired Technology Center',
    location: 'Virginia Tech',
    period: 'May 2025 - Aug 2025',
    description:
      'Designed and implemented real-time embedded firmware for robotic actuators. Developed control algorithms for precise motor control and sensor integration in bioinspired robotic systems.',
    tags: ['Embedded C', 'RTOS', 'Control Systems', 'Robotics'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: HiLightningBolt,
    title: 'Electrical Lead',
    company: 'The Diggeridoos',
    location: 'Virginia Tech Robotics Club',
    period: 'Sep 2024 - May 2025',
    description:
      'Led the electrical systems redesign for competition robotics team. Managed power distribution, motor control circuits, and sensor integration for autonomous navigation systems.',
    tags: ['PCB Design', 'Power Systems', 'Team Leadership', 'Arduino'],
    color: 'from-orange-500 to-red-500',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding">
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
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4">
              Where I've made an <span className="gradient-text">impact</span>
            </h2>
          </motion.div>

          {/* Experience Cards */}
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative p-8 glass-card hover-lift overflow-hidden">
                  {/* Gradient Accent */}
                  <div
                    className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg`}
                    >
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-accent-600 dark:text-accent-400 font-medium">
                            {exp.company}
                          </p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            {exp.location}
                          </p>
                        </div>
                        <span className="mt-2 md:mt-0 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-accent-500/10 dark:hover:bg-accent-400/10 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
