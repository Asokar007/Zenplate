import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Validate API key exists
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400', // 24 hours
};

// Handle OPTIONS request
export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    // Log the request headers and content type
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));
    
    // Validate request body
    if (!req.body) {
      return NextResponse.json(
        { error: 'Request body is empty' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Clone the request to read the body multiple times if needed
    const clonedReq = req.clone();
    const bodyText = await clonedReq.text();
    console.log('Raw request body:', bodyText);

    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400, headers: corsHeaders }
      );
    }

    const { messages } = body;

    // Validate messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate each message has required fields
    for (const message of messages) {
      if (!message.role || !message.content) {
        return NextResponse.json(
          { error: 'Each message must have role and content' },
          { status: 400, headers: corsHeaders }
        );
      }
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    if (!completion.choices[0]?.message?.content) {
      throw new Error('No response from OpenAI');
    }

    const response = { 
      message: completion.choices[0].message.content 
    };

    console.log('Sending response:', response);
    return NextResponse.json(response, { headers: corsHeaders });
  } catch (error: any) {
    console.error('Error:', error);
    
    // Handle specific OpenAI errors
    if (error.response?.status === 401) {
      return NextResponse.json(
        { error: 'Invalid API key. Please check your OpenAI API key configuration.' },
        { status: 401, headers: corsHeaders }
      );
    }
    
    if (error.response?.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: corsHeaders }
      );
    }

    if (error.response?.status === 400) {
      return NextResponse.json(
        { error: 'Invalid request. Please check your input.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Default error response
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500, headers: corsHeaders }
    );
  }
} 