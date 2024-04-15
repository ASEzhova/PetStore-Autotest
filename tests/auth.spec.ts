import { test, expect } from '@playwright/test';

test.only('JPetStore', async ({page}) => {

  await page.goto("https://jpetstore.aspectran.com/catalog/");

  const signInButton = page.getByText('Sign In');
  await signInButton.click();

  
  const usernameField = page.locator('[name="username"]');
  const passwordField = page.locator('[name="password"]');
  const loginButton = page.locator('text="Login"');
  await usernameField.fill('PetStoreAutotest');
  await passwordField.fill('petpassword1405');
  await loginButton.click();

  const logoButton = page.locator('[src="/images/logo-topbar.gif"]');
  await logoButton.click();

  const imgcartButton = page.locator('[name="img_cart"]');
  await imgcartButton.click();
  
  const MyOrdersButton = page.getByText('My Orders');
  await MyOrdersButton.click();

  const MyAccountButton = page.getByText('My Account');
  await MyAccountButton.click();

  await (page.locator('[href="/help.html"]')).click();

  await page.goBack();

  await (page.locator('[href="/categories/FISH"]')).click();
  await (page.locator('[href="/categories/DOGS"]')).click();  
  await (page.locator('[href="/categories/REPTILES"]')).click();
  await (page.locator('[href="/categories/CATS"]')).click();
  await (page.locator('[href="/categories/BIRDS"]')).click();

  const signOutButton = page.getByText('Sign Out');
  await signOutButton.click(); 

 
   
  
  
  
  
  
 
})