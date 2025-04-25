'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        if (error.message.includes('already registered')) {
          toast.error('This email is already registered. Please sign in instead.');
        } else {
          toast.error(error.message);
        }
        throw error;
      }

      toast.success('Check your email for the confirmation link!');
      router.push('/login');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Create Account</h1>
            <p className="text-[#4f5d75]">Sign up to get started</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#333333]">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-[#333333]">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#7BAE7F] hover:bg-[#7BAE7F]/90"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>

            <div className="text-center text-sm text-[#4f5d75]">
              Already have an account?{' '}
              <Link href="/login" className="text-[#7BAE7F] hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 