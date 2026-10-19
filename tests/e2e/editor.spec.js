import { test, expect } from '@playwright/test';

test('home page fits the viewport and opens the problem list', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /start climbing/i })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollHeight <= window.innerHeight)).toBe(true);
  await page.getByRole('link', { name: /start climbing/i }).click();
  await expect(page).toHaveURL(/\/problems$/);
  await expect(page.getByText('10 curated climbs')).toBeVisible();
});

test('language picker, tab indentation, and visible test cases work in the editor', async ({ page }) => {
  await page.goto('/problems/sum-of-array');
  const editor = page.locator('textarea.editor');
  const language = page.locator('select.language-select');
  await expect(editor).toBeVisible();
  await expect(language).toBeVisible();
  await language.selectOption('python');
  await expect(editor).toHaveValue(/def sum_array/);
  await editor.click();
  await editor.press('End');
  await editor.press('Tab');
  await expect(editor).toHaveValue(/  $/m);
  await page.getByRole('button', { name: /run code/i }).click();
  await expect(page.getByText('Test cases')).toBeVisible();
  await expect(page.getByText(/add your solution/i)).toBeVisible();
});
