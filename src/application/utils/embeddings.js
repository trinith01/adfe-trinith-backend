import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

// export const generateEmbeddings = async (text) => {
//     const response = await openai.embeddings.create({
//         model: "text-embedding-3-small",
//         dimensions: 1536,
//         input: text,
//     });
//     return response.data.data[0].embedding;

    
// }