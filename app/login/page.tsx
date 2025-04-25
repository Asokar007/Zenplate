"use client"

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from '@/lib/supabase'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

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
      toast.success('Signed in successfully!')
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
    } catch (error) {
      console.error('Sign up error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col">
      {/* Header */}
      <header className="py-4 border-b border-[#7BAE7F]/40">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/ZenplateLogo02.png"
              alt="Zenplate.ai Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-[#333333]">zenplate.ai</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Home</Link>
            <Link href="/features" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">Features</Link>
            <Link href="/ai-chat" className="text-[#4f5d75] hover:text-[#7BAE7F] transition-colors">AI Chat</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Welcome to Zenplate.ai</h1>
            <p className="text-[#4f5d75]">Your journey to holistic wellness begins here</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant={activeTab === 'login' ? 'default' : 'outline'}
              className={`w-32 ${activeTab === 'login' ? 'bg-[#7BAE7F] hover:bg-[#7BAE7F]/90' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </Button>
            <Button
              variant={activeTab === 'register' ? 'default' : 'outline'}
              className={`w-32 ${activeTab === 'register' ? 'bg-[#7BAE7F] hover:bg-[#7BAE7F]/90' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </Button>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {activeTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#333333] mb-1">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/forgot-password" className="text-sm text-[#7BAE7F] hover:text-[#4C6B57]">
                    Forgot password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#7BAE7F] hover:bg-[#7BAE7F]/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#333333] mb-1">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#7BAE7F] hover:bg-[#7BAE7F]/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing up...' : 'Sign up'}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-[#4f5d75]">
                {activeTab === 'login' ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setActiveTab('register')}
                      className="text-[#7BAE7F] hover:text-[#4C6B57] font-medium"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setActiveTab('login')}
                      className="text-[#7BAE7F] hover:text-[#4C6B57] font-medium"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#7BAE7F]/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-[#4f5d75]">Or continue with</span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full border-[#7BAE7F] text-[#7BAE7F] hover:bg-[#7BAE7F]/10"
                  onClick={() => router.push('/login')}
                >
                  Continue with Google
                </Button>
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

