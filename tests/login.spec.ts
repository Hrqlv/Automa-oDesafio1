import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';



let loginPage: LoginPage

test.beforeEach(async ({page})=> {
  loginPage = new LoginPage(page)
})



//vai para a próxima pagina
test('deve logar com sucesso', async ({ page }) => {
  
  await loginPage.go()
  await loginPage.sigIn('standard_user', 'secret_sauce')
  await loginPage.userLoggedIn()
})



test('login com senha incorreta', async ({page})=>{
//vai para a pagina de login

  await loginPage.go()
  await loginPage.sigIn('performance_glitch_user', '123')
  await loginPage.toastMessage('Ops! Credenciais invalidas :(')

})