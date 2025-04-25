import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful nutrition and wellness assistant. Provide accurate, evidence-based information about nutrition, Ayurveda, mindful eating, and healthy recipes. Keep responses concise and practical."
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({ 
      message: completion.choices[0].message 
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
} 