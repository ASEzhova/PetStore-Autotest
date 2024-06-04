import { Locator, Page } from "@playwright/test";

export class CategoriesPage {
    readonly page: Page
    readonly fish: Locator
    readonly dogs: Locator
    readonly reptiles: Locator
    readonly cats: Locator
    readonly birds: Locator
    constructor(page:Page){
        this.page = page
        this.fish = page.locator('[href="/categories/FISH"]').nth(0);
        this.dogs = page.locator('[href="/categories/DOGS"]').nth(0); 
        this.reptiles = page.locator('[href="/categories/REPTILES"]').nth(0);
        this.cats = page.locator('[href="/categories/CATS"]').nth(0);
        this.birds = page.locator('[href="/categories/BIRDS"]').nth(0);
    }
}