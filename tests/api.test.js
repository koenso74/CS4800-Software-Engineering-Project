import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { problems as sharedProblems } from '../shared/problems.js';

process.env.VERCEL = '1';
process.env.NODE_ENV = 'test';
process.env.MONGODB_URI = '';
process.env.JWT_SECRET = 'test-secret';

const { default: app } = await import('../server/src/index.js');
let server;
let baseUrl;

before(async () => {
  server = app.listen(0);
  await new Promise(resolve => server.once('listening', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
});

async function request(path, options = {}) {
  const response = await fetch(baseUrl + path, { headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  return { response, data: await response.json() };
}

test('registers and logs in a user', async () => {
  const email = `test-${Date.now()}@example.com`;
  const registration = await request('/api/auth/register', { method: 'POST', body: JSON.stringify({ name: 'Test User', email, password: 'secret123' }) });
  assert.equal(registration.response.status, 201);
  assert.ok(registration.data.token);

  const login = await request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password: 'secret123' }) });
  assert.equal(login.response.status, 200);
  assert.ok(login.data.token);
  assert.equal(login.data.user.email, email);
});

test('rejects invalid credentials and protects progress', async () => {
  const invalid = await request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email: 'missing@example.com', password: 'wrong' }) });
  assert.equal(invalid.response.status, 401);

  const unauthenticated = await request('/api/progress');
  assert.equal(unauthenticated.response.status, 401);
});

test('filters the ten-problem catalog by difficulty', async () => {
  const result = await request('/api/problems?difficulty=Intermediate');
  assert.equal(result.response.status, 200);
  assert.ok(result.data.length >= 3);
  assert.ok(result.data.every(problem => problem.difficulty === 'Intermediate'));
  assert.ok(result.data.every(problem => !problem.solution && !problem.explanation && !problem.hints));
});

test('serves every problem from the shared catalog', async () => {
  const result = await request('/api/problems');
  assert.equal(result.response.status, 200);
  assert.deepEqual(result.data.map(problem => problem.slug), sharedProblems.map(problem => problem.slug));
});

test('does not expose solutions and returns visible cases for empty submissions', async () => {
  const detail = await request('/api/problems/sum-of-array');
  assert.equal(detail.response.status, 200);
  assert.equal(detail.data.solution, undefined);
  assert.ok(Array.isArray(detail.data.hints));

  const run = await request('/api/submissions/run', {
    method: 'POST',
    body: JSON.stringify({ slug: 'sum-of-array', language: 'python', code: 'def sum_array(nums):\n    pass\n\n# your code here' })
  });
  assert.equal(run.response.status, 200);
  assert.equal(run.data.passed, false);
  assert.equal(run.data.total, 4);
  assert.equal(run.data.tests, 0);
});
