'use client'

import { motion } from 'framer-motion'

export default function SecurityEthics() {
  const brandColor = "#FDB03A"; // Centralized color for easy editing

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

  return (
    <section id="security" className="relative overflow-hidden bg-white py-14 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        
        {/* Header */}
        <div className="mb-10 text-center md:mb-20">
          <h2 className="mb-3 text-2xl font-bold tracking-[0.2em] text-[#3A475C] md:text-4xl">
            SECURITY & ETHICS
          </h2>
          <p className="text-[15px] font-medium text-[#828E9F] md:text-lg">
            Built with trust in mind
          </p>
        </div>

        {/* Responsive Grid System */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-0"
        >
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10 md:h-[400px] md:justify-between md:gap-0">
            {/* Top Left */}
            <motion.div variants={itemVariants} className="group relative flex justify-center md:items-center md:justify-end">
              <p className="z-10 mx-auto max-w-[340px] text-center text-[14px] font-medium leading-relaxed text-[#68778D] md:mr-10 md:mx-0 md:max-w-none md:text-right lg:text-[16px]">
                AI supports planning never<br className="hidden md:block" /> completes academic work
              </p>
              {/* Horizontal Line */}
              <div className="hidden md:block absolute right-0 top-1/2 h-[2px] w-8 md:w-10" style={{ backgroundColor: brandColor }} />
              {/* Vertical Connector */}
              <div className="hidden md:block absolute right-0 top-1/2 h-[100px] w-[2px]" style={{ backgroundColor: brandColor }} />
            </motion.div>

            {/* Bottom Left */}
            <motion.div variants={itemVariants} className="group relative flex justify-center md:items-center md:justify-end">
              <p className="z-10 mx-auto max-w-[340px] text-center text-[14px] font-medium leading-relaxed text-[#68778D] md:mr-10 md:mx-0 md:max-w-none md:text-right lg:text-[16px]">
                Designed to align with<br className="hidden md:block" /> educational integrity standards
              </p>
              {/* Horizontal Line */}
              <div className="hidden md:block absolute right-0 top-1/2 h-[2px] w-8 md:w-10" style={{ backgroundColor: brandColor }} />
              {/* Vertical Connector */}
              <div className="hidden md:block absolute bottom-1/2 right-0 h-[100px] w-[2px]" style={{ backgroundColor: brandColor }} />
            </motion.div>
          </div>

          {/* CENTER IMAGE */}
          <motion.div 
            variants={itemVariants}
            className="relative z-20 flex justify-center px-4"
          >
            <div className="relative h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[420px] lg:w-[420px]">
              <img 
                src="/images/security.png" 
                alt="Security Shield"
                className="h-full w-full object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10 md:h-[400px] md:justify-between md:gap-0">
            {/* Top Right */}
            <motion.div variants={itemVariants} className="group relative flex justify-center md:items-center md:justify-start">
              {/* Horizontal Line */}
              <div className="hidden md:block absolute left-0 top-1/2 h-[2px] w-8 md:w-10" style={{ backgroundColor: brandColor }} />
              {/* Vertical Connector */}
              <div className="hidden md:block absolute left-0 top-1/2 h-[100px] w-[2px]" style={{ backgroundColor: brandColor }} />
              <p className="z-10 mx-auto max-w-[340px] text-center text-[14px] font-medium leading-relaxed text-[#68778D] md:ml-10 md:mx-0 md:max-w-none md:text-left lg:text-[16px]">
                Student data is encrypted and<br className="hidden md:block" /> protected
              </p>
            </motion.div>

            {/* Bottom Right */}
            <motion.div variants={itemVariants} className="group relative flex justify-center md:items-center md:justify-start">
              {/* Horizontal Line */}
              <div className="hidden md:block absolute left-0 top-1/2 h-[2px] w-8 md:w-10" style={{ backgroundColor: brandColor }} />
              {/* Vertical Connector */}
              <div className="hidden md:block absolute bottom-1/2 left-0 h-[100px] w-[2px]" style={{ backgroundColor: brandColor }} />
              <p className="z-10 mx-auto max-w-[340px] text-center text-[14px] font-medium leading-relaxed text-[#68778D] md:ml-10 md:mx-0 md:max-w-none md:text-left lg:text-[16px]">
                No selling or sharing of<br className="hidden md:block" /> student data
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
