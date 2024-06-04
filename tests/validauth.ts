import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/signinPage';

let signInPage: SignInPage

signInPage = new SignInPage(page)

