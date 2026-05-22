import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages, userName } = await req.json();

    const systemPrompt = `You are WebNex AI, the official intelligent assistant for WebNex - a premium Digital Innovation Agency.
Your goal is to assist clients, answer their queries about web development, SaaS, AI chatbots, DevOps, and UI/UX design.
Always be extremely professional, polite, concise, and persuasive. Use emojis occasionally.
The user's name is ${userName || 'Guest'}.

IMPORTANT: You MUST respond in valid JSON format.
Your JSON must have two keys:
1. "reply": A string containing your response to the user.
2. "suggestions": An array of 2 to 3 short strings representing suggested next questions or actions the user can take (e.g., "Tell me about pricing", "What services do you offer?", "I need an AI chatbot").

Example Output:
{
  "reply": "Hello! WebNex specializes in building high-end scalable web applications. How can I help you today?",
  "suggestions": ["View Services", "Check Pricing", "Schedule a Call"]
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
        parsedContent.suggestions = ["Explore Services", "Check Pricing"];
      }
    } catch (e) {
      parsedContent = {
        reply: content,
        suggestions: ["Contact Sales", "View Services"]
      };
    }

    return NextResponse.json(parsedContent);
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
