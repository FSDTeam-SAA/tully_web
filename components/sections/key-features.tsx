'use client'

import { motion } from 'framer-motion'
import {
  ClipboardList,
  CalendarDays,
  Bell,
  TrendingUp,
  Laptop,
} from 'lucide-react'

export default function KeyFeatures() {
  const features = [
    {
      icon: ClipboardList,
      title: 'Smart task breakdown',
      description: 'Split large assignments into focused actions.',
    },
    {
      icon: CalendarDays,
      title: 'Realistic scheduling',
      description: 'Weekly plans built around real availability.',
    },
    {
      icon: Bell,
      title: 'Adaptive reminders',
      description: 'Helpful nudges before deadlines become urgent.',
    },
    {
      icon: TrendingUp,
      title: 'Progress & motivation',
      description: 'Track effort and momentum with clear progress.',
    },
    {
      icon: Laptop,
      title: 'Works everywhere',
      description: 'Available on mobile and web with synced planning.',
    },
  ]

  return (
    <section id="features" className="scroll-mt-24 bg-[#f8f4ed] py-16 md:scroll-mt-28 md:py-24 dark:bg-[#111a27]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#4a5568] md:text-4xl dark:text-[#e2eaf7]">
            KEY FEATURES
          </h2>
          <p className="mx-auto max-w-md text-lg text-[#718096] dark:text-[#a8b6cb]">
            Everything students need to stay organized and consistent
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm dark:border dark:border-[#2d3c51] dark:bg-[#172334] dark:shadow-none"
              >
                {/* Icon Container: Matching the Orange Squircle */}
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#ffa51a] shadow-lg shadow-orange-200">
                  <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="mb-4 text-lg font-bold text-[#4a5568] dark:text-[#dbe5f4]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#718096] dark:text-[#a8b6cb]">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
