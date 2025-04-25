"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#E8F5E9]">
          <div className="text-center p-8 bg-white/80 rounded-xl shadow-lg max-w-md mx-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-2">Something went wrong</h2>
            <p className="text-[#4f5d75] mb-6">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-[#7BAE7F] hover:bg-[#7BAE7F]/90 text-white"
            >
              Try again
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 