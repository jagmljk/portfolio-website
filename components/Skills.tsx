'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiPytorch,
  SiTensorflow,
  SiPython,
  SiArduino,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus,
  SiC,
  SiGit,
  SiDocker,
} from 'react-icons/si'
import { HiChip, HiEye, HiCog, HiServer } from 'react-icons/hi'

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: HiEye,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Computer Vision', icon: HiEye },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    title: 'Embedded Systems',
    icon: HiChip,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'ARM Cortex', icon: HiChip },
      { name: 'Arduino', icon: SiArduino },
      { name: 'STM32', icon: HiCog },
      { name: 'RTOS', icon: HiServer },
    ],
  },
  {
    title: 'Full-Stack Development',
    icon: SiReact,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Languages & Tools',
    icon: SiCplusplus,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'C/C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding">
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
              Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4">
              My <span className="gradient-text">toolkit</span>
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative p-6 glass-card hover-lift h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.4,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition-colors cursor-default"
                      >
                        <skill.icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-neutral-500 dark:text-neutral-400">
              Always learning and exploring new technologies to stay at the cutting edge.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
