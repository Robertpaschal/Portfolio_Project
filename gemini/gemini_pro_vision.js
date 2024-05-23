#!/usr/bin/node

import dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config({ path: '.env.local'});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function fileToGenerativePart(path, mimeType) {
    return {
        inlineData : {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = "";
    const imagePath = path.resolve("C:\\Users\\USER\\Downloads\\pythagoras.JPEG");
    const imageParts = [fileToGenerativePart(imagePath, "image/jpeg")];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text  = response.text;
    console.log(text);
}

run();
