'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiExternalLink, HiPaperAirplane } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:jagan05@vt.edu',
    icon: HiMail,
    label: 'jagan05@vt.edu',
    color: 'hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jaganm05',
    icon: FaLinkedinIn,
    label: 'linkedin.com/in/jaganm05',
    color: 'hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500/30',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/jaganm05',
    icon: FaGithub,
    label: 'github.com/jaganm05',
    color: 'hover:bg-neutral-500/10 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-500/30',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding bg-neutral-50/50 dark:bg-neutral-900/50">
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
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4 mb-4">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, research collaborations,
              or interesting projects. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
                Get in touch
              </h3>

              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className={`group flex items-center gap-4 p-4 glass-card transition-all duration-300 ${link.color}`}
                >
                  <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {link.name}
                    </p>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {link.label}
                    </p>
                  </div>
                  <HiExternalLink className="w-5 h-5 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}

              {/* Resume Download */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="inline-flex items-center gap-2 mt-6 text-accent-600 dark:text-accent-400 font-medium hover:underline"
              >
                <HiExternalLink className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : 'bg-accent-500 text-neutral-900 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-neutral-900/30 border-t-neutral-900 rounded-full animate-spin" />
                  ) : submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Jagan Muralitharan. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </motion.footer>
    </section>
  )
}
