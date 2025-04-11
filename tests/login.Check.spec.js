import { test, expect } from '@playwright/test';

    test.describe("Login page", ()=>{

        test.beforeEach(async ({page})=>{
            
            await page.goto('/');
        })

        test("'Verify login with correct data", async ({ page }) => {
        
            const emailInput = page.locator('.input-wrapper input[type="email"]')
            const passwordInput = page.locator('.input-wrapper input[type="password"]')
            const signInBtn = page.locator('.large.mat-button-base.mat-primary.mat-raised-button')
            
            const email = 'kateryna.rybalska@fordewind.io'
            const password = 'KateFordewind2024!'
    
            await emailInput.fill(email)   
            await passwordInput.fill(password)
            await signInBtn.click()
        })

        test ("'Verify error about empty mandatory fields", async ({ page }) => {

            const emailInput = page.locator('.input-wrapper input[type="email"]')
            const passwordInput = page.locator('.input-wrapper input[type="password"]')
            const signInBtn = page.locator('.large.mat-button-base.mat-primary.mat-raised-button')
            const emailValidationMessage = page.locator('div:nth-of-type(1) > os-field-label os-field-input  .error-text.ng-star-inserted')
            const passwordValidationMessage = page.locator('div:nth-of-type(2) > os-field-label os-field-input  .error-text.ng-star-inserted')

            await signInBtn.click()

            await expect(emailValidationMessage).toHaveText('Pflichtfeld' );
            await expect(emailInput).toHaveCSS('border-color', 'rgb(204, 50, 50)');
            await expect(passwordValidationMessage).toHaveText('Pflichtfeld' );
            await expect(passwordInput).toHaveCSS('border-color', 'rgb(204, 50, 50)');
         })

        test ("'Verify error about empty email field", async ({ page }) => {
    
            const emailInput = page.locator('.input-wrapper input[type="email"]')
            const passwordInput = page.locator('.input-wrapper input[type="password"]')
            const signInBtn = page.locator('.large.mat-button-base.mat-primary.mat-raised-button')
            const emailValidationMessage = page.locator('div:nth-of-type(1) > os-field-label os-field-input  .error-text.ng-star-inserted')
            const password = 'KateFordewind2024!'
    
            await passwordInput.fill(password)
            await signInBtn.click()

            await expect(emailValidationMessage).toHaveText('Pflichtfeld' );
            await expect(emailInput).toHaveCSS('border-color', 'rgb(204, 50, 50)');
        })

        test ("'Verify error about empty password field", async ({ page }) => {
    
            const emailInput = page.locator('.input-wrapper input[type="email"]')
            const passwordInput = page.locator('.input-wrapper input[type="password"]')
            const signInBtn = page.locator('.large.mat-button-base.mat-primary.mat-raised-button')
            const passwordValidationMessage = page.locator('div:nth-of-type(2) > os-field-label os-field-input  .error-text.ng-star-inserted')
            const email = 'kateryna.rybalska@fordewind.io'

            await emailInput.fill(email)
            await signInBtn.click()

            await expect(passwordValidationMessage).toHaveText('Pflichtfeld' );
            await expect(passwordInput).toHaveCSS('border-color', 'rgb(204, 50, 50)');
        })

        test("'Verify Reset password button  present", async ({ page }) => {
    
            const resetPasswordBtn = page.locator('.login-component-footer > a')
            
            await expect(resetPasswordBtn).toHaveText('Passwort zurücksetzen ' );
        
        })
        })