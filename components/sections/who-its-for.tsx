'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhoItsFor() {
  const cards = [
    {
      title: 'High-school students',
      description: 'Learn time management early and reduce school stress.',
      image: '/images/whofor/High-school-students.jpg',
    },
    {
      title: 'University & college students',
      description: 'Balance classes, projects, and exams with confidence.',
      image: '/images/whofor/University-college_students.jpg',
    },
    {
      title: 'Schools & institutions',
      description: 'Support students beyond the classroom with smart planning tools.',
      image: '/images/whofor/Schools-institutions.jpg',
    },
  ]

  return (
    <section id="who-its-for" className="tully-bg-alt-b scroll-mt-24 py-16 md:scroll-mt-28 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="tully-section-title mb-3 text-[#4a5568] dark:text-[#e2eaf7]">
            WHO TULLY IS FOR
          </h2>
          <p className="tully-section-lead font-light text-[#94a3b8] dark:text-[#a8b7cd]">Built for every learning stage</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white p-2 shadow-sm transition-shadow hover:shadow-md dark:border-[#32435d] dark:bg-[#172334] dark:shadow-none"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="px-6 py-8 text-center">
                <h3 className="mb-4 text-xl font-bold text-[#4a5568] dark:text-[#dee7f5]">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-[#718096] dark:text-[#a7b6cc]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
