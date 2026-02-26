'use client'

import { motion } from 'framer-motion'

export default function ProductTour() {
  const features = [
    'Assignment breakdown view',
    'Weekly planning calendar',
    'Progress and motivation dashboard',
    'Smart reminder examples',
  ]

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Main Card Container */}
        <div className="rounded-[40px] bg-[#FFF1E7] p-8 md:p-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="tully-section-title mb-1">
                <span className="text-[#D97706]">PRODUCT</span>{' '}
                <span className="text-[#334155]">TOUR</span>
              </h2>
              
              <p className="tully-section-lead mb-8 text-[#94A3B8]">
                See Tully in action
              </p>
              
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-[#64748B] text-lg">
                    <span className="mr-3 text-xl leading-none">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/aAvDI1qae-U?si=nsi3n1u8VJFZ6P4W"
                  title="Product tour demo video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
