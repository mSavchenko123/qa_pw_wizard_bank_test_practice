import { en_ZA } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

test('Assert the empty transactions list has correct values', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  
  await page.locator('#userSelect').selectOption({ label: 'Albus Dumbledore' });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Transactions' }).click();
  
  await expect(page.getByRole('cell', { name: 'Date-Time' })).toContainText('Date-Time');
  await expect(page.getByRole('cell', { name: 'Amount' })).toContainText('Amount');
  await expect(page.getByRole('cell', { name: 'Transaction Type' })).toContainText('Transaction Type');
  
  const firstRow = page.locator('table tbody tr').first();  
  await expect(firstRow).toBeHidden();
});
