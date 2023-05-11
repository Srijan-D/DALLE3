Use Node version 16.8.0 for the time being (nvm use 16.8.0) as I work on an error encountered whilst connecting with azure client using the latest version of node. <br>
Here's preview:
![image](https://user-images.githubusercontent.com/87586713/230597035-93d7c126-6ecd-4b10-af57-bcbce36c5191.png)
![image](https://user-images.githubusercontent.com/87586713/230597163-3bb9de39-876c-4ff8-87ab-c1ee25da07e6.png)




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.
Note⚠: This build uses serverless infrastructure, built with Azure cloud functions. So, in order to edit the gpt response prompt go to /azure/src/functions/

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
