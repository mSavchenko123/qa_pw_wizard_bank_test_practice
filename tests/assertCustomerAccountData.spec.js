import { test, expect } from '@playwright/test';

test('Assert customer has correct bank data', async ({ page }) => {
  /* 
  Test:
  1. Open Wizard bank link https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  2. Select Hermione Granger
  3. Click [Login]
  4. Assert Account Number in Dropdown next to the Hermoine Granger name
  5. Assert Account Number text
  5. Assert Balance text
  6. Assert Currency text
  
  Tip:
  1. Use .inputValue() to obtain the value from Account Number dropd-down 
  2. Use await expect().toBe() assertion to validate the number obtained from drop-down
  */
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.waitForTimeout(3000);
  await page.locator('#userSelect').selectOption({ label: 'Hermoine Granger' });
  await page.getByRole('button', { name: 'Login' }).click();

  const accountNumber = await page.locator('#accountSelect').inputValue();
  await expect(accountNumber).toBe('number:1001');

  await expect(page.getByText('Account Number : 1001 ,')).toContainText('Account Number');
  await expect(page.getByText('Balance : 5096 ,')).toContainText('Balance');
  await expect(page.getByText('Currency : Dollar')).toContainText('Currency');


});