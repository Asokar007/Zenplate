"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [loginTermsAccepted, setLoginTermsAccepted] = useState(false)
  const [registerTermsAccepted, setRegisterTermsAccepted] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const isLoginForm = event.currentTarget.id === 'login-form'
    const termsAccepted = isLoginForm ? loginTermsAccepted : registerTermsAccepted

    if (!termsAccepted) {
      alert('Please accept the terms of use and Privacy policy')
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col">
      {/* Header */}
      <header className="w-full py-6 border-b border-[#7BAE7F]/40">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-[#7BAE7F]/20 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7BAE7F]/20 to-[#FFCBA4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 rounded-full bg-[#7BAE7F]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-2 rounded-full bg-[#FFCBA4]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZenLogo001.jpg-c53JfkylJXMDVV8XUs9T0M9iT3U53D.jpeg"
                    alt="Zenplate.ai Logo"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    sizes="40px"
                  />
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#7BAE7F]/80 backdrop-blur-sm" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFCBA4]/80 backdrop-blur-sm" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#FFCBA4]/80 backdrop-blur-sm" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-[#7BAE7F]/80 backdrop-blur-sm" />
            </div>
            <span className="text-xl font-bold text-[#333333] group-hover:text-[#7BAE7F] transition-colors duration-300">zenplate.ai</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Features
            </Link>
            <Link href="/ai-chat" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              AI Chat
            </Link>
            <Link href="/login" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Login</BreadcrumbPage>
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
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7BAE7F]/20 to-[#FFCBA4]/20 blur-3xl" />
                <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-xl border border-[#7BAE7F]/20 shadow-2xl" />
                <div className="relative h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/images/wellness-illustration.jpg"
                    alt="Wellness Journey Illustration"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#7BAE7F]/80 backdrop-blur-sm" />
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#FFCBA4]/80 backdrop-blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-[#FFCBA4]/80 backdrop-blur-sm" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-[#7BAE7F]/80 backdrop-blur-sm" />
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#333333] mb-2">Welcome to Zenplate.ai</h1>
                <p className="text-[#4f5d75]">Your journey to holistic wellness begins here</p>
              </div>

              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-white p-1 rounded-xl">
                  <TabsTrigger 
                    value="login" 
                    className="data-[state=active]:bg-[#E8F5E9] data-[state=active]:text-[#7BAE7F] data-[state=active]:shadow-sm rounded-lg"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register"
                    className="data-[state=active]:bg-[#E8F5E9] data-[state=active]:text-[#7BAE7F] data-[state=active]:shadow-sm rounded-lg"
                  >
                    Register
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <Card className="border-[#7BAE7F]/40 shadow-lg">
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-2xl font-bold text-[#333333]">Welcome back</CardTitle>
                      <CardDescription className="text-[#4f5d75]">Enter your credentials to access your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form id="login-form" onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#333333]">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="hello@zenplate.ai" 
                            required 
                            className="border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F]"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="text-[#333333]">Password</Label>
                            <Link href="/auth/reset-password" className="text-sm text-[#7BAE7F] hover:text-[#4C6B57] font-medium">
                              Forgot password?
                            </Link>
                          </div>
                          <Input 
                            id="password" 
                            type="password" 
                            required 
                            className="border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F]"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333] h-11"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <Icons.spinner className="h-4 w-4 animate-spin" />
                              Signing in...
                            </div>
                          ) : (
                            "Sign in"
                          )}
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="login-terms" 
                            checked={loginTermsAccepted}
                            onCheckedChange={(checked) => setLoginTermsAccepted(checked as boolean)}
                            className="border-gray-300 data-[state=checked]:bg-[#7BAE7F] data-[state=checked]:border-[#7BAE7F]"
                          />
                          <label
                            htmlFor="login-terms"
                            className="text-sm text-[#4f5d75] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Accept terms of use and Privacy policy
                          </label>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                      <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-white px-2 text-[#4f5d75]">Or continue with</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full h-11 border-gray-200 hover:bg-gray-50">
                        <Icons.google className="mr-2 h-4 w-4" />
                        Continue with Google
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="register">
                  <Card className="border-[#7BAE7F]/40 shadow-lg">
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-2xl font-bold text-[#333333]">Create an account</CardTitle>
                      <CardDescription className="text-[#4f5d75]">Enter your information to create your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form id="register-form" onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#333333]">Name</Label>
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            required 
                            className="border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-email" className="text-[#333333]">Email</Label>
                          <Input 
                            id="register-email" 
                            type="email" 
                            placeholder="hello@zenplate.ai" 
                            required 
                            className="border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-password" className="text-[#333333]">Password</Label>
                          <Input 
                            id="register-password" 
                            type="password" 
                            required 
                            className="border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F]"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333] h-11"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <Icons.spinner className="h-4 w-4 animate-spin" />
                              Creating account...
                            </div>
                          ) : (
                            "Create account"
                          )}
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="register-terms" 
                            checked={registerTermsAccepted}
                            onCheckedChange={(checked) => setRegisterTermsAccepted(checked as boolean)}
                            className="border-gray-300 data-[state=checked]:bg-[#7BAE7F] data-[state=checked]:border-[#7BAE7F]"
                          />
                          <label
                            htmlFor="register-terms"
                            className="text-sm text-[#4f5d75] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Accept terms of use and Privacy policy
                          </label>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                      <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-white px-2 text-[#4f5d75]">Or continue with</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full h-11 border-gray-200 hover:bg-gray-50">
                        <Icons.google className="mr-2 h-4 w-4" />
                        Continue with Google
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
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

