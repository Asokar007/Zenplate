"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LandingPage() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-[#E8F5E9]">
      {/* Header */}
      <header className="w-full py-6">
        <div className="container flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZenLogo001.jpg-c53JfkylJXMDVV8XUs9T0M9iT3U53D.jpeg"
                alt="Zenplate.ai Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-[#333333]">zenplate.ai</span>
            </Link>
          </motion.div>
          <motion.nav 
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Features
            </Link>
            <Link href="/ai-chat" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              AI Chat
            </Link>
            <Link href="/login" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Login
            </Link>
          </motion.nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container py-20 relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7BAE7F]/5 to-[#FFCBA4]/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,174,127,0.1),transparent_50%)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
            <motion.div 
              className="flex flex-col gap-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#7BAE7F]/10 rounded-full w-fit backdrop-blur-sm border border-[#7BAE7F]/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-[#7BAE7F] font-medium text-shadow-sm">✨ Next-Gen AI Wellness Platform</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#333333] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform Your
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#7BAE7F] via-[#4C6B57] to-[#7BAE7F] bg-clip-text text-transparent animate-gradient-x">
                    Wellness Journey
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#7BAE7F]/20 to-[#FFCBA4]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                <br />
                <span className="text-[#7BAE7F] drop-shadow-sm">with AI</span>
              </motion.h1>

              <motion.p 
                className="text-xl text-[#4f5d75] max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Experience personalized nutrition recommendations and holistic wellness guidance powered by advanced AI technology. Your path to better health starts here.
              </motion.p>

              {/* Enhanced Features Icons */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div 
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#7BAE7F]/10 hover:border-[#7BAE7F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7BAE7F]/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[#7BAE7F]/10 group-hover:bg-[#7BAE7F]/20 transition-colors">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#7BAE7F"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#7BAE7F"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#333333] text-center group-hover:text-[#7BAE7F] transition-colors">Personalized Recommendations</p>
                </motion.div>

                <motion.div 
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#7BAE7F]/10 hover:border-[#7BAE7F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7BAE7F]/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[#7BAE7F]/10 group-hover:bg-[#7BAE7F]/20 transition-colors">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#7BAE7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#333333] text-center group-hover:text-[#7BAE7F] transition-colors">Holistic Approach</p>
                </motion.div>

                <motion.div 
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#7BAE7F]/10 hover:border-[#7BAE7F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7BAE7F]/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[#7BAE7F]/10 group-hover:bg-[#7BAE7F]/20 transition-colors">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#7BAE7F" strokeWidth="2"/>
                      <path d="M9 12l2 2 4-4" stroke="#7BAE7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#333333] text-center group-hover:text-[#7BAE7F] transition-colors">Health Insights</p>
                </motion.div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex items-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button
                  size="lg"
                  className="group relative bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333] text-lg px-8 py-6 rounded-lg h-auto shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  onClick={handleGetStarted}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7BAE7F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative border-[#7BAE7F] text-[#7BAE7F] hover:bg-[#7BAE7F]/10 text-lg px-8 py-6 rounded-lg h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => router.push("/features")}
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7BAE7F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Wellness Illustration Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative mx-auto w-[500px] h-[500px]">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0">
                  {/* Circular Pattern with Enhanced Animation */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-[#7BAE7F]/20"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-4 border-[#FFCBA4]/20"
                    animate={{
                      scale: [1, 0.9, 1],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>

                {/* Enhanced Center Logo */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.8, delay: 0.8 }}
                >
                  <div className="relative">
                    {/* Enhanced Logo Container */}
                    <div className="relative bg-white/20 rounded-3xl p-8 shadow-2xl border border-[#7BAE7F]/10 backdrop-blur-xl transform hover:shadow-[#7BAE7F]/30 transition-all duration-300">
                      {/* Enhanced Decorative Elements */}
                      <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#7BAE7F]/80 rounded-full shadow-lg animate-pulse backdrop-blur-sm" />
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#FFCBA4]/80 rounded-full shadow-lg animate-pulse delay-300 backdrop-blur-sm" />
                      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#FFCBA4]/80 rounded-full shadow-lg animate-pulse delay-600 backdrop-blur-sm" />
                      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#7BAE7F]/80 rounded-full shadow-lg animate-pulse delay-900 backdrop-blur-sm" />
                      
                      {/* Logo with Enhanced Hover Effect */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7BAE7F]/5 to-[#FFCBA4]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />
                        <div className="absolute inset-0 bg-[#7BAE7F]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/101.jpg-zQtGv5HLQZ8nS5Ayjx87Sxmg8i3Jj4.jpeg"
                          alt="Zenplate.ai Badge"
                          width={180}
                          height={180}
                          className="object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105 relative z-10"
                        />
                      </div>
                    </div>

                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 bg-[#7BAE7F]/30 blur-[100px] rounded-full transform scale-150 animate-pulse" />
                    <div className="absolute inset-0 bg-[#FFCBA4]/20 blur-[80px] rounded-full transform scale-150 animate-pulse delay-1000" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7BAE7F]/20 to-[#FFCBA4]/20 blur-[60px] rounded-full transform scale-150" />
                  </div>
                </motion.div>

                {/* Enhanced Wellness Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative w-[300px] h-[300px]"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {/* Wellness Icons with Enhanced Hover Effects */}
                    <motion.div
                      className="absolute top-0 left-1/2 -translate-x-1/2 group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="p-4 rounded-full bg-[#7BAE7F]/10 backdrop-blur-sm shadow-lg hover:bg-[#7BAE7F]/20 transition-colors duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#7BAE7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <div className="p-4 rounded-full bg-[#FFCBA4]/10 backdrop-blur-sm shadow-lg hover:bg-[#FFCBA4]/20 transition-colors duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FFCBA4" strokeWidth="2"/>
                          <path d="M9 12l2 2 4-4" stroke="#FFCBA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <div className="p-4 rounded-full bg-[#7BAE7F]/10 backdrop-blur-sm shadow-lg hover:bg-[#7BAE7F]/20 transition-colors duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#7BAE7F"/>
                          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#7BAE7F"/>
                        </svg>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <div className="p-4 rounded-full bg-[#FFCBA4]/10 backdrop-blur-sm shadow-lg hover:bg-[#FFCBA4]/20 transition-colors duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FFCBA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  className="absolute top-20 right-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="w-10 h-10 bg-[#FFCBA4]/30 rounded-full backdrop-blur-sm shadow-lg hover:bg-[#FFCBA4]/40 transition-colors duration-300" />
                </motion.div>
                <motion.div
                  className="absolute bottom-20 left-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="w-8 h-8 bg-[#7BAE7F]/20 rounded-full backdrop-blur-sm shadow-lg hover:bg-[#7BAE7F]/30 transition-colors duration-300" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="container py-20 bg-white/50 backdrop-blur-sm relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7BAE7F]/5 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <motion.div 
              className="group text-center p-8 rounded-xl bg-white/80 border border-[#7BAE7F]/10 hover:border-[#7BAE7F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7BAE7F]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#7BAE7F] mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-[#4f5d75] group-hover:text-[#7BAE7F] transition-colors duration-300">Active Users</div>
            </motion.div>
            <motion.div 
              className="group text-center p-8 rounded-xl bg-white/80 border border-[#7BAE7F]/10 hover:border-[#7BAE7F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7BAE7F]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#7BAE7F] mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-[#4f5d75] group-hover:text-[#7BAE7F] transition-colors duration-300">Success Rate</div>
            </motion.div>
            <motion.div 
              className="group text-center p-8 rounded-xl bg-white/80 border border-[#7BAE7F]/10 hover:border-[#7BAE7F]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7BAE7F]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#7BAE7F] mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-[#4f5d75] group-hover:text-[#7BAE7F] transition-colors duration-300">AI Support</div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white/80 backdrop-blur-sm border-t border-[#7BAE7F]/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZenLogo001.jpg-c53JfkylJXMDVV8XUs9T0M9iT3U53D.jpeg"
                  alt="Zenplate.ai Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-[#333333]">zenplate.ai</span>
              </Link>
              <p className="text-[#4f5d75] text-sm">
                Transform your wellness journey with AI-powered personalized nutrition recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#333333] mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Pricing</Link></li>
                <li><Link href="/ai-chat" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">AI Chat</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#333333] mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#333333] mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#7BAE7F]/20 text-center">
            <p className="text-sm text-[#4f5d75]">
              &copy; {new Date().getFullYear()} Zenplate.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot Button */}
      <motion.div 
        className="fixed bottom-6 right-6 group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-[#333333] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Ask our AI Nutrition Assistant
        </div>
        <button
          className="w-14 h-14 bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
          onClick={() => router.push("/ai-chat")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </motion.div>
    </div>
  )
}

