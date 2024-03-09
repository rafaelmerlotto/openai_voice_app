import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import express from "express";
import cors from "cors"


dotenv.config()
const app = express();
app.use(express.json())
app.use(cors())

const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY
})

app.post("/text", async (req, res) => {
  const { text, voice } = req.body
  const speechFile = path.resolve("../frontend/src/audio/speech.mp3");

  async function main() {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice,
      input: text,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    await Promise.resolve(fs.promises.writeFile(speechFile, buffer))
  }
  main()
  res.status(200).send({ msg: text })
})

app.get("/", async (req,res) => {
  res.status(200).send("Server is running 🚀")
})

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`app is running on 🚀 http://localhost:${PORT}`)
})
