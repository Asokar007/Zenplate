export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string | null
          avatar_url: string | null
          updated_at: string | null
          role: 'user' | 'admin' | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          updated_at?: string | null
          role?: 'user' | 'admin' | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          updated_at?: string | null
          role?: 'user' | 'admin' | null
        }
      }
      chat_sessions: {
        Row: {
          id: string
          created_at: string
          user_id: string
          title: string
          last_message_at: string | null
          is_archived: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          title: string
          last_message_at?: string | null
          is_archived?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          title?: string
          last_message_at?: string | null
          is_archived?: boolean
        }
      }
      chat_messages: {
        Row: {
          id: string
          created_at: string
          session_id: string
          role: 'user' | 'assistant'
          content: string
          tokens_used: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          session_id: string
          role: 'user' | 'assistant'
          content: string
          tokens_used?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          session_id?: string
          role?: 'user' | 'assistant'
          content?: string
          tokens_used?: number | null
        }
      }
      contact_messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          message: string
          status: 'new' | 'read' | 'replied'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          message: string
          status?: 'new' | 'read' | 'replied'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          message?: string
          status?: 'new' | 'read' | 'replied'
        }
      }
      subscriptions: {
        Row: {
          id: string
          created_at: string
          user_id: string
          plan_id: string
          status: 'active' | 'canceled' | 'expired'
          current_period_start: string
          current_period_end: string
          cancel_at_period_end: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          plan_id: string
          status?: 'active' | 'canceled' | 'expired'
          current_period_start: string
          current_period_end: string
          cancel_at_period_end?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          plan_id?: string
          status?: 'active' | 'canceled' | 'expired'
          current_period_start?: string
          current_period_end?: string
          cancel_at_period_end?: boolean
        }
      }
      subscription_plans: {
        Row: {
          id: string
          name: string
          price: number
          interval: 'month' | 'year'
          features: Json
          is_active: boolean
        }
        Insert: {
          id?: string
          name: string
          price: number
          interval: 'month' | 'year'
          features: Json
          is_active?: boolean
        }
        Update: {
          id?: string
          name?: string
          price?: number
          interval?: 'month' | 'year'
          features?: Json
          is_active?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 