'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 font-sans overflow-hidden md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-[#3D4C5E] mb-3">Contact Us</h2>
          <p className="text-xl text-[#7A869A]">Send us a message</p>
        </div>

        <div className="relative mx-auto flex flex-col md:flex-row items-center justify-center">
          
          {/* Left Sidebar (Orange Info Card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // We use z-0 and a specific width to let the form overlap it
            className="relative z-0 h-full min-h-[550px] w-full rounded-[2.5rem] bg-[#FFB347] bg-cover bg-center bg-no-repeat p-10 text-white shadow-lg md:-mr-20 md:w-[420px] flex flex-col justify-between"
            style={{ backgroundImage: "url('/images/contact_bg.png')" }}
          >
            <div>
              <h3 className="mb-3 text-3xl font-semibold">Contact Information</h3>
              <p className="mb-12 text-base opacity-90">Say something to start live chat</p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-5">
                  <MapPin className="h-6 w-6" />
                  <span className="text-lg">London, UK</span>
                </div>
                <div className="flex items-center gap-5">
                  <Phone className="h-6 w-6" />
                  <span className="text-lg">+888 650 5677</span>
                </div>
                <div className="flex items-center gap-5">
                  <Mail className="h-6 w-6" />
                  <span className="text-lg">tully@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-auto flex gap-4">
              <a href="#" className="rounded-full bg-[#E69F3D] p-3 hover:bg-[#D48F2C] transition-colors">
                <Facebook className="h-5 w-5 fill-current" />
              </a>
              <a href="#" className="rounded-full bg-[#E69F3D] p-3 hover:bg-[#D48F2C] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-[#E69F3D] p-3 hover:bg-[#D48F2C] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Side (Cream Form Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // z-10 puts this over the orange card. bg-[#FFF4E7] matches the cream color.
            className="relative z-10 w-full max-w-3xl rounded-[2.5rem] border border-[#FBE9D7] bg-[#FFF4E7] p-8 shadow-2xl sm:p-12"
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border border-[#DCC7B4] bg-transparent px-5 py-4 text-gray-700 placeholder:text-[#A8927F] focus:outline-none focus:ring-2 focus:ring-[#FFB347]"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-[#DCC7B4] bg-transparent px-5 py-4 text-gray-700 placeholder:text-[#A8927F] focus:outline-none focus:ring-2 focus:ring-[#FFB347]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-[#DCC7B4] bg-transparent px-5 py-4 text-gray-700 placeholder:text-[#A8927F] focus:outline-none focus:ring-2 focus:ring-[#FFB347]"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-[#DCC7B4] bg-transparent px-5 py-4 text-gray-700 placeholder:text-[#A8927F] focus:outline-none focus:ring-2 focus:ring-[#FFB347]"
                />
              </div>

              <textarea
                placeholder="Write your message"
                rows={4}
                className="w-full rounded-xl border border-[#DCC7B4] bg-transparent px-5 py-4 text-gray-700 placeholder:text-[#A8927F] focus:outline-none focus:ring-2 focus:ring-[#FFB347] resize-none"
              />

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto min-w-[240px] rounded-xl bg-gradient-to-b from-[#F2994A] to-[#E28500] px-10 py-4 text-xl font-bold text-white shadow-[0_10px_20px_rgba(226,133,0,0.3)] transition-all hover:brightness-110 active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
