"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <header className="w-full py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZenLogo001.jpg-c53JfkylJXMDVV8XUs9T0M9iT3U53D.jpeg"
              alt="Zenplate.ai Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-[#2d3142]">zenplate.ai</span>
          </div>
          <nav className="flex items-center gap-12">
            <Link href="#" className="text-[#2d3142] text-base font-medium hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link
              href="#features"
              className="text-[#2d3142] text-base font-medium hover:text-teal-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-[#2d3142] text-base font-medium hover:text-teal-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-[#2d3142] text-base font-medium hover:text-teal-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2d3142]">
                AI-Powered
                <br />
                Personalized
                <br />
                Meal Planner
              </h1>
              <p className="text-lg text-[#4f5d75] max-w-md">
                Achieve holistic wellness with customized nutrition recommendations tailored just for you.
              </p>

              {/* Features Icons */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 10C24.4183 10 28 13.5817 28 18C28 22.4183 24.4183 26 20 26C15.5817 26 12 22.4183 12 18C12 13.5817 15.5817 10 20 10Z"
                        stroke="#2d3142"
                        strokeWidth="2"
                      />
                      <path
                        d="M20 22C22.2091 22 24 20.2091 24 18C24 15.7909 22.2091 14 20 14C17.7909 14 16 15.7909 16 18C16 20.2091 17.7909 22 20 22Z"
                        stroke="#2d3142"
                        strokeWidth="2"
                      />
                      <path
                        d="M10 32C10 28.6863 14.4772 26 20 26C25.5228 26 30 28.6863 30 32"
                        stroke="#2d3142"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M28 10.5C28 10.5 30 12 32 12C34 12 36 10 36 10"
                        stroke="#2d3142"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M28 6C28 6 30 4 32 4C34 4 36 6 36 6"
                        stroke="#2d3142"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2d3142]">Personalized Recommendations</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 32C20 32 32 26 32 18V10L20 6L8 10V18C8 26 20 32 20 32Z"
                        stroke="#2d3142"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z"
                        fill="#9ED8D0"
                      />
                      <path
                        d="M20 16V24"
                        stroke="#2d3142"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 20H24"
                        stroke="#2d3142"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2d3142]">Holistic Approach</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 34C27.732 34 34 27.732 34 20C34 12.268 27.732 6 20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34Z"
                        stroke="#2d3142"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 20L18 23L25 16"
                        stroke="#2d3142"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2d3142]">Health Insights</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-[400px] h-[400px]">
                {/* Monitor */}
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0"
                >
                  {/* Monitor Frame */}
                  <rect x="100" y="80" width="240" height="180" rx="10" stroke="#2d3142" strokeWidth="4" fill="white" />

                  {/* Monitor Stand */}
                  <rect x="160" y="260" width="120" height="10" rx="2" fill="#2d3142" />
                  <rect x="200" y="270" width="40" height="30" rx="2" fill="#2d3142" />
                  <line x1="220" y1="300" x2="220" y2="320" stroke="#2d3142" strokeWidth="4" />
                  <line x1="180" y1="320" x2="260" y2="320" stroke="#2d3142" strokeWidth="4" />

                  {/* Lines */}
                  <line x1="220" y1="340" x2="320" y2="340" stroke="#2d3142" strokeWidth="4" />
                  <line x1="220" y1="360" x2="320" y2="360" stroke="#2d3142" strokeWidth="4" />
                </svg>

                {/* Zenplate Badge Image */}
                <div className="absolute" style={{ top: "110px", left: "160px" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/101.jpg-zQtGv5HLQZ8nS5Ayjx87Sxmg8i3Jj4.jpeg"
                    alt="Zenplate.ai Badge"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Centered Get Started Button */}
          <div className="flex justify-center mt-16">
            <Button
              size="lg"
              className="bg-[#14b8a6] hover:bg-teal-700 text-white text-lg px-12 py-6 rounded-lg h-auto"
            >
              Get Started
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

