'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()

  async function handleSignUp(e: React.FormEvent) {
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

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        if (error.message === 'Invalid login credentials') {
          toast.error('Invalid email or password. Please try again or sign up if you haven\'t already.')
        } else {
          toast.error(error.message)
        }
        throw error
      }
      toast.success('Signed in successfully!')
    } catch (error) {
      console.error('Sign in error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSignOut() {
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      toast.success('Signed out successfully!')
    } catch (error) {
      toast.error('Error signing out')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <form className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-2">
          <Button 
            type="submit" 
            onClick={handleSignIn}
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
          <Button 
            type="button" 
            onClick={handleSignUp}
            disabled={isLoading}
            variant="outline"
            className="flex-1"
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </div>
      </form>
      <Button 
        onClick={handleSignOut}
        disabled={isLoading}
        variant="destructive"
        className="w-full"
      >
        {isLoading ? 'Signing out...' : 'Sign Out'}
      </Button>
    </div>
  )
} 