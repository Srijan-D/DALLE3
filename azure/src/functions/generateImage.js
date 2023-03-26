const { app } = require('@azure/functions');
const openai = require('../../lib/openai');
const axios = require('axios');
const generateSASToken = require('../../lib/generateSASToken');

const { BlobServiceClient } = require('@azure/storage-blob');

const accountName = process.env.accountName;
const containerName = "images";

app.http("generateImage", {
    methods: ["POST"],
    authLevel: "anonymous",
    handler: async (request) => {
        const { prompt } = await request.json();
        console.log(`PROMPT=> ${prompt}`);

        const response = await openai.createImage({
            prompt: prompt,
            n: 1,//number of images to generate
            size: '1024x1024'
        })
        image_url = response.data.data[0].url;

        //now we need to download the image and upload it to azure blob storage
        const res = await axios.get(image_url, { responseType: 'arraybuffer' });
        //arraybuffer is a binary representation of the image used to store the image in memory
        const arrayBuffer = res.data;

        sasToken = await generateSASToken();

        //getting access to the storage account  
        const blobServiceClient = new BlobServiceClient(
            `https://${accountName}.blob.core.windows.net?${sasToken}`
        )
        //getting access to the container inside the storage account
        const containerClient = blobServiceClient.getContainerClient(containerName);

        //generating time stamp( for being able to display it according to the time) and filename for the image
        const timestamp = new Date().getTime();
        const file_name = `${prompt}_${timestamp}.png`;
        //example caa_1629190000000.png

        //getting access to the blob inside the container
        const blockBlobClient = containerClient.getBlockBlobClient(file_name);

        try {

            await blockBlobClient.uploadData(arrayBuffer)
            console.log("Image uploaded to Azure Blob Storage")

        } catch (error) {
            console.log(" Error uploading image ", error.message)
        }
        return { body: "Image uploaded successfully" }
    },
})