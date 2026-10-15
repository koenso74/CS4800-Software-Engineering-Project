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

Code execution uses Judge0. Set `JUDGE0_URL` when using a hosted Judge0-compatible instance; `https://ce.judge0.com` is the default. If the instance requires authentication, also set `JUDGE0_API_KEY`.

Run the API checks with:

```bash
npm test
```

The tests cover registration, login failures, protected progress, and problem filtering. They use the in-memory demo store and do not require MongoDB.

## Vercel

Import the repository as a Vercel project. The included `vercel.json` builds the Vite app and rewrites `/api/*` to the Express function. Add `MONGODB_URI`, `JWT_SECRET`, `VITE_API_URL`, and the Judge0 variables in Vercel project settings. For a same-domain deployment, `VITE_API_URL` can be `/api`.

MongoDB must allow connections from Vercel at runtime. For a short test window, Atlas Network Access can use `0.0.0.0/0`; remove that rule or replace it with a restricted egress strategy before treating the deployment as production-ready.

Never commit a real `.env` file or database credentials.
