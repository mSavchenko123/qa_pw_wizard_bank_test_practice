# Wizard Bank Test Framework

An automation testing project for the Wizard Bank demo application.

## Description

This repository contains an end-to-end (E2E) testing framework built using Playwright.  
It is designed to automate testing for the Wizard Bank platform, ensuring the quality and reliability of its core features such as customer login, transactions, deposits, and withdrawals.

## Repository Structure

qa_pw_wizard_bank_test_practice/
├── tests/ # Test cases for various Wizard Bank features

├── .gitignore # Git ignore rules

├── package.json # Node.js dependencies and scripts

├── package-lock.json # Lockfile for npm dependencies

├── playwright.config.js # Playwright configuration file

├── README.md # Project documentation

## Used Technologies

- Playwright  
- Faker.js  
- JavaScript

## Commands

### Install Dependencies

`npm install`

### Run Tests in headed mode

`npx playwright test`

### Run Tests in debug mode

`npx playwright test --debug`

### Run Playwright Test Runner UI

`npx playwright test --ui`

### Run a specific test file

`npx playwright test tests/<test-file-name>.spec.js`

## Useful Information

Tests cover user scenarios such as:

- Customer login and logout  
- Deposit opening  
- Verifying empty transactions  
- Withdrawal restrictions on empty balance

Tests are located in the `tests/` directory.  
Playwright configuration is set in `playwright.config.js`.

---

**Author:** mSavchenko123


