'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SecurityEthics() {
  const brandColor = "#FDB03A" // The signature orange

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  // Component for the dot at the end of the line
  const TerminalDot = ({ position }: { position: 'left' | 'right' }) => (
    <div 
      className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${position === 'left' ? '-left-1' : '-right-1'}`}
      style={{ backgroundColor: brandColor }}
    />
  )

  return (
    <section id="security" className="tully-bg-section relative overflow-hidden scroll-mt-24 py-14 md:scroll-mt-28 md:py-28">
      <div className="mx-auto max-w-[1250px] px-5 sm:px-6">
        
        {/* Header */}
        <div className="mb-10 text-center md:mb-20">
          <h2 className="tully-section-title mb-3 uppercase text-[#3A475C] dark:text-[#e2eaf7]">
            SECURITY & ETHICS
          </h2>
          <p className="tully-section-lead font-medium text-[#828E9F] dark:text-[#a6b5ca]">
            Built with trust in mind
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_auto_1.2fr] md:gap-0"
        >
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10 md:h-[400px] md:justify-between md:gap-0">
            {/* Top Left */}
            <div className="flex items-center justify-center md:justify-end gap-6">
              <p className="z-10 text-center text-sm font-medium leading-relaxed text-[#68778D] md:text-right lg:text-base dark:text-[#a8b7cd]">
                AI supports planning never<br className="hidden md:block" /> completes academic work
              </p>
              {/* Connector Container */}
              <div className="hidden md:block relative w-24 lg:w-32">
                <div className="relative h-[2px] w-full" style={{ backgroundColor: brandColor }}>
                  <TerminalDot position="left" />
                  {/* Vertical Line turns DOWN */}
                  <div className="absolute right-0 top-0 h-[100px] w-[2px]" style={{ backgroundColor: brandColor }} />
                </div>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="flex items-center justify-center md:justify-end gap-6">
              <p className="z-10 text-center text-sm font-medium leading-relaxed text-[#68778D] md:text-right lg:text-base dark:text-[#a8b7cd]">
                Designed to align with<br className="hidden md:block" /> educational integrity standards
              </p>
              <div className="hidden md:block relative w-24 lg:w-32">
                <div className="relative h-[2px] w-full" style={{ backgroundColor: brandColor }}>
                  <TerminalDot position="left" />
                  {/* Vertical Line turns UP */}
                  <div className="absolute bottom-0 right-0 h-[100px] w-[2px]" style={{ backgroundColor: brandColor }} />
                </div>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <motion.div variants={itemVariants} className="relative z-20 flex justify-center px-4">
            <div className="relative h-[280px] w-[280px] md:h-[350px] md:w-[350px] lg:h-[420px] lg:w-[420px]">
              <Image
                src="/images/security.png"
                alt="Security Shield"
                fill
                quality={100}
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 420px"
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10 md:h-[400px] md:justify-between md:gap-0">
            {/* Top Right */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              <div className="hidden md:block relative w-24 lg:w-32">
                <div className="relative h-[2px] w-full" style={{ backgroundColor: brandColor }}>
                  <TerminalDot position="right" />
                  {/* Vertical Line turns DOWN */}
                  <div className="absolute left-0 top-0 h-[100px] w-[2px]" style={{ backgroundColor: brandColor }} />
                </div>
              </div>
              <p className="z-10 text-center text-sm font-medium leading-relaxed text-[#68778D] md:text-left lg:text-base dark:text-[#a8b7cd]">
                Student data is encrypted and<br className="hidden md:block" /> protected
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              <div className="hidden md:block relative w-24 lg:w-32">
                <div className="relative h-[2px] w-full" style={{ backgroundColor: brandColor }}>
                  <TerminalDot position="right" />
                  {/* Vertical Line turns UP */}
                  <div className="absolute bottom-0 left-0 h-[100px] w-[2px]" style={{ backgroundColor: brandColor }} />
                </div>
              </div>
              <p className="z-10 text-center text-sm font-medium leading-relaxed text-[#68778D] md:text-left lg:text-base dark:text-[#a8b7cd]">
                No selling or sharing of<br className="hidden md:block" /> student data
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
