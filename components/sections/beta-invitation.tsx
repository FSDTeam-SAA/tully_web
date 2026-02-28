'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function BetaInvitation() {
  return (
    <section id="beta" className="tully-bg-alt-a py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm font-semibold tracking-[0.12em] text-primary">BETA INVITATION</p>
            <h2 className="tully-section-title mt-2 text-[#2f3f5c] dark:text-[#e2eaf7]">
              Be among the first to try Tully
            </h2>
            <p className="tully-section-lead mt-4 max-w-xl text-[#6b778d] dark:text-[#a8b7cd]">
              We are onboarding early students and schools to shape the next generation of planning support.
            </p>

            <div className="mt-6">
              <p className="text-base font-semibold text-[#3c485d] dark:text-[#dce6f4]">Early users receive:</p>
              <ul className="mt-3 space-y-2 text-base text-[#5d6a80] dark:text-[#a8b7cd]">
                <li>- Priority access</li>
                <li>- Direct feedback channel</li>
                <li>- New feature preview releases</li>
              </ul>
            </div>

            <Button className="mt-8 rounded-md px-7 py-3 text-base font-semibold text-white">
              Join Beta Waitlist
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/images/readytoplan/rightsideimage.png"
                alt="Tully beta on desktop and mobile"
                width={3000}
                height={3000}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
