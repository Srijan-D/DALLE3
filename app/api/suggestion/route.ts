export async function GET(request: Request) {
    //Now our API communicates with Microsoft Azure Function Endpoint 
    const response = await fetch("", {
        cache: 'no-store',
    })

    const textData = await response.text();

    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    })
}