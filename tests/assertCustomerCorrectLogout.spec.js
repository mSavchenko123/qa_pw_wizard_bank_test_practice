import { test, expect } from '@playwright/test';

test('Assert correct customer Logout ', async ({ page }) => {

await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
await page.getByRole('button', { name: 'Customer Login' }).click();
await page.locator('#userSelect').selectOption({ label: 'Neville Longbottom' });
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('button', { name: 'Logout' }).click();
  
await page.waitForURL('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
await expect(page.locator('#userSelect')).toHaveValue('');
});
