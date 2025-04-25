'use client'

import { useState, useEffect } from 'react'
import { createChatSession, getChatSessions } from '@/lib/chat'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { PostgrestError } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase'
import { AuthForm } from '@/components/auth/AuthForm'
import { User } from '@supabase/supabase-js'

export default function TestSupabasePage() {
  const [sessions, setSessions] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClient()

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function handleCreateTestSession() {
    if (!user) {
      toast.error('Please sign in to create a session')
      return
    }

    setIsLoading(true)
    try {
      const newSession = await createChatSession('Test Session ' + new Date().toISOString(), user.id)
      if (newSession) {
        toast.success('Test session created successfully!')
        await loadSessions()
      }
    } catch (error: unknown) {
      toast.error('Failed to create test session')
      if (error instanceof PostgrestError) {
        console.error('Database error:', error.message, error.details, error.hint)
      } else if (error instanceof Error) {
        console.error('Error creating test session:', error.message)
      } else {
        console.error('Unknown error creating test session:', JSON.stringify(error, null, 2))
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function loadSessions() {
    if (!user) {
      toast.error('Please sign in to load sessions')
      return
    }

    setIsLoading(true)
    try {
      const data = await getChatSessions()
      if (data) {
        setSessions(data)
        toast.success('Sessions loaded successfully!')
      }
    } catch (error) {
      toast.error('Failed to load sessions')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Supabase Connection Test</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Authentication</h2>
        <AuthForm />
      </div>

      {user && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Chat Sessions</h2>
          <Button 
            onClick={handleCreateTestSession}
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create Test Session'}
          </Button>

          <Button 
            onClick={loadSessions}
            disabled={isLoading}
            variant="outline"
          >
            {isLoading ? 'Loading...' : 'Load All Sessions'}
          </Button>

          {sessions.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Existing Sessions:</h3>
              <div className="space-y-2">
                {sessions.map((session) => (
                  <div 
                    key={session.id} 
                    className="p-4 border rounded-lg"
                  >
                    <p><strong>ID:</strong> {session.id}</p>
                    <p><strong>Title:</strong> {session.title}</p>
                    <p><strong>Created:</strong> {new Date(session.created_at).toLocaleString()}</p>
                    <p><strong>Archived:</strong> {session.is_archived ? 'Yes' : 'No'}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 