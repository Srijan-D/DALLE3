const { app } = require('@azure/functions');

const { BlobServiceClient, StorageSharedKeyCredential } = require('@azure/storage-blob');


const generateSASToken = require('../../lib/generateSASToken');

const accountName = process.env.accountName;
const accountKey = process.env.accountKey;
const containerName = "images";


const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
);

app.http("getImages", {
    methods: ["GET"],
    authLevel: "anonymous",
    handler: async (request, context) => {
        const containerClient = blobServiceClient.getContainerClient(containerName);

        const imageUrls = [];
        const sasToken = await generateSASToken();

        for await (const blob of containerClient.listBlobsFlat()) {
            const imageUrl = `${blob.name}?${sasToken}`;
            //sasToken to allow us to access the image
            const url = `https://${accountName}.blob.core.windows.net/${containerName}/${imageUrl}`
            imageUrls.push({ url, name: blob.name });
        }
        const sortedImageUrls = imageUrls.sort((a, b) => {
            const aName = a.name.split("_").pop().toString().split(".").shift();
            //shift() returns the first element of the array and removes it from the array
            const bName = b.name.split("_").pop().toString().split(".").shift();
            return bName - aName; 
        })
        return{
            jsonBody:{
                imageUrls: sortedImageUrls
            }
        }
    }


})



