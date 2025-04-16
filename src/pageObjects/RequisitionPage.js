import { expect } from '@playwright/test';

export default class RequisitionPage {
    constructor(page) {
        this._page = page;
        this._url = '/requisitions';

        // Locators
        this._createRequisitionButton = page.locator('os-simple-header .mat-button-wrapper');
        this._pageHeader = page.locator('.simple-header-text');
        this._newRequisitionpageHeader = page.locator('.header-title');
        this._newRequisitionTitle = page.getByRole('textbox', { name: 'Example \'Scrum Master for CRM' });
        this._newRequisitionOwner = page.locator('os-single-user-select').getByRole('combobox');
        this._newRequisitionCategory = page.locator('ng-select').filter({ hasText: 'Please select ANÜ' }).getByRole('combobox');
        this._newRequisitionSubcategory = page.locator('os-service-tags-select').getByRole('textbox');
        this._newRequisitionStartDate = page.getByRole('textbox', { name: 'Start' });
        this._newRequisitionEndDate = page.getByRole('textbox', { name: 'End' });
        this._newRequisitionLegalEntity = page.locator('os-field-label').filter({ hasText: 'Legal Entity* error_outline' }).getByRole('combobox');
        this._newRequisitionDepartment = page.locator('os-field-label').filter({ hasText: 'Department* error_outline' }).getByRole('combobox');
        this._newRequisitionPrimaryCostCentre = page.locator('os-field-label').filter({ hasText: 'Primary Cost Centre*' }).getByRole('combobox');
        this._newRequisitionCountry = page.locator('os-field-label').filter({ hasText: 'Country* error_outline Please' }).getByRole('combobox');
        this._newRequisitionWorkLocation = page.locator('outerscore-inline-multiselect').filter({ hasText: 'Start typing or select' });
        this._nextButton = page.locator('right-controls-column').getByRole('button', { name: 'Next' });


    }

    async goToRequisition() {
        await this._page.goto(this._url);
        await expect(this._pageHeader).toHaveText(' Requisitions ');
    }

    async clickCreateRequisitionButton() {
        await this._createRequisitionButton.click();
        await expect(this._newRequisitionpageHeader).toHaveText(' Create Requisition ');
    }

    async fillGeneralInfo() {

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 14);
        const day = currentDate.getDate();

        const prefix = 'aqa';
        const newTitle = prefix + Math.floor(Math.random() * 100);

        await this._newRequisitionTitle.click();
        await this._newRequisitionTitle.fill(newTitle);
        await this._newRequisitionOwner.click();
        await this._page.getByRole('listbox', { name: 'Options list' }).getByRole('textbox').fill('kate');
        await this._page.getByRole('option', { name: 'Kate R' }).click();
        await this._newRequisitionCategory.click();
        await this._page.getByRole('option', { name: 'ANÜ' }).click();
        await this._newRequisitionSubcategory.click();
        await this._page.getByRole('option', { name: 'Los 01 - Kaufmännische ANÜ-' }).click();
        await this._newRequisitionStartDate.click();
        await this._page.getByText(day.toString(), { exact: true }).click();
        await this._newRequisitionLegalEntity.click();
        await this._page.getByRole('option', { name: 'EnBW Energie Baden-Wü' }).click();
        await this._newRequisitionCountry.click();
        await this._page.getByRole('option', { name: 'Deutschland' }).click();
        await this._newRequisitionDepartment.click();
        await this._page.getByRole('option', { name: 'BR-AKE' }).click();
        await this._newRequisitionPrimaryCostCentre.click();
        await this._page.getByRole('option', { name: 'AD: KAM' }).click();   
        await this._newRequisitionWorkLocation.click();
        await this._page.getByText('Berlin').click();
           
        await this._page.locator('.cdk-overlay-backdrop').click();

        await this._nextButton.click();
        
    }

    async proceedToGuidedBuying() {
        await this._page.getByText('Ich bestätige, dass ich das').click();
        await this._page.getByRole('button', { name: 'Send' }).click();
        await this._page.getByText('Ich werde die Position nach').click();
        await this._page.getByRole('button', { name: 'Send' }).click();
        await this._page.getByText('Enter your name in the').click();
        await this._page.getByRole('textbox', { name: '/Max Mustermann/' }).click();
        await this._page.getByRole('textbox', { name: '/Max Mustermann/' }).fill('/Kate R/');
        await this._page.getByRole('button', { name: 'Sign' }).click();

        await this._page.locator('right-controls-column').getByRole('button', { name: 'Next' }).click();
    }

    async completeJobPosting() {
        await this._page.locator('os-field-label').filter({ hasText: 'Job Title*Please select' }).getByRole('combobox').click();
        await this._page.getByRole('listbox', { name: 'Options list' }).getByRole('textbox').fill('AQA');
        await this._page.getByRole('listbox', { name: 'Options list' }).getByRole('textbox').press('Enter');
        await this._page.getByText('Please select arrow_drop_down').first().click();
        await this._page.getByText('A - Basiskraft').click();
        await this._page.locator('.cdk-overlay-backdrop').click();
        await this._page.locator('.ql-editor').first().click();
        await this._page.locator('.ql-editor').first().fill('test automation');
        await this._page.locator('os-field-label').filter({ hasText: 'Reason*Please select' }).getByRole('combobox').click();
        await this._page.getByRole('option', { name: 'New Position' }).click();
        await this._page.locator('os-field-label').filter({ hasText: 'Requires Travel*Please select' }).getByRole('combobox').click();
        await this._page.getByRole('option', { name: 'No business trips' }).click();
        await this._page.locator('os-field-label').filter({ hasText: 'Home Office*Please select' }).getByRole('combobox').click();
        await this._page.getByRole('option', { name: '% Homeoffice (fully remote)' }).click();
        await this._page.locator('os-skills').getByRole('textbox').click();
        await this._page.getByRole('option', { name: 'PHP', exact: true }).click();
        await this._page.locator('.qualification-level-item').first().click();

        await this._page.locator('right-controls-column').getByRole('button', { name: 'Next' }).click();
    }

    async submitRequisition() {
        await this._page.getByRole('button', { name: 'Submit' }).click();
    }
}