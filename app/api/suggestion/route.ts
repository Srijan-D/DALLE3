export async function GET(request: Request) {
    //Now our API communicates with Microsoft Azure Function Endpoint 
    const response = await fetch("http://localhost:7071/api/getChatGPTSuggestion", {
        cache: 'no-store',
    })

    const textData = await response.text();

    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    })
}