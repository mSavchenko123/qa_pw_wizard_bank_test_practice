import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the customer cannot withdraw money with empty balance', async ({ page }) => {
/* 
Test:
1. Open Wizard bank login for Customer using link https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
2. Select "Ron Weasly"
3. Click [Login]
4. Assert the "Balance : 0" text is present
5. Click [Withdrawl]
6. Type amount of money to withdraw
7. Click [Withdraw]
8. Assert error message 'Transaction Failed. You can not withdraw amount more than the balance.' is visible
*/
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