import { NextResponse } from "next/server";
//function to generate images 

export async function POST(request: Request) {
    const res = await request.json();
    const prompt = res.prompt;

    const response = await fetch("http://localhost:7071/api/generateImage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt }),
    })
    const textData = await response.text();

    return NextResponse.json({ textData });
}