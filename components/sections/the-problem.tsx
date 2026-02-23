'use client'

import { motion } from 'framer-motion'
import {
  CalendarCheck,
  CalendarDays,
  ClipboardList,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type ProblemItem = {
  icon: LucideIcon
  title: string
  description: string
}

export default function TheProblem() {
  const problems: ProblemItem[] = [
    {
      icon: CalendarDays,
      title: 'Multiple deadlines at once',
      description: 'Assignments from different subjects pile up, making it hard to decide what to tackle first.',
    },
    {
      icon: Zap,
      title: 'Last-minute stress and rushing',
      description: 'Work gets pushed back until the deadline, leading to late nights and unnecessary pressure.',
    },
    {
      icon: ClipboardList,
      title: 'Forgotten tasks',
      description: 'Important assignments and small details slip through the cracks without a clear system.',
    },
    {
      icon: CalendarCheck,
      title: 'Poor time management habits',
      description: 'Without daily structure, students struggle to plan their time effectively.',
    },
    {
      icon: CalendarCheck,
      title: 'Overwhelm during busy weeks',
      description: 'When everything feels urgent, it becomes difficult to stay focused and organized.',
    },
  ]

  return (
    <section id="problem" className="scroll-mt-24 bg-white py-16 md:scroll-mt-28 md:py-24 dark:bg-[#0e1521]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#2f3f5c] md:text-4xl dark:text-[#e2eaf7]">
            The Problem
          </h2>
          <h3 className="mt-2 text-xl font-semibold text-[#f59e0b] md:text-2xl dark:text-[#f8b03d]">
            Students know what&apos;s due...
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-base text-[#6b778d] dark:text-[#a5b4c9]">
            But struggle with when to start and how to keep up.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          <div className="grid w-full gap-6 md:grid-cols-3">
            {problems.slice(0, 3).map((item, index) => (
              <ProblemCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div className="grid w-full gap-6 md:max-w-[66%] md:grid-cols-2">
            {problems.slice(3, 5).map((item, index) => (
              <ProblemCard key={item.title} item={item} index={index + 3} />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mx-auto mt-16 max-w-3xl text-center text-sm font-medium text-[#f59e0b] md:text-lg dark:text-[#f8b03d]"
        >
          Traditional planners and school platforms show what to do -
          <span className="font-normal text-[#6b778d] dark:text-[#a5b4c9]">
            {' '}
            but not how to manage it day by day.
          </span>
        </motion.p>
      </div>
    </section>
  )
}

function ProblemCard({ item, index }: { item: ProblemItem; index: number }) {
  const Icon = item.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center rounded-2xl border-2 border-[#fcd34d]/30 bg-white p-8 text-center transition-shadow hover:shadow-md dark:border-[#32445f] dark:bg-[#162233]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center">
        <Icon className="h-10 w-10 text-[#f59e0b] dark:text-[#f8b03d]" strokeWidth={1.5} />
      </div>
      <h3 className="mb-3 text-lg font-bold text-[#f59e0b] dark:text-[#f8b03d]">
        {item.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-[#6b778d] dark:text-[#a5b4c9]">
        {item.description}
      </p>
    </motion.article>
  )
}
