import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe("Create Requisite", ()=>{

    test("Create requisites with a correct data", async ({ page }) => {
       
        // login to the web app

        await page.goto('/requisitions');

        const emailInput = page.locator('.input-wrapper input[type="email"]')
        const passwordInput = page.locator('.input-wrapper input[type="password"]')
        const signInBtn = page.locator('.large.mat-button-base.mat-primary.mat-raised-button')
            
        
        const email = 'kateryna.rybalska@fordewind.io'
        const password = '1234!Zaqwerty1234!'

        await emailInput.fill(email)   
        await passwordInput.fill(password)
        await signInBtn.click()
        
        //click on the Requisition button

        await page.locator('os-simple-header .mat-button-wrapper').click()

        //step 1 General Info

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 14);
        const day = currentDate.getDate();


        await page.getByRole('textbox', { name: 'Example \'Scrum Master for CRM' }).click();
        await page.getByRole('textbox', { name: 'Example \'Scrum Master for CRM' }).fill('TestAQA');
        await page.locator('os-single-user-select').getByRole('combobox').click();
        await page.getByRole('listbox', { name: 'Options list' }).getByRole('textbox').fill('kate');
        await page.getByRole('option', { name: 'Kate R' }).click();
        await page.locator('ng-select').filter({ hasText: 'Please select ANÜ' }).getByRole('combobox').click();
        await page.getByRole('option', { name: 'ANÜ' }).click();
        await page.locator('os-service-tags-select').getByRole('textbox').click();
        await page.getByRole('option', { name: 'Los 01 - Kaufmännische ANÜ-' }).click();
        await page.getByRole('textbox', { name: 'Start' }).click();
        await page.getByText(day.toString(), { exact: true }).click();
        await page.locator('os-field-label').filter({ hasText: 'Legal Entity* error_outline' }).getByRole('combobox').click();
        await page.getByRole('option', { name: 'EnBW Energie Baden-Wü' }).click();
        await page.locator('os-field-label').filter({ hasText: 'Department* error_outline' }).getByRole('combobox').click();
        await page.getByRole('option', { name: 'BR-AKE' }).click();
        await page.locator('os-field-label').filter({ hasText: 'Primary Cost Centre*' }).getByRole('combobox').click();
        await page.getByRole('option', { name: 'AD: KAM' }).click();
        await page.locator('os-field-label').filter({ hasText: 'Country* error_outline Please' }).getByRole('combobox').click();
        await page.getByRole('option', { name: 'Deutschland' }).click();
        await page.locator('span').filter({ hasText: 'Start typing or select' }).click();
        await page.getByText('Berlin').click();
        await page.locator('.cdk-overlay-backdrop').click();

        await page.locator('right-controls-column').getByRole('button', { name: 'Next' }).click();

        //step 2 Guided Buying

        await page.getByText('Ich bestätige, dass ich das').click();
        await page.getByRole('button', { name: 'Send' }).click();
        await page.getByText('Ich werde die Position nach').click();
        await page.getByRole('button', { name: 'Send' }).click();
        await page.getByText('Enter your name in the').click();
        await page.getByRole('textbox', { name: '/Max Mustermann/' }).click();
        await page.getByRole('textbox', { name: '/Max Mustermann/' }).fill('/Kate R/');
        await page.getByRole('button', { name: 'Sign' }).click();

        await page.locator('right-controls-column').getByRole('button', { name: 'Next' }).click();

        //step 3 Job Posting

        await page.locator('os-field-label').filter({ hasText: 'Job Title*Please select' }).getByRole('combobox').click();
        await page.getByRole('listbox', { name: 'Options list' }).getByRole('textbox').fill('AQA');
        await page.getByRole('listbox', { name: 'Options list' }).getByRole('textbox').press('Enter');
        await page.getByText('Please select arrow_drop_down').first().click();
        await page.getByText('A - Basiskraft').click();
        await page.locator('.cdk-overlay-backdrop').click();
        await page.locator('.ql-editor').first().click();
        await page.locator('.ql-editor').first().fill('test automation');
        await page.locator('os-field-label').filter({ hasText: 'Reason*Please select' }).getByRole('combobox').click();
        await page.getByRole('option', { name: 'New Position' }).click();
        await page.locator('os-field-label').filter({ hasText: 'Requires Travel*Please select' }).getByRole('combobox').click();
        await page.getByRole('option', { name: 'No business trips' }).click();
        await page.locator('os-field-label').filter({ hasText: 'Home Office*Please select' }).getByRole('combobox').click();
        await page.getByRole('option', { name: '% Homeoffice (fully remote)' }).click();
        await page.locator('os-skills').getByRole('textbox').click();
        await page.getByRole('option', { name: 'PHP', exact: true }).click();
        await page.locator('.qualification-level-item').first().click();

        await page.locator('right-controls-column').getByRole('button', { name: 'Next' }).click();

        //submit requisitions

        await page.getByRole('button', { name: 'Submit' }).click();



})
})