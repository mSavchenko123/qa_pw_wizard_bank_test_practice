import { test, expect } from '@playwright/test';

test('Assert customer has correct bank data', async ({ page }) => {
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
