const { app } = require('@azure/functions');
const openai = require('../../lib/openai');

app.http('getChatGPTSuggestion', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: 'Write a random text prompt for DALL.E2 to generate an image, this prompt will be shown to the user,include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic,4K, abstract, modern, black and white etc. Do not wrap the answer in quotes',
            max_tokens: 100,
            temperature: 0.9,
            //this is the number (ranging from 0 to 2) of times the model will try to generate a unique answer, the higher the number the more unique the answer will be, but the longer it will take to generate
        })

        context.log(`Hello Srijan! function processed request for url "${request.url}"`);

        const responseText = response.data.choices[0].text;

        return { body: responseText };
    }
});
