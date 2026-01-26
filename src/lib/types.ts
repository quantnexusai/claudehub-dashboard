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
      charts: {
        Row: {
          id: string
          created_at: string
          data_number: number
          label: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          data_number: number
          label: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          data_number?: number
          label?: string
          user_id?: string
        }
      }
      groups: {
        Row: {
          id: string
          created_at: string
          first_name: string
          product: string
          sale: number
          status: string
          user_name: string
          vat_no: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          product: string
          sale: number
          status: string
          user_name: string
          vat_no: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          product?: string
          sale?: number
          status?: string
          user_name?: string
          vat_no?: string
          user_id?: string
        }
      }
      projects: {
        Row: {
          id: string
          created_at: string
          amount: number
          deadline: string
          first_name: string
          image_url: string | null
          product: string
          progress: number
          status: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          amount: number
          deadline: string
          first_name: string
          image_url?: string | null
          product: string
          progress: number
          status: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          amount?: number
          deadline?: string
          first_name?: string
          image_url?: string | null
          product?: string
          progress?: number
          status?: string
          user_id?: string
        }
      }
      invoices: {
        Row: {
          id: string
          created_at: string
          customer: string
          invoice_number: string
          product_price: string
          price: number
          shipping: string
          status: number
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          customer: string
          invoice_number: string
          product_price: string
          price: number
          shipping: string
          status: number
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          customer?: string
          invoice_number?: string
          product_price?: string
          price?: number
          shipping?: string
          status?: number
          user_id?: string
        }
      }
      sales_stats: {
        Row: {
          id: string
          created_at: string
          invoices: number
          offline: number
          online: number
          projects: number
          queries: number
          returns: number
          revenue: number
          users: number
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          invoices: number
          offline: number
          online: number
          projects: number
          queries: number
          returns: number
          revenue: number
          users: number
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          invoices?: number
          offline?: number
          online?: number
          projects?: number
          queries?: number
          returns?: number
          revenue?: number
          users?: number
          user_id?: string
        }
      }
      tickets: {
        Row: {
          id: string
          created_at: string
          date: string
          destination: string
          initials: string
          name: string
          place: string
          status: string
          time: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          date: string
          destination: string
          initials: string
          name: string
          place: string
          status: string
          time: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          date?: string
          destination?: string
          initials?: string
          name?: string
          place?: string
          status?: string
          time?: string
          user_id?: string
        }
      }
      transactions: {
        Row: {
          id: string
          created_at: string
          amount: number
          description: string
          type: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          amount: number
          description: string
          type: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          amount?: number
          description?: string
          type?: string
          user_id?: string
        }
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          email: string
          first_name: string | null
          last_name: string | null
          avatar_url: string | null
          phone: string | null
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          phone?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          phone?: string | null
        }
      }
      chat_messages: {
        Row: {
          id: string
          created_at: string
          user_id: string
          role: string
          content: string
          conversation_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          role: string
          content: string
          conversation_id: string
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          role?: string
          content?: string
          conversation_id?: string
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

export type Profile = Database['public']['Tables']['profiles']['Row']
export type SalesStats = Database['public']['Tables']['sales_stats']['Row']
export type Invoice = Database['public']['Tables']['invoices']['Row']
export type Project = Database['public']['Tables']['projects']['Row']
export type Group = Database['public']['Tables']['groups']['Row']
export type Ticket = Database['public']['Tables']['tickets']['Row']
export type Transaction = Database['public']['Tables']['transactions']['Row']
export type ChartData = Database['public']['Tables']['charts']['Row']
export type ChatMessage = Database['public']['Tables']['chat_messages']['Row']
