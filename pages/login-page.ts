import { Page, expect } from '@playwright/test';


export class LoginPage {
  readonly page: Page

  constructor(page: Page) {
      this.page = page
  }


async go() {


    await this.page.goto('https://www.saucedemo.com');
    const title = this.page.locator('.submit-button btn_action')
    await expect(title).toHaveText('Login')

}


    async sigIn(user: string, password: string) {
        await this.page.fill('input[placeholder$=usuario]','Username')
        await this.page.fill('input[placeholder^=senha]','Password')
        await this.page.click('button >> text=Entrar')
    }


    
    async userLoggedIn() {
    const modalMessage = this.page.locator('.input_error form_input error')
    await expect(modalMessage).toHaveText('Sua credenciais são validas :)')
    }



    async toastMessage(target: string) {
        const toastMessage = this.page.locator('div[role=status]')
        await expect(toastMessage).toHaveText(target)
    }
}