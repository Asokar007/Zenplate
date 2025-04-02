"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#E8F5E9]">
      {/* Contact Section */}
      <main className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#333333] mb-4">Get in Touch</h1>
            <p className="text-[#4f5d75] max-w-2xl mx-auto">Have questions? We'd love to hear from you.</p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F]" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F]" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F] h-32" placeholder="Your message"></textarea>
              </div>
              <Button className="w-full bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333]">
                Send Message
              </Button>
            </form>
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