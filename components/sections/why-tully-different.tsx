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

  return (
    <section id="why-tully-different" className="scroll-mt-24 bg-white py-16 md:scroll-mt-28 md:py-20 dark:bg-[#0e1521]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#2f3f5c] md:text-4xl dark:text-[#e2eaf7]">
            WHY TULLY IS DIFFERENT
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#6b778d] md:text-base dark:text-[#a5b4c9]">
            Built for practical execution, not just task storage.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="rounded-xl border border-[#f2d0ce] bg-[#fff8f8] p-6 dark:border-[#4a3136] dark:bg-[#2a1e25]"
          >
            <h3 className="mb-5 text-lg font-semibold text-[#3b4658] dark:text-[#e3eaf7]">Without Tully</h3>
            <ul className="space-y-3">
              {withoutTully.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#5f6c82] md:text-base dark:text-[#b3bed1]">
                  <XCircle className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#e25e5e]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-xl border border-[#d9e9cf] bg-[#f9fff4] p-6 dark:border-[#355243] dark:bg-[#1f2c29]"
          >
            <h3 className="mb-5 text-lg font-semibold text-[#3b4658] dark:text-[#e3eaf7]">With Tully</h3>
            <ul className="space-y-3">
              {withTully.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#5f6c82] md:text-base dark:text-[#b3bed1]">
                  <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#42a43a]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
