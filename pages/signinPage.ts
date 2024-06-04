import { Locator, Page } from "@playwright/test";

export class SignInPage {
    readonly page:Page
    readonly signInButton: Locator
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly panelFailed: Locator
    constructor(page:Page){
        this.page = page
        this.signInButton = page.getByText('Sign In');
        this.usernameField = page.locator('[name="username"]');
        this.passwordField = page.locator('[name="password"]');
        this.loginButton = page.locator('text="Login"');
        this.panelFailed = page.getByText('Invalid username or password. Signon failed.');
    }
}