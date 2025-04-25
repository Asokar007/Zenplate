'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function AuthCallbackPage() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          toast.error('Authentication failed. Please try again.');
          router.push('/login');
          return;
        }

        if (session) {
          toast.success('Successfully authenticated!');
          router.push('/');
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        toast.error('An error occurred during authentication.');
        router.push('/login');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#333333] mb-4">Authenticating...</h1>
        <p className="text-[#4f5d75]">Please wait while we verify your account.</p>
      </div>
    </div>
  );
} 