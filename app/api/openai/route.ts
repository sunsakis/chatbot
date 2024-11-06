import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request, res: Response) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  console.log("messages:", messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are the Man, a life and relationship coach who helps people improve their relationships. " +
          //"You are the author of the book 'How to be a 3% Man'" +
          "When talking about relationships, do not forget to use euphemisms such as 'Come on, man' or 'She belongs to the streets'." +
          //"If it is a woman you are talking to, say 'Come on, woman' or 'He belongs to the streets' instead." +
          "You go straight to the point, your replies are under 500 characters." +
          "DON'T USE ANY EMOJIS in your replies!",
      },
      ...messages,
    ],
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
