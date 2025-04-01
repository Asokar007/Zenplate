'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // TODO: Implement actual AI chat logic here
      // For now, just simulate a response
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const aiMessage: Message = {
        role: 'assistant',
        content: 'This is a simulated AI response. Implement your actual AI integration here.',
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col">
      {/* Header */}
      <header className="w-full py-6 border-b border-[#7BAE7F]/40">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZenLogo001.jpg-c53JfkylJXMDVV8XUs9T0M9iT3U53D.jpeg"
              alt="Zenplate.ai Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-[#333333]">zenplate.ai</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Home
            </Link>
            <Link href="/login" className="text-[#333333] text-base font-medium hover:text-[#7BAE7F] transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-1 container py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
          {/* Chat Header */}
          <div className="p-6 border-b border-[#7BAE7F]/40 bg-[#E8F5E9]/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center ring-2 ring-[#7BAE7F]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7BAE7F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#333333]">AI Nutrition Assistant</h2>
                <p className="text-sm text-[#4f5d75]">Ask me anything about nutrition and meal planning</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
            <div className="space-y-6">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8F5E9] flex items-center justify-center ring-2 ring-[#7BAE7F]/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#7BAE7F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">Welcome to Your Wellness Journey!</h3>
                  <p className="text-[#4f5d75] max-w-md mx-auto">
                    I'm here to guide you on your path to better health and wellness. Whether you're interested in Ayurvedic principles, mindful eating, or healthy recipes, I'm here to help.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <button
                      onClick={() => setInput("What are some Ayurvedic food suggestions for my dosha type?")}
                      className="p-3 text-sm bg-[#E8F5E9] hover:bg-[#E8F5E9]/80 text-[#333333] rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                      </svg>
                      Ayurvedic Foods
                    </button>
                    <button
                      onClick={() => setInput("Can you suggest some healthy and nutritious recipes?")}
                      className="p-3 text-sm bg-[#E8F5E9] hover:bg-[#E8F5E9]/80 text-[#333333] rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                      </svg>
                      Recipes
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <button
                      onClick={() => setInput("What are some mindfulness practices for better eating habits?")}
                      className="p-3 text-sm bg-[#E8F5E9] hover:bg-[#E8F5E9]/80 text-[#333333] rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      Mindfulness
                    </button>
                    <button
                      onClick={() => setInput("What are some seasonal eating recommendations?")}
                      className="p-3 text-sm bg-[#E8F5E9] hover:bg-[#E8F5E9]/80 text-[#333333] rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                      Seasonal Eating
                    </button>
                  </div>
                </div>
              )}
              
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-[#FFCBA4] text-[#333333] shadow-sm"
                        : "bg-[#E8F5E9] text-[#333333] shadow-sm"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <div className={`mt-2 text-xs flex items-center gap-1 ${
                      message.role === "user" ? "text-[#333333]/70" : "text-[#4f5d75]"
                    }`}>
                      {message.role === "user" ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          You
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                          </svg>
                          AI Assistant
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#E8F5E9] rounded-lg p-4 shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-[#7BAE7F] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#7BAE7F] rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-[#7BAE7F] rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-6 border-t border-[#7BAE7F]/40 bg-[#E8F5E9]/50">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about nutrition..."
                className="flex-1 border-gray-200 focus:border-[#7BAE7F] focus:ring-[#7BAE7F]"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[#FFCBA4] hover:bg-[#FFCBA4]/90 text-[#333333] min-w-[100px]"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send"
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 