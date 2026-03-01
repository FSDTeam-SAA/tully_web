'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function ForSchools() {
  const benefits = [
    'Branded app with your logo and school colors',
    'Central dashboard for teachers and counselors',
    'Student planning insights (privacy-safe)',
    'Role-based access for support staff',
    'Easy onboarding for students',
  ]

  return (
    <section id="schools" className="tully-bg-alt-a scroll-mt-24 overflow-hidden pb-16 pt-32 md:scroll-mt-28 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Simplified 50/50 Grid */}
        <div className="grid items-center gap-8 md:grid-cols-2">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8 z-20"
          >
            <div className="space-y-2">
              <h2 className="tully-section-title">
                <span className="text-[#334155] dark:text-[#dfe8f5]">FOR </span>
                <span className="text-[#D97706]">SCHOOLS & INSTITUTIONS</span>
              </h2>
              <p className="tully-section-lead font-medium tracking-[0.04em] text-[#94a3b8] dark:text-[#a8b7cd]">
                Help students plan better, not just work harder
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#334155] md:text-2xl dark:text-[#dfe8f5]">
                What schools get with Tully:
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-[#64748b] md:text-base dark:text-[#a8b7cd]">
                Students often struggle with planning, not intelligence. Tully helps
                them build structure, consistency, and responsibility.
              </p>
              
              <ul className="space-y-3 mt-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#64748b] dark:bg-[#8ea0ba]" />
                    <span className="text-base text-[#64748b] dark:text-[#a8b7cd]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button 
                className="rounded-md px-7 py-3 text-base font-semibold text-white"
              >
                Join waitlist
              </Button>
            </div>
          </motion.div>

          {/* Right Image Column - Fixed to scale perfectly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center h-full"
          >
            {/* Removing the fixed w-[px] widths and using w-full 
                The aspect-ratio ensures it stays proportional while growing 
            */}
            <div className="relative z-10 w-full aspect-[4/3] md:scale-110 lg:scale-125 md:translate-x-8 ">
              <Image
                src="/images/shcools.png"
                alt="Happy student holding phone with Tully app"
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
