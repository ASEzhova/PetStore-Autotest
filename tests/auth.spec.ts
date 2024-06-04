import { test, expect } from '@playwright/test';

test('JPetStore', async ({page}) => {

  await page.goto("https://jpetstore.aspectran.com/catalog/");

  const signInButton = page.getByText('Sign In');
  await signInButton.click();

  
  const usernameField = page.locator('[name="username"]');
  await expect(usernameField).toBeVisible();
  const passwordField = page.locator('[name="password"]');
  await expect(passwordField).toBeVisible();
  const loginButton = page.locator('text="Login"');
  await expect(loginButton).toBeVisible();
  await usernameField.fill('PetStoreAutotest');
  await passwordField.fill('petpassword1405');
  await loginButton.click();
  await expect.soft(signInButton).toBeHidden();
  await expect.soft(loginButton).toBeHidden();

  const logoButton = page.locator('[src="/images/logo-topbar.gif"]');  
  await expect(logoButton).toBeVisible();
  const imgcartButton = page.locator('[name="img_cart"]');
  await expect(imgcartButton).toBeVisible();
  const MyOrdersButton = page.locator('text="My Orders"');
  await expect(MyOrdersButton).toBeVisible();
  await expect(MyOrdersButton).toHaveCSS('color', 'rgb(234, 172, 0)');
  const MyAccountButton = page.locator('text="My Account"');
  await expect(MyAccountButton).toBeVisible();
  await expect(MyAccountButton).toHaveCSS('color', 'rgb(234, 172, 0)');
  const signOutButton = page.locator('text="Sign Out"');
  await expect(signOutButton).toBeVisible();
  await expect(signOutButton).toHaveCSS('color', 'rgb(234, 172, 0)');
  const questionButton = page.locator('[href="/help.html"]');
  await expect(questionButton).toBeVisible();


  const fish = await page.locator('[href="/categories/FISH"]').nth(0);
  await expect(fish).toBeVisible();
  const dogs = await page.locator('[href="/categories/DOGS"]').nth(0); 
  await expect(dogs).toBeVisible();
  const reptiles = await page.locator('[href="/categories/REPTILES"]').nth(0);
  await expect(reptiles).toBeVisible();
  const cats = await page.locator('[href="/categories/CATS"]').nth(0)
  await expect(cats).toBeVisible();
  await expect(cats).toContainText('Cats');
  await expect(cats).toHaveCSS('font-weight','400');
  const birds = await page.locator('[href="/categories/BIRDS"]').nth(0);
  await expect(birds).toBeVisible();

  
  

 
   
  
  
  
  
  
 
})