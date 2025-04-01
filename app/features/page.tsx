'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Nutrition Assistant",
      description: "Get personalized nutrition advice and meal recommendations based on your preferences and goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
          <path d="M8 12h.01" />
          <path d="M16 12h.01" />
        </svg>
      ),
      link: "/ai-chat"
    },
    {
      title: "Ayurvedic Food Guide",
      description: "Discover food recommendations based on Ayurvedic principles and your dosha type.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <path d="M12 8v8" />
          <path d="M5 3a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" />
          <path d="M17 3a2 2 0 0 1 2 2v2c0 1.1-.9 2-2 2h-2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2z" />
          <path d="M12 22a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a2 2 0 0 1-2 2z" />
        </svg>
      ),
      link: "/ai-chat"
    },
    {
      title: "Mindful Eating",
      description: "Learn mindfulness practices to develop a healthier relationship with food.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
          <path d="M12 16h.01" />
          <path d="M8 12h.01" />
          <path d="M16 12h.01" />
        </svg>
      ),
      link: "/ai-chat"
    },
    {
      title: "Seasonal Eating",
      description: "Get recommendations for seasonal foods and recipes based on the current season.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      ),
      link: "/ai-chat"
    }
  ];

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col">
      {/* Header */}
      <header className="w-full py-6 border-b border-[#7BAE7F]/40">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/Zenpatch2.png"
              alt="Zenplate.ai Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-[#333333]">zenplate.ai</span>
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
              <BreadcrumbPage>Features</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237BAE7F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#333333] mb-4">Features</h1>
            <p className="text-[#4f5d75] max-w-2xl mx-auto text-lg">
              Discover how Zenplate.ai can help you achieve your wellness goals through personalized nutrition advice and holistic health practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#E8F5E9]/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#7BAE7F]/10 hover:border-[#7BAE7F]/30 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#7BAE7F] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#333333] mb-3 group-hover:text-[#7BAE7F] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#4f5d75] mb-6 text-lg leading-relaxed">{feature.description}</p>
                <Link href={feature.link}>
                  <Button className="bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333] w-full py-6 text-lg group-hover:shadow-lg transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-gradient-to-br from-white to-[#E8F5E9]/50 rounded-2xl p-12 shadow-lg border border-[#7BAE7F]/10 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7BAE7F]/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFCBA4]/10 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative">
              <h2 className="text-3xl font-semibold text-[#333333] mb-4">Ready to Start Your Wellness Journey?</h2>
              <p className="text-[#4f5d75] mb-8 max-w-2xl mx-auto text-lg">
                Join Zenplate.ai today and get personalized guidance for your nutrition and wellness goals.
              </p>
              <Link href="/login">
                <Button className="bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333] px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Get Started
                </Button>
              </Link>
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
        </div>
      </footer>
    </div>
  );
} 