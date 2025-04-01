"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#E8F5E9]">
      {/* Header */}
      <header className="w-full py-6">
        <div className="container flex items-center justify-between">
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
          <nav className="flex items-center gap-12">
            <Link href="/" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Home
            </Link>
            <Link href="/pricing" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
      <main className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#333333] mb-4">Simple, Transparent Pricing</h1>
            <p className="text-[#4f5d75] max-w-2xl mx-auto">Choose the plan that best fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                features: ["Basic meal planning", "Nutritional insights", "AI chat assistant", "Community support"],
                cta: "Get Started"
              },
              {
                name: "Pro",
                price: "$9.99",
                features: ["Advanced meal planning", "Detailed nutritional analysis", "Priority AI chat", "Custom meal plans", "Premium support"],
                cta: "Start Free Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Everything in Pro", "Team collaboration", "API access", "Custom integrations", "Dedicated support"],
                cta: "Contact Sales"
              }
            ].map((plan, index) => (
              <div key={index} className={`p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${plan.popular ? 'border-2 border-[#7BAE7F]' : ''}`}>
                {plan.popular && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F5E9] rounded-full mb-4">
                    <span className="text-sm font-medium text-[#7BAE7F]">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#333333] mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#333333]">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-[#4f5d75]">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-[#4f5d75]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="#7BAE7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? 'bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333]' : 'bg-white border-2 border-[#7BAE7F] text-[#7BAE7F] hover:bg-[#E8F5E9]'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-[#7BAE7F]/40">
        <div className="container flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-[#4f5d75]">
            &copy; {new Date().getFullYear()} Zenplate.ai. All rights reserved.
          </p>
          <p className="text-xs text-[#4f5d75]">
            By creating an account, you agree to our{" "}
            <Link href="#" className="text-[#7BAE7F] hover:text-[#4C6B57] font-medium">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#7BAE7F] hover:text-[#4C6B57] font-medium">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  )
} 