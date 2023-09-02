This is a [Next.js](https://nextjs.org/) blog using [Notions Public API](https://developers.notion.com).

__Demo:__ [https://hovanhoa.vercel.app](https://hovanhoa.vercel.app)

## Getting Started

First, follow Notions [getting started guide](https://developers.notion.com/docs/getting-started) to get a `NOTION_TOKEN` and a `NOTION_DATABASE_ID`, then add them to a file called `.env.local`.

As a reference here's the Notion table I am using: [notion](https://hovanhoa.notion.site/555bbd5c205a4b009fd5c5f563719ac6?v=6694128321844c41b9b1e398eafbe661&pvs=25) 

```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

Install dependencies

```bash
npm install
# or
yarn
```

Start the server with

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Deploy to vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/)
