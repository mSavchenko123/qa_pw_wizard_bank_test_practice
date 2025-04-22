import { en_ZA } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

test('Assert the empty transactions list has correct values', async ({ page }) => {
/* 
Test:
1. Open Wizard bank login for Customer using link https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
2. Select "Albus Dumbledore"
3. Click [Login]
4. Click [Transactions]
5. Assert first column header conatins text "Date-Time"
6. Assert second column header conatins text "Amount"
7. Assert first column header conatins text "Transaction Type"
8. Assert the first row in table is hidden
*/
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  // await page.waitForTimeout(1000);
  await page.locator('#userSelect').selectOption({ label: 'Albus Dumbledore' });
  // await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Login' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Transactions' }).click();
  // await page.waitForTimeout(1000);
  await expect(page.getByRole('cell', { name: 'Date-Time' })).toContainText('Date-Time');
  await expect(page.getByRole('cell', { name: 'Amount' })).toContainText('Amount');
  await expect(page.getByRole('cell', { name: 'Transaction Type' })).toContainText('Transaction Type');

  const firstRow = page.locator('table tbody tr').first();  
  await expect(firstRow).toBeHidden();
});