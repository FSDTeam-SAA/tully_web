'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function ForSchools() {
  const benefits = [
    'Branded app with your logo and colors',
    'Central admin dashboard',
    'Student planning insights (privacy-safe)',
    'Optional teacher or counselor access',
    'Easy onboarding for students',
  ]

  return (
    <section id="schools" className="scroll-mt-24 bg-[#f8f4ed] py-16 md:scroll-mt-28 md:py-24 overflow-hidden"> {/* Changed overflow-visible to hidden to prevent scrollbars from large image */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr]">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8 z-20"
          >
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                <span className="text-[#334155]">FOR </span>
                <span className="text-[#D97706]">SCHOOLS </span>
                <span className="text-[#334155]">& </span>
                <span className="text-[#D97706]">INSTITUTIONS</span>
              </h2>
              <p className="mt-3 text-lg font-medium text-[#94a3b8]">
                Help students plan better  not just work harder
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#334155]">
                What schools get with Tully:
              </h3>
              <p className="max-w-lg text-[#64748b] leading-relaxed">
                Students often struggle with planning, not intelligence. Tully helps
                them build structure, consistency, and responsibility.
              </p>
              
              <ul className="space-y-3 mt-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#64748b]" />
                    <span className="text-[#64748b] text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button 
                variant="outline" 
                className="rounded-xl border-2 border-[#FBBF24] px-10 py-6 text-lg font-semibold text-[#D97706] hover:bg-[#FBBF24] hover:text-white transition-all"
              >
                Available soon...
              </Button>
            </div>
          </motion.div>

          {/* Right Image Column - Increased Size */}
       {/* Right Image Column */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1.1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative flex justify-center md:justify-end"
>
  <div className="relative z-10 w-[280px] sm:w-[340px] md:w-[430px] lg:w-[560px] xl:w-[640px] md:translate-x-14 lg:translate-x-20">
    <div className="relative aspect-[800/700] w-full">
      <Image
        src="/images/For_Schools.png"
        alt="Happy student holding phone with Tully app"
        fill
        priority
        className="object-contain"
        sizes="(min-width: 1280px) 640px, (min-width: 1024px) 560px, (min-width: 768px) 430px, (min-width: 640px) 340px, 280px"
      />
    </div>
  </div>
</motion.div>


          
        </div>
      </div>
    </section>
  )
}
