'use client'

import { motion } from 'framer-motion'
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
    <section id="pricing" className="min-h-screen scroll-mt-24 bg-white py-16 font-sans md:scroll-mt-28 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#2F3F5C] md:text-4xl uppercase">
            Pricing Overview
          </h2>
          <p className="mb-8 text-lg text-[#6A768A]">Simple, student friendly pricing</p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center">
            <div className="relative grid w-[180px] grid-cols-2 rounded-full border border-[#E69526] bg-[#FFFBF2] p-1">
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
        </motion.div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-lg
                ${
                  plan.highlighted
                    ? 'border-[#EAD4A8] bg-[#FFFBF2] ring-1 ring-[#EAD4A8]/50' // Middle Card (Cream)
                    : 'border-[#EAEAEA] bg-white' // Outer Cards (White)
                }
              `}
            >
              {/* Top shape image */}
              <div className="w-full">
                <img 
                  src="/images/pricing-card-shape.png"
                  alt="Pricing card decorative shape"
                  className="w-full h-auto object-cover block "
                  // 'block' prevents tiny gaps below inline images
                />
              </div>

              <div className="mt-[-70px] flex flex-1 flex-col px-7 pb-6">
                
                {/* Title Area */}
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-[#E69526]">{plan.name}</h3>
                  <p className="text-xs text-[#6A768A]">{plan.subtitle}</p>
                </div>

                {/* Price Area */}
                <div className="mb-1">
                  <div className="flex items-baseline">
                    <span className="text-[2.75rem] font-bold text-[#E69526] tracking-tight">
                        $ {plan.price}
                    </span>
                    <span className="ml-2 text-lg text-[#E69526] font-medium">/month</span>
                  </div>
                  <p className="text-xs text-[#6A768A] font-medium">{plan.description}</p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-[#EAEAEA]" />

                {/* Features List */}
                <div className="mb-6 flex-1">
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

                {/* CTA Button */}
                <button
                  className="w-full rounded-md bg-gradient-to-b from-[#F09E26] to-[#D6850E] py-3 text-sm font-bold text-white shadow-sm transition-transform active:scale-[0.98] hover:brightness-105"
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
