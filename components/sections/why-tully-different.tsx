'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function WhyTullyDifferent() {
  const withoutTully = [
    'Assignments start too late',
    'Deadlines drive panic',
    'No clear daily study structure',
    'Burnout before exam periods',
  ]

  const withTully = [
    'Daily plan with priorities',
    'Smarter pacing before deadlines',
    'Better consistency and routine',
    'Lower stress with better visibility',
  ]

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.14,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  }

  return (
    <section id="why-tully-different" className="tully-bg-alt-a scroll-mt-24 py-16 md:scroll-mt-28 md:py-20">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-10 top-10 h-40 rounded-full bg-[radial-gradient(circle,rgba(249,157,39,0.14),rgba(249,157,39,0))] blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="relative text-center"
        >
          <h2 className="tully-section-title text-[#2f3f5c] dark:text-[#e2eaf7]">
            WHY TULLY IS DIFFERENT
          </h2>
          <p className="tully-section-lead mx-auto mt-3 max-w-2xl text-[#6b778d] dark:text-[#a5b4c9]">
            Built for practical execution, not just task storage.
          </p>
        </motion.div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[28px] border border-[#f0c4bb] bg-[linear-gradient(180deg,rgba(255,250,247,0.98)_0%,rgba(255,243,239,0.98)_100%)] p-6 shadow-[0_18px_40px_rgba(163,75,39,0.08)] dark:border-[#4a3136] dark:bg-[#2a1e25]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#f59e0b_0%,#ef4444_100%)]" />
            <h3 className="mb-5 text-xl font-semibold text-[#3b4658] dark:text-[#e3eaf7]">Without Tully</h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-3"
            >
              {withoutTully.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-base leading-relaxed text-[#5f6c82] md:text-lg dark:text-[#b3bed1]"
                >
                  <XCircle className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#e25e5e]" />
                  <span className="font-bold italic">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.05 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[28px] border border-[#cfe4bf] bg-[linear-gradient(180deg,rgba(251,255,247,0.98)_0%,rgba(243,252,235,0.98)_100%)] p-6 shadow-[0_18px_40px_rgba(56,129,64,0.08)] dark:border-[#355243] dark:bg-[#1f2c29]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#22c55e_0%,#84cc16_100%)]" />
            <h3 className="mb-5 text-xl font-semibold text-[#3b4658] dark:text-[#e3eaf7]">With Tully</h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-3"
            >
              {withTully.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-base leading-relaxed text-[#5f6c82] md:text-lg dark:text-[#b3bed1]"
                >
                  <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#42a43a]" />
                  <span className="font-bold italic">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
