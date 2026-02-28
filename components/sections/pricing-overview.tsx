'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function PricingOverview() {
  const [billingCycle, setBillingCycle] = useState<'month' | 'year'>('month')

  const plans = [
    {
      name: 'Free Planner',
      subtitle: 'Recommended main plan',
      price: '0.00',
      description: 'Mass adoption & habit formation',
      features: [
        'Manual task & assignment creation',
        'Subtasks',
        'Calendar',
        'Basic reminders',
        'Progress bar per assignment',
        'Light streaks',
        'Dark / light mode',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Smart Planner',
      subtitle: 'Recommended main plan',
      price: '2.99',
      description: 'Enjoy your Task every month',
      features: [
        'AI task breakdown',
        'AI smart scheduling & conflict detection',
        'Adaptive reminders',
        'AI study resource suggestions',
        'Full productivity analytics',
        'Weekly summaries & productivity score',
        'Achievement badges',
        'Custom study hours',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Advanced Planner',
      subtitle: 'Recommended main plan',
      price: '4.99',
      description: 'Optional, but powerful',
      features: [
        'Advanced AI rescheduling',
        'Exam preparation mode',
        'Pomodoro focus timer',
        'Priority support',
        'Advanced motivation coaching',
        'Subject-specific AI tone customization',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="min-h-screen bg-background py-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="tully-section-title mb-3 uppercase text-[#2F3F5C]">
            Pricing Overview
          </h2>
          <p className="tully-section-lead mb-8 text-[#6A768A]">Simple, student friendly pricing</p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center">
            <div className="relative grid w-[180px] grid-cols-2 rounded-full border border-[#E69526] bg-card p-1">
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[linear-gradient(180deg,#FFA21A_13.54%,#C27300_100%)] transition-transform duration-300 ease-out ${
                  billingCycle === 'year' ? 'translate-x-full' : ''
                }`}
              />
              <button
                type="button"
                onClick={() => setBillingCycle('month')}
                className={`relative z-10 h-8 rounded-full text-sm font-semibold transition-colors ${
                  billingCycle === 'month' ? 'text-white' : 'text-[#E69526]'
                }`}
              >
                Month
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('year')}
                className={`relative z-10 h-8 rounded-full text-sm font-semibold transition-colors ${
                  billingCycle === 'year' ? 'text-white' : 'text-[#E69526]'
                }`}
              >
                Year
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300
                ${
                  plan.highlighted
                    ? 'border-[#EAD4A8] bg-[#fff4e3] shadow-xl z-10 min-h-[720px]' // Taller middle card
                    : 'border-primary/15 bg-card shadow-sm z-0 min-h-[640px]' // Shorter side cards
                }
              `}
            >
              {/* Top shape image - Fixed to top */}
              <div className="absolute top-0 left-0 w-full">
                <Image
                  src="/images/pricing-card-shape.png"
                  alt=""
                  width={433}
                  height={204}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="block h-auto w-full object-cover"
                />
              </div>

              {/* Content area starts with top margin to clear the absolute image */}
              <div className="relative flex flex-1 flex-col px-7 pb-8 pt-20">
                
                {/* Title Area */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#E69526]">{plan.name}</h3>
                  <p className="text-xs text-[#6A768A]">{plan.subtitle}</p>
                </div>

                {/* Price Area */}
                <div className="mb-2">
                  <div className="flex items-baseline text-[#E69526]">
                    <span className="text-4xl font-bold">$ {plan.price}</span>
                    <span className="ml-1 text-sm font-medium">/month</span>
                  </div>
                  <p className="text-xs text-[#6A768A] mt-1">{plan.description}</p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#EAEAEA]" />

                {/* Features List */}
                <div className="mb-8 flex-1">
                  <p className="mb-4 text-sm font-bold text-[#2F3F5C]">Features :</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#566278]" />
                        <span className="text-[13px] leading-relaxed text-[#566278]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button pinned to bottom */}
                <button
                  className="w-full rounded-md bg-gradient-to-b from-[#F09E26] to-[#D6850E] py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-105"
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
