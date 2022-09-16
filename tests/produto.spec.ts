import { test, expect } from '@playwright/test';
import { ProdutoPage  } from '../pages/produto-page';


let produtoPage: ProdutoPage

test.beforeEach(async ({page})=> {
  produtoPage = new ProdutoPage(page)
})


//colocando dados 
test('dados pra finalizaçao do produto', async ({ page }) => {
  
  
  await produtoPage.go();
  await produtoPage.Checkout('','','');
  await produtoPage.Checkout();
})


test('dados da finalizaçao', async ({page})=>{
  //continuaçao dos dados para a finalização da compra
  
    await produtoPage.go();
    await produtoPage.Checkout('','','');
    await produtoPage.toastMessage('Credencias válido!');
  
  })


test('finalizaçao da compra', async ({ page })=>{
//finalização

  await produtoPage.go();
  await produtoPage.Checkout('btn btn_action btn_medium cart_button');
  await produtoPage.toastMessage('Thank you for your order! :)');

})

