import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import RequisitionPage from '../src/pageObjects/RequisitionPage';
import LoginPage from '../src/pageObjects/LoginPage';

test.describe.only("Create Requisite", ()=>{
     let loginPage;
     let requisitionPage;
    
            test.beforeEach(async ({page})=>{

                //login
                loginPage = new LoginPage(page);
                await loginPage.navigate();

                const email = 'kateryna.rybalska@fordewind.io';
                const password = '1234!Zaqwerty1234!';
        
                await loginPage.login({ email, password });
                await expect(page).toHaveURL('dashboard')

                //navigate to Requisition page
                requisitionPage = new RequisitionPage(page);
                await requisitionPage.goToRequisition();

            })
    
    test("Create requisition with correct data", async ({ page }) => {
        
        await requisitionPage.clickCreateRequisitionButton();
        await requisitionPage.fillGeneralInfo();
        await requisitionPage.completeGuidedBuying();
        await requisitionPage.completeJobPosting();
        await requisitionPage.submitRequisition();



})
})