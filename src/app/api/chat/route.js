import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages, userName } = await req.json();

    const systemPrompt = `You are WebNex AI, the official intelligent assistant for WebNex - a premium Digital Innovation Agency.
Your goal is to assist clients, answer their queries about web development, SaaS, AI chatbots, DevOps, and UI/UX design.

WebNex Knowledge Base:
- Services: Brand Identity & UI/UX Design, React/Next.js Web Development, Custom SaaS Platforms, AI Automation & Chatbots (like you!), Mobile App Development (React Native), Cloud & DevOps (AWS, Docker, Kubernetes).
- Pricing: Basic Portfolio (₹9,999), Business Website (₹34,999), AI/SaaS Platform (₹74,999), Custom Mobile App (₹99,999). 100% Satisfaction Guarantee.
- Tech Stack: React, Next.js, Node.js, Spring Boot, Kafka, Redis, Docker, Kubernetes, AWS.

Always be extremely professional, polite, concise, and persuasive. Use emojis occasionally.

IMPORTANT: You MUST respond in valid JSON format.
Your JSON must have two keys:
1. "reply": A string containing your response to the user.
2. "suggestions": An array of up to 3 objects. Each object must have a "label" (button text) and EITHER an "action" (text to send as chat) OR a "path" (a URL route like "/services", "/pricing", "/about", "/portfolio", "/contact").

Example Output:
{
  "reply": "WebNex specializes in building high-end scalable applications and AI bots. Our pricing starts at ₹9,999. Would you like to see our full pricing or explore our services?",
  "suggestions": [
    { "label": "View Pricing", "path": "/pricing" },
    { "label": "Explore Services", "path": "/services" },
    { "label": "What tech do you use?", "action": "What tech do you use?" }
  ]
}`;

    // Format messages for Groq API
    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map(m => ({
        role: m.role === 'ai' ? 'assistant' : 'user',
        content: m.text
      }))
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: apiMessages,
        response_format: { type: 'json_object' },
        temperature: 0.7,
        max_tokens: 500,
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq API Error:', errText);
      return NextResponse.json({ error: 'Failed to fetch from Groq' }, { status: 500 });
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
      if (!parsedContent.suggestions || !Array.isArray(parsedContent.suggestions) || parsedContent.suggestions.length === 0) {
        parsedContent.suggestions = [
          { label: "Explore Services", path: "/services" },
          { label: "Check Pricing", path: "/pricing" }
        ];
      }
    } catch (e) {
      parsedContent = {
        reply: content,
        suggestions: [
          { label: "Contact Sales", path: "/contact" },
          { label: "View Services", path: "/services" }
        ]
      };
    }

    return NextResponse.json(parsedContent);
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
