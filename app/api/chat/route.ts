// app/api/chat/route.ts

import { OpenAIStream, StreamingTextResponse } from "ai";
import type { NextApiResponse } from "next";
import OpenAI from "openai";

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
export async function POST(req: Request, res: NextApiResponse) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
