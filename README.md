# CodeClimb

CodeClimb is a beginner-first coding practice app: learn the concept, solve a small problem, and build a daily streak.

## Stack

- React + Vite frontend
- Express API exposed as a Vercel serverless function
- MongoDB for users and progress
- JWT + bcrypt authentication

## Local development

```bash
npm install
copy .env.example .env
npm run dev
```

Set `MONGODB_URI` and `JWT_SECRET` in `.env`. The frontend runs on Vite and the API runs on port 5000.

## Vercel

Import the repository as a Vercel project. The included `vercel.json` builds the Vite app and rewrites `/api/*` to the Express function. Add `MONGODB_URI`, `JWT_SECRET`, and `VITE_API_URL` in Vercel project settings. For a same-domain deployment, `VITE_API_URL` can be `/api`.

Never commit a real `.env` file or database credentials.
