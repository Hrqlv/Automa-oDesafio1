import { Page, expect } from '@playwright/test';


export class ProdutoPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {


        await this.page.goto('https://www.saucedemo.com');
        const title = this.page.locator('.btn btn_primary btn_small btn_inventory')
        await this.page.click('button >> text="ADD TO CART"')

    }

    async cart(user: string, password: string) {
        await this.page.fill('button[id="root"]', 'cart')
        await this.page.click('button >> text="YOUR CART"')
    }

    async Checkout(firstName?: string, lastName?: string, password?: string) {
        const modalMessage = this.page.locator('.btn btn_secondary back btn_medium cart_cancel_link')
        await expect(modalMessage).toHaveText('Coloque seus dados para finalizar a compra :)')
    }


    async toastMessage(target: string) {
        const toastMessage = this.page.locator('Thank you for your order:)')
        await expect(toastMessage).toHaveText(target)
    }
}
