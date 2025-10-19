import { LoginPageSelectors } from './LoginPageSelectors';
import BasePage from '../Base/BasePage';
import { expect } from 'chai';
import { ENV } from '../../../config/env';

export default class LoginPage extends BasePage {
    header = LoginPageSelectors.headerSelector;
    loginButton = LoginPageSelectors.loginButtonSelector;

    username = LoginPageSelectors.usernameSelector;
    password = LoginPageSelectors.passwordSelector;

    // Perform login only
    async login(username: string, password: string) {
        await this.header.waitForDisplayed();
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
        await browser.pause(1000); // optional, can replace with waitUntil
    }

    async getLoginErrorMessage(): Promise<string> {
        const errorElem = await LoginPageSelectors.errorLoginUserPopUp();
        await errorElem.waitForDisplayed({ timeout: 5000 });
        return await errorElem.getText();
    }

    async expectLoginErrorMessageForUser(username: string): Promise<void> {
        const errorMessages: Record<string, string> = {
            LOCKED_OUT_USER: 'Epic sadface: Sorry, this user has been locked out.',
            OTHER_USER: 'Epic sadface: Username and password do not match any user in this service',
        };

        const expectedMessage = errorMessages[username];
        if (!expectedMessage) {
            throw new Error(`No expected error message defined for user "${username}"`);
        }

        const actualMessage = await this.getLoginErrorMessage();
        expect(actualMessage, `Login error message mismatch for "${username}"`).to.equal(expectedMessage);
    }

}