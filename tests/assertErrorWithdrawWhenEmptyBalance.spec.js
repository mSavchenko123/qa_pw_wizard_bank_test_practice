import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the customer cannot withdraw money with empty balance', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  
  await page.locator('#userSelect').selectOption({ label: 'Ron Weasly' });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Withdrawl' }).click();
  await expect(page.getByText('Balance : 0 ,')).toContainText('Balance : 0 , ');
  await page.getByRole('button', { name: 'Withdrawl' }).click();
  
  const amount = faker.number.int(1000).toString();
  await page.getByPlaceholder('amount').fill(amount);
  
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
  await expect(page.getByText('Transaction Failed. You can')).toBeVisible();
});
