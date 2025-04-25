'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { toast } from 'sonner';

export default function AIChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to Your Wellness Journey!\n\nI\'m here to guide you on your path to better health and wellness. Whether you\'re interested in Ayurvedic principles, mindful eating, or healthy recipes, I\'m here to help.'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    try {
      setIsLoading(true);
      
      // Add user message
      const userMessage = { role: 'user', content: message };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');

      // Call the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, data.message]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = async (topic: string) => {
    const quickMessage = `Tell me about ${topic.toLowerCase()}`;
    setMessage(quickMessage);
    await handleSend();
  };

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col">
      {/* Breadcrumbs */}
      <div className="container py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>AI Chat</BreadcrumbPage>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#333333] mb-4">AI Nutrition Assistant</h1>
            <p className="text-[#4f5d75] max-w-2xl mx-auto text-lg">
              Ask me anything about nutrition and meal planning
            </p>
          </div>

          {/* Chat Container */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">
            {/* Messages */}
            <div className="space-y-6 mb-6 max-h-[60vh] overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-[#FFCBA4] text-[#333333]'
                        : 'bg-[#7BAE7F] text-white'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 rounded-2xl bg-[#7BAE7F] text-white">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                className="bg-[#7BAE7F] hover:bg-[#7BAE7F]/90"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              className="bg-white hover:bg-[#E8F5E9]"
              onClick={() => handleQuickAction('Ayurvedic Foods')}
              disabled={isLoading}
            >
              Ayurvedic Foods
            </Button>
            <Button 
              variant="outline" 
              className="bg-white hover:bg-[#E8F5E9]"
              onClick={() => handleQuickAction('Recipes')}
              disabled={isLoading}
            >
              Recipes
            </Button>
            <Button 
              variant="outline" 
              className="bg-white hover:bg-[#E8F5E9]"
              onClick={() => handleQuickAction('Mindfulness')}
              disabled={isLoading}
            >
              Mindfulness
            </Button>
            <Button 
              variant="outline" 
              className="bg-white hover:bg-[#E8F5E9]"
              onClick={() => handleQuickAction('Seasonal Eating')}
              disabled={isLoading}
            >
              Seasonal Eating
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
} 