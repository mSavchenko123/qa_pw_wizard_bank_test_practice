import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the deposit can be opened', async ({ page }) => {
/* 
Test:
1. Open Wizard bank login for Customer using link https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
2. Select "Harry Potter"
3. Click [Login]
4. Click [Deposit]
5. Fill deposit value
6. Click [Deposit]
7. Assert 'Deposit Successful' message is visible
8. Assert Balance
9. Click [Transactions]
10. Assert table heder is visible
11. Reload the page
12. Assert amount cell in First Row contains the required amount
13. Assert transaction type cell in First Row contains the required type

Tips:
1. Use faker to generate random value for deposit:
- Import faker using command "import { faker } from '@faker-js/faker';"
- Generate random amount value using "const amount = faker.number.int(100).toString();". Then use the "amount" in your test. 
*/

});