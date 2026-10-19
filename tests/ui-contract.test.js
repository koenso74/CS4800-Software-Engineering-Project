import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const mainSource = await fs.readFile(new URL('../src/main.jsx', import.meta.url), 'utf8');
const editorSource = await fs.readFile(new URL('../src/editorEnhancements.js', import.meta.url), 'utf8');

test('frontend uses the shared problem catalog', () => {
  assert.match(mainSource, /problemCatalog/);
  assert.doesNotMatch(mainSource, /demoProblems\.push/);
});

test('editor workflow contracts remain wired', () => {
  assert.match(mainSource, /className="editor"/);
  assert.match(mainSource, /path="\/problems\/:slug"/);
  assert.match(editorSource, /event\.key !== 'Tab'/);
  assert.match(editorSource, /language-select/);
  assert.match(editorSource, /cc_language_\$\{slug\}/);
  assert.match(editorSource, /localStorage\.setItem\(languageKey/);
  assert.match(editorSource, /api\/submissions\/run/);
  assert.match(editorSource, /test-cases/);
});
