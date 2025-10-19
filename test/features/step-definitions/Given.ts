import { Given } from '@wdio/cucumber-framework';
import PageFactory from '../../../utils/factories/PageObjectFactory';
import LoginPage from '../../page-objects/Login/LoginPage';
import { ENV } from '../../../config/env';

const pageFactory = new PageFactory();
const loginPage = pageFactory.get(LoginPage); 

Given(
  /^the user logs in with username "([^"]+)" and password "([^"]+)"$/,
  async (usernameKey: string, passwordKey: string) => {
    const actualUsername = ENV[usernameKey as keyof typeof ENV] || usernameKey;
    const actualPassword = ENV[passwordKey as keyof typeof ENV] || passwordKey;

    await loginPage.login(
      actualUsername,
      actualPassword
    );
  }
);
