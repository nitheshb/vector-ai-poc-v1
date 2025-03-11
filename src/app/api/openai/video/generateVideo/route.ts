import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/videos/generations"; // Hypothetical API URL for video generation

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "Prompt is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing OpenAI API Key" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "dall-e-3", // Hypothetical model for video generation
        prompt,
        n: 1,
        duration: 10, // 10-second video
        resolution: "1080p",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const data = response.data;

    if (data.data && data.data.length > 0) {
      return new Response(
        JSON.stringify({ videoUrl: data.data[0].url }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      throw new Error("No video generated by OpenAI");
    }
  } catch (error: any) {
    console.error("Error generating video:", error.response?.data || error.message);

    return new Response(
      JSON.stringify({ error: error.response?.data?.error?.message || "Error calling OpenAI" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
