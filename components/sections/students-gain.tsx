'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  UserRound, 
  Timer, 
  BrainCircuit, 
  CalendarClock, 
  Laptop 
} from 'lucide-react'

export default function StudentsGain() {
  const items = [
    { icon: UserRound, label: 'Greater independence', angle: 0 },
    { icon: BrainCircuit, label: 'Reduced stress', angle: 72 },
    { icon: Laptop, label: 'More consistent performance', angle: 144 },
    { icon: CalendarClock, label: 'Better time management habits', angle: 216 },
    { icon: Timer, label: 'Less last minute panic', angle: 288 },
  ]

  return (
    <section id="students-gain" className="tully-bg-section scroll-mt-24 overflow-hidden pb-16 md:scroll-mt-28 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="tully-section-title text-[#2f3f5c] dark:text-[#e2eaf7]">
            What students gain
          </h2>
          <p className="tully-section-lead mx-auto mt-4 max-w-xl text-[#6b778d] dark:text-[#a6b5ca]">
            Practical support to manage schoolwork with confidence.
          </p>
        </motion.div>

        {/* Desktop Radial View */}
        <div className="relative mx-auto hidden h-[600px] w-full max-w-6xl items-center justify-center md:flex">
          
          {/* Central Logo with Shadow/Glow */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-50 bg-white shadow-[0_0_80px_rgba(255,159,28,0.12)] dark:border-[#33445d] dark:bg-[#162233] dark:shadow-none">
            <div className="relative h-12 w-28">
              <Image 
                src="/images/logo_tully.png" 
                alt="Tully Logo" 
                fill 
                className="object-contain dark:hidden"
              />
              <Image 
                src="/images/logo_tully_footer.png" 
                alt="Tully Logo" 
                fill 
                className="hidden object-contain dark:block"
              />
            </div>
          </div>

          {/* Node Mapping */}
          {items.map((item, index) => {
            // Radius and Angle adjustments for "Pixel Perfect" visual balance
            const radius = 280; 
            const x = Math.sin((item.angle * Math.PI) / 180) * radius;
            const y = -Math.cos((item.angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ 
                  left: `calc(42% + ${x}px)`,
                  top: `calc(42% + ${y}px)`,
                }}
                className="absolute flex w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5 text-center"
              >
                {/* Specific Icon Box Styling */}
                <div className="flex h-[96px] w-[96px] items-center justify-center rounded-[32px] bg-[#ff9f1c] text-white shadow-xl shadow-orange-100/50">
                  <item.icon size={48} strokeWidth={1.5} />
                </div>
                
                <p className="max-w-[160px] text-base font-bold leading-[1.2] tracking-tight text-[#2f3f5c] dark:text-[#dce5f4]">
                  {item.label}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 gap-12 md:hidden">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-[32px] bg-[#ff9f1c] text-white shadow-lg">
                <item.icon size={44} strokeWidth={1.5} />
              </div>
              <p className="text-lg font-bold text-[#2f3f5c] dark:text-[#dce5f4]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
