import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the deposit can be opened', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.waitForTimeout(1000);
  await page.locator('#userSelect').selectOption({ label: 'Harry Potter' });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Deposit' }).click();
  await page.waitForTimeout(1000);

  const amount = faker.number.int(1000).toString();
  await page.getByPlaceholder('amount').fill(amount);

  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
  await expect(page.getByText('Deposit Successful')).toBeVisible();
  await expect(page.getByText('Balance :')).toContainText(amount);
  await page.getByRole('button', { name: 'Transactions' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('.fixedTopBox > div')).toBeVisible();
  await page.reload();

  await expect(page.locator('table tbody tr:first-child td:nth-child(2)')).toContainText(amount);
  await expect(page.locator('table tbody tr:first-child td:nth-child(3)')).toContainText('Credit');
});
