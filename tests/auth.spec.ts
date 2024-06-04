import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/signinPage';
import { JPetStorePage } from '../pages/jpetstorePage';
import { CategoriesPage } from '../pages/categoriesPage';
import { MyOrdersPage } from '../pages/myordersPage';

let signInPage: SignInPage
let jpetStorePage: JPetStorePage
let categoriesPage: CategoriesPage
let myOrdersPage: MyOrdersPage
 
test.beforeEach(async({page})=>{
  signInPage = new SignInPage(page)
  jpetStorePage = new JPetStorePage(page)
  categoriesPage = new CategoriesPage(page)
  myOrdersPage = new MyOrdersPage(page)
  await page.goto("https://jpetstore.aspectran.com/catalog/");
})

test.describe('Базовые проверки', async()=>{

 test('JPetStore', async ({page}) => {

  await signInPage.signInButton.click();
  await expect(signInPage.usernameField).toBeVisible();
  await expect(signInPage.passwordField).toBeVisible();
  await expect(signInPage.loginButton).toBeVisible();
  await signInPage.usernameField.fill('PetStoreAutotest');
  await signInPage.passwordField.fill('petpassword1405');
  await signInPage.loginButton.click();
  await expect.soft(signInPage.signInButton).toBeHidden();
  await expect.soft(signInPage.loginButton).toBeHidden();

  await expect(jpetStorePage.logoButton).toBeVisible();
  await expect(jpetStorePage.imgcartButton).toBeVisible();
  await expect(jpetStorePage.MyOrdersButton).toBeVisible();
  await expect(jpetStorePage.MyOrdersButton).toHaveCSS('color', 'rgb(234, 172, 0)');
  await expect(jpetStorePage.MyAccountButton).toBeVisible();
  await expect(jpetStorePage.MyAccountButton).toHaveCSS('color', 'rgb(234, 172, 0)');
  await expect(jpetStorePage.signOutButton).toBeVisible();
  await expect(jpetStorePage.signOutButton).toHaveCSS('color', 'rgb(234, 172, 0)');
  await expect(jpetStorePage.questionButton).toBeVisible();

  await expect(categoriesPage.fish).toBeVisible();
  await expect(categoriesPage.dogs).toBeVisible();
  await expect(categoriesPage.reptiles).toBeVisible();
  await expect(categoriesPage.cats).toBeVisible();
  await expect(categoriesPage.cats).toContainText('Cats');
  await expect(categoriesPage.cats).toHaveCSS('font-weight','400');
  await expect(categoriesPage.birds).toBeVisible();
 
})
})

test.describe('Авторизация с невалидными данными', async()=>{

  test('JPetStore', async ({page}) => {
  
    await signInPage.signInButton.click();
    await expect(signInPage.usernameField).toBeVisible();
    await expect(signInPage.passwordField).toBeVisible();
    await expect(signInPage.loginButton).toBeVisible();
    await signInPage.usernameField.fill('PetStore');
    await signInPage.passwordField.fill('petpassword');
    await signInPage.loginButton.click();
    await expect(signInPage.loginButton).toBeVisible();
    await expect.soft(signInPage.signInButton).toBeVisible();
    await expect.soft(signInPage.panelFailed).toBeVisible();
   
  })
  })

test.describe('Авторизация с валидными данными', async()=>{

 test('JPetStore', async ({page}) => {
    
  await signInPage.signInButton.click();
  await expect(signInPage.usernameField).toBeVisible();
  await expect(signInPage.passwordField).toBeVisible();
  await expect(signInPage.loginButton).toBeVisible();
  await signInPage.usernameField.fill('PetStoreAutotest');
  await signInPage.passwordField.fill('petpassword1405');
  await signInPage.loginButton.click();
  await expect.soft(signInPage.signInButton).toBeHidden();
  await expect.soft(signInPage.loginButton).toBeHidden();
     
    })
    })

test.describe('Нахождение продуктов через поле поиска', async()=>{

 test('JPetStore', async ({page}) => {
      
    await expect(jpetStorePage.productSearch).toBeVisible();
    await jpetStorePage.productSearch.click();
    await jpetStorePage.productSearch.fill('Goldfish');
    await jpetStorePage.productSearch.press('Enter');
    await expect(jpetStorePage.goldfishProduct).toBeVisible();
     
 })
 })

 test.describe('Переход в список заказов и просмотр списка', async()=>{

  test('JPetStore', async ({page}) => {

    await signInPage.signInButton.click();
    await expect(signInPage.usernameField).toBeVisible();
    await expect(signInPage.passwordField).toBeVisible();
    await expect(signInPage.loginButton).toBeVisible();
    await signInPage.usernameField.fill('PetStoreAutotest');
    await signInPage.passwordField.fill('petpassword1405');
    await signInPage.loginButton.click();
    await expect.soft(signInPage.signInButton).toBeHidden();
    await expect.soft(signInPage.loginButton).toBeHidden();

    await expect(jpetStorePage.MyOrdersButton).toBeVisible();
    await jpetStorePage.MyOrdersButton.click();
    
       
    await expect(myOrdersPage.orderidTable).toBeVisible();
    await expect(myOrdersPage.dateTable).toBeVisible();
    await expect(myOrdersPage.totalpriceTable).toBeVisible();
    await expect(myOrdersPage.firstOrder).toBeVisible();
      
  })
  })