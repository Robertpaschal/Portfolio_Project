#!/usr/bin/node
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run () {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = 
        "Write a sonnet about programmers life but make it rythme."

    const result = await model.generateContent(prompt);
    const response = await result.response
    const text = await response.text();
    console.log(text);
}

run();