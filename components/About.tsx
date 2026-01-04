'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiLightningBolt, HiChip, HiCode } from 'react-icons/hi'

const focusAreas = [
  {
    icon: HiLightningBolt,
    title: 'AI & Machine Learning',
    description: 'Developing intelligent systems with deep learning and computer vision',
  },
  {
    icon: HiChip,
    title: 'Embedded Systems',
    description: 'Designing real-time firmware for robotics and IoT applications',
  },
  {
    icon: HiCode,
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern technologies',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-medium text-accent-600 dark:text-accent-400 tracking-wide uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4 mb-6">
              Passionate about building
              <br />
              <span className="gradient-text">intelligent systems</span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I'm a Computer Engineering student at Virginia Tech with a deep passion
                for creating technology that makes a difference. My journey spans from
                low-level embedded systems to high-level AI applications.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Currently, I'm focused on bridging the gap between artificial intelligence
                and physical systems, developing solutions that combine sophisticated
                algorithms with real-world hardware implementations.
              </p>

              {/* Graduation Info */}
              <div className="flex items-center gap-4 p-4 glass-card">
                <div className="p-3 rounded-xl bg-accent-500/10 dark:bg-accent-400/10">
                  <HiAcademicCap className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">
                    Virginia Tech
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    B.S. Computer Engineering • Expected May 2027
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Focus Areas */}
            <motion.div variants={itemVariants} className="space-y-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="group p-6 glass-card hover-lift cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent-500/10 dark:bg-accent-400/10 group-hover:bg-accent-500 dark:group-hover:bg-accent-400 transition-colors duration-300">
                      <area.icon className="w-6 h-6 text-accent-600 dark:text-accent-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                        {area.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
