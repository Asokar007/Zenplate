"use client"

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from '@/lib/supabase'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'login' | 'register'>('contact')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Here you would typically send the contact form data to your backend
      toast.success('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error('Contact form error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        if (error.message === 'Invalid login credentials') {
          toast.error('Invalid email or password. Please try again.')
        } else {
          toast.error(error.message)
        }
        throw error
      }
      toast.success('Logged in successfully!')
      router.push('/')
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) {
        if (error.message.includes('already registered')) {
          toast.error('This email is already registered. Please sign in instead.')
        } else {
          toast.error(error.message)
        }
        throw error
      }
      toast.success('Check your email for the confirmation link!')
      router.push('/login')
    } catch (error) {
      console.error('Registration error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col">
      {/* Breadcrumbs */}
      <div className="container py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Login/Register</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Animated gradient background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7BAE7F]/5 via-[#FFCBA4]/5 to-[#7BAE7F]/5 animate-gradient-x blur-3xl" />
                <div className="relative h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/images/ZenplateLogo02.png"
                    alt="Zenplate.ai Logo"
                    fill
                    className="object-contain transform hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#333333] mb-2">Welcome Back</h1>
                <p className="text-[#4f5d75]">Sign in to your account to continue</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-[#7BAE7F] focus:ring-[#7BAE7F] border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-[#4f5d75]">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-[#7BAE7F] hover:text-[#4C6B57]">
                    Forgot password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-[#4f5d75]">
                  Don't have an account?{' '}
                  <Link href="/register" className="text-[#7BAE7F] hover:text-[#4C6B57]">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-[#7BAE7F]/40">
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