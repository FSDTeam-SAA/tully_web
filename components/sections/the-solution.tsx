'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CalendarDays, Lightbulb, RefreshCw, TrendingUp } from 'lucide-react'

export default function TheSolution() {
  const bullets = [
    { icon: Lightbulb, label: 'Actionable daily steps' },
    { icon: CalendarDays, label: 'Realistic scheduling' },
    { icon: RefreshCw, label: 'Automatic adjustments when plans change' },
    { icon: TrendingUp, label: 'Clear progress tracking' },
  ]

  return (
    <section id="solution" className="scroll-mt-24 bg-[#f8f4ed] py-16 md:scroll-mt-28 md:py-20 dark:bg-[#121c2a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center md:mb-14"
        >
          <h2 className="tully-section-title text-[#3b4963] dark:text-[#e2eaf7]">
            The Solution
          </h2>
          <p className="mt-1 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Meet Tully
          </p>
          <p className="tully-section-lead mx-auto mt-3 max-w-3xl text-[#6f7b90] dark:text-[#a8b7cd]">
            Tully transforms assignments into a clear, manageable plan that adapts to real life.
          </p>

          <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="text-left">
              <h3 className="text-2xl font-semibold tracking-tight text-[#3b4963] md:text-3xl dark:text-[#dfe8f5]">
                Instead of a long list of tasks, students get:
              </h3>

              <ul className="mt-8 space-y-4">
                {bullets.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-start gap-3 text-[#53627b] dark:text-[#afbdd1]">
                      <span className="mt-[3px] inline-flex text-primary">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />
                      </span>
                      <span className="text-lg leading-relaxed md:text-xl">{item.label}</span>
                    </li>
                  )
                })}
              </ul>

              <p className="mt-11 text-lg font-semibold text-[#53627b] md:text-xl dark:text-[#c3cfe1]">
                <span className="text-primary">Built to help students plan better</span> - not just work harder.
              </p>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-[430px] md:max-w-[500px]">
                <Image
                  src="/images/the-solution.png"
                  alt="Student with Tully solution highlights"
                  width={900}
                  height={620}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
