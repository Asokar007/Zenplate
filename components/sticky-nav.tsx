"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function StickyNav() {
  const { scrollYProgress } = useScroll()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "AI Chat", href: "/ai-chat" },
    { name: "Daily Challenge", href: "/daily-challenge" },
    { name: "Login/Register", href: "/contact" },
  ]

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#7BAE7F] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Sticky Navigation */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/Zenpatch2.png"
                alt="Zenplate.ai Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-[#333333]">zenplate.ai</span>
            </Link>

            <div className="flex items-center gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    pathname === item.href
                      ? "text-[#7BAE7F]"
                      : "text-[#4f5d75] hover:text-[#7BAE7F]"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7BAE7F]"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16" />
    </>
  )
} 