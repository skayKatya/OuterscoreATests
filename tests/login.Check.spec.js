import { test, expect } from '@playwright/test';
import LoginPage from '../src/pageObjects/LoginPage';

    test.describe("Login page", ()=>{
        let loginPage;

        test.beforeEach(async ({page})=>{
            loginPage = new LoginPage(page);
            await loginPage.navigate();
        })

        test ("'Verify login with correct data", async ({ page }) => {
        
            const email = 'kateryna.rybalska@fordewind.io';
            const password = '1234!Zaqwerty1234!';
    
            await loginPage.login({ email, password });
            await expect(page).toHaveURL('dashboard')
        })

        test ("'Verify error about empty mandatory fields", async ({ page }) => {

            await loginPage.clickLoginButton();

            await expect(loginPage._emailValidationMessage).toHaveText('Pflichtfeld' );
            await expect(loginPage._emailInput).toHaveCSS('border-color', 'rgb(204, 50, 50)');
            await expect(loginPage._passwordValidationMessage).toHaveText('Pflichtfeld' );
            await expect(loginPage._passwordInput).toHaveCSS('border-color', 'rgb(204, 50, 50)');
         })

        test ("'Verify error about empty email field", async ({ page }) => {
    
            const password = '1234!Zaqwerty1234!';

            await loginPage.fill({password });
            await loginPage.clickLoginButton();

            await expect(loginPage._emailValidationMessage).toHaveText('Pflichtfeld' );
            await expect(loginPage._emailInput).toHaveCSS('border-color', 'rgb(204, 50, 50)');
        })

        test ("'Verify error about empty password field", async ({ page }) => {
    
            const email = 'kateryna.rybalska@fordewind.io';
            
            await loginPage.fill({email});
            await loginPage.clickLoginButton();

            await expect(loginPage._passwordValidationMessage).toHaveText('Pflichtfeld' );
            await expect(loginPage._passwordInput).toHaveCSS('border-color', 'rgb(204, 50, 50)');
        })

        test("'Verify Reset password button  present", async ({ page }) => {
            
            await expect(loginPage._resetPasswordBtn).toHaveText('Passwort zurücksetzen ' );
        
        })
        })