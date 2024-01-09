fixed all the minor bugs upgraded to DALLE3 and resolved all the rate limit issues
Here's preview:
![image](https://github.com/Srijan-D/DALLE3/assets/87586713/e2b115f4-c9cf-4d86-a044-7cc8ba0b3422)

![image](https://github.com/Srijan-D/DALLE3/assets/87586713/2229df02-3e0b-4f46-9792-8a432d7c5a3c)




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Fork the existing repo. 
install the necessary packages using your favourite package manager yarn/pnpm/npm

Once done cd into the azure folder using cli write npm run start to deploy the azure cloud functions.(make sure you have an azure account if not one can even login using the Azure extension present in VScode 
market place)
Prior to deoployment enter an existing openai api key inside of the env file. (Feel free to message me on twitter if you face any sort of difficulty in running the project).

Then run development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `app/api/hello.ts`.
Note⚠: This build uses serverless infrastructure, built with Azure cloud functions. So, in order to edit the gpt response prompt go to /azure/src/functions/

The `app/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
Any contributions are welcome 😊 star the repo if you liked it.
Due to heavy concurrent traffic the older api key has been disabled, feel free to message me if you want to see the project working live. 
