import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://localhost:44413/');
  await page.getByRole('link', { name: 'Counter' }).click();
  await page.getByRole('button', { name: 'Increment' }).click();
  await page.getByRole('button', { name: 'Increment' }).click();
  await page.getByRole('button', { name: 'Increment' }).click();
  await page.getByRole('link', { name: 'Fetch data' }).click();
  await page.getByRole('cell', { name: '2023-09-29' }).click();
  await expect(page.getByRole('cell', { name: '2023-09-30' })).toHaveText("2023-09-30");
  await page.getByRole('cell', { name: 'Temp. (C)' }).click();
});