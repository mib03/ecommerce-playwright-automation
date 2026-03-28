# Ecommerce Playwright Automation

[![Playwright Tests](https://github.com/mib03/ecommerce-playwright-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/mib03/ecommerce-playwright-automation/actions/workflows/playwright.yml)

Automation testing project using Playwright + TypeScript with Page Object Model.

## Tech Stack
- Playwright
- TypeScript
- Page Object Model (POM)
- JSON-based test data

## Features
- Login (positive & negative scenarios)
- Validation (invalid credentials, empty fields)
- Place order end-to-end flow
- Order history verification

## Test Coverage
- User can login with valid credentials
- User cannot login with invalid email
- User cannot login with invalid password
- User cannot login with empty email
- User cannot login with empty password
- User can place order successfully

## Project Structure
- tests/ui
- pages
- utils

## How to Run
1. npm install
2. npx playwright install
3. npx playwright test

## Notes
- Uses Page Object Model to separate test logic and UI interaction
- Data-driven testing implemented using external JSON files
- Focused on readability, maintainability, and reusable components