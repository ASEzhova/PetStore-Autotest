import { Locator, Page } from "@playwright/test";

export class JPetStorePage {
    readonly page:Page
    readonly logoButton: Locator
    readonly imgcartButton: Locator
    readonly MyOrdersButton: Locator
    readonly MyAccountButton: Locator
    readonly signOutButton: Locator
    readonly questionButton: Locator
    readonly productSearch: Locator
    readonly SearchButton: Locator
    readonly goldfishProduct: Locator
    constructor(page:Page){
        this.page = page
        this.logoButton = page.locator('[src="/images/logo-topbar.gif"]'); 
        this.imgcartButton = page.locator('[name="img_cart"]');
        this.MyOrdersButton = page.locator('text="My Orders"');
        this.MyAccountButton = page.locator('text="My Account"');
        this.signOutButton = page.locator('text="Sign Out"');
        this.questionButton = page.locator('[href="/help.html"]');
        this.productSearch = page.locator('[placeholder="Product Search"]');
        this.SearchButton = page.getByRole('button').and(page.getByText('Search'));
        this.goldfishProduct = page.locator('text="Fresh Water fish from China"');
    }
}