
export default class LoginPage {
    constructor(page) {
        this._page = page;
        this._url = '/';

        // Locators
        this._container = page.locator('.card-body.login-component-body'); 
        this._emailInput = this._container.locator('.input-wrapper input[type="email"]');
        this._emailValidationMessage = page.locator('div:nth-of-type(1) > os-field-label os-field-input .error-text.ng-star-inserted');
        this._passwordInput = this._container.locator('.input-wrapper input[type="password"]');
        this._passwordValidationMessage = page.locator('div:nth-of-type(2) > os-field-label os-field-input .error-text.ng-star-inserted');
        this._loginButton = this._container.locator('.mat-button-wrapper');
        this. _resetPasswordBtn = this._container.locator('.login-component-footer > a')
    }

    async navigate() {
        await this._page.goto(this._url);
    }

    async fill({ email, password }) {
        if (email) {
            await this._emailInput.fill(email);
        }
        if (password) {
            await this._passwordInput.fill(password);
        }
    }

    async login({ email, password }) {
        await this.fill({ email, password });
        await this._loginButton.click();
    }

    async clickLoginButton() {
        await this._loginButton.click();
    }
}