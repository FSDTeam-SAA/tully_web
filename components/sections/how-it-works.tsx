'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    {
      image: '/images/howitworks/Add_your_assignments.png',
      imageWidth: 38,
      imageHeight: 48,
      imageClassName: 'h-12 md:h-14 w-auto',
      title: 'Add your assignments',
      description: 'Enter deadlines, courses, and priorities in one place. Keep everything organized so nothing slips through the cracks.',
    },
    {
      image: '/images/howitworks/Tully_plans_the_work.png',
      imageWidth: 44,
      imageHeight: 44,
      imageClassName: 'h-11 md:h-12 w-auto',
      title: 'Tully plans the work',
      description: 'Tully breaks big assignments into clear steps and schedules them based on your real availability.',
    },
    {
      image: '/images/howitworks/Stay_on_track.png',
      imageWidth: 44,
      imageHeight: 45,
      imageClassName: 'h-11 md:h-12 w-auto',
      title: 'Stay on track',
      description: 'Smart reminders and progress tracking help you start earlier and avoid last minute stress.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="timeline" className="tully-bg-section scroll-mt-24 py-16 md:scroll-mt-28 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-14"
        >
          <h2 className="tully-section-title mb-2 text-[#2f3f5c] dark:text-[#e2eaf7]">
            HOW TULLY WORKS
          </h2>
          <p className="tully-section-lead mx-auto max-w-md text-[#6a768a] dark:text-[#a8b6cb]">
            A better way to plan your school week
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-10 md:grid-cols-3 md:gap-12"
        >
          {steps.map((step) => {
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="mx-auto max-w-sm px-2 text-center md:px-4"
              >
                <div className="relative z-10 mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-primary/45 bg-white md:h-24 md:w-24 dark:border-[#33445d] dark:bg-[#162233]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={step.imageWidth}
                    height={step.imageHeight}
                    className={step.imageClassName}
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-[#6a768a] dark:text-[#a8b6cb]">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
