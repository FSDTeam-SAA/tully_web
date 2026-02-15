'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section id="ready-to-plan" className="bg-[#f8f4ed] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-[1.08fr_0.92fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-3 text-[34px] font-bold tracking-tight text-[#2D3B51] md:text-[42px]">
              Ready to <span className="text-primary">plan</span> smarter?
            </h2>
            <p className="mb-8 max-w-lg text-[18px] leading-relaxed text-[#8A94A6] md:text-[20px]">
              Download Tully today and take control your academic workload.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <Button
                className="rounded-md px-8 py-3 text-base font-semibold text-white"
              >
                Download the App
              </Button>
              <Button
                variant="outline"
                className="rounded-md border border-primary/50 bg-white px-8 py-3 text-base font-semibold text-primary hover:bg-primary/5"
              >
                For Schools & institutions
              </Button>
            </div>

            {/* Store Badges */}
            <div className="flex gap-4">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Image
                  src="/images/readytoplan/playstore.png"
                  alt="Get it on Google Play" 
                  width={154}
                  height={46}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Image
                  src="/images/readytoplan/appstore.png"
                  alt="Download on the App Store" 
                  width={154}
                  height={46}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Image (Mockups) */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[680px]">
              <Image
                src="/images/readytoplan/rightsideimage.png"
                alt="Tully on Desktop and Mobile"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
