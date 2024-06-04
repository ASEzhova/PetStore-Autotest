import { Locator, Page } from "@playwright/test";

export class MyOrdersPage {
    readonly page:Page
    readonly orderidTable: Locator
    readonly dateTable: Locator
    readonly totalpriceTable: Locator
    readonly firstOrder: Locator

    constructor(page:Page){
        this.page = page
        this.orderidTable = page.getByText('Order ID');
        this.dateTable = page.getByText('Date');
        this.totalpriceTable = page.getByText('Total Price');
        this.firstOrder = page.locator('[href="/order/viewOrder?orderId=17913"]');
        
    }
}