import { LoginPageSelectors } from './LoginPageSelectors';
import BasePage from '../Base/BasePage';
import { expect } from 'chai';
import { ENV } from '../../../config/env';

export default class LoginPage extends BasePage {
    header = LoginPageSelectors.headerSelector;
    loginButton = LoginPageSelectors.loginButtonSelector;

    username = LoginPageSelectors.usernameSelector;
    password = LoginPageSelectors.passwordSelector;

    lockedOutMessage = LoginPageSelectors.errorLoginUserPopUp;

    // Perform login
    async login(username: string, password: string) {
        await this.header.waitForDisplayed();
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
        await browser.pause(1000);

    }


        // Login with expected outcome and validate error message if fail
    async loginWithExpectedOutcome(username: string, password: string, expectedOutcome: 'success' | 'fail') {
        await this.login(username, password);

        if (expectedOutcome === 'success') {
            return;
        }

        // Determine expected error message
        let expectedMessage: string;

        if (username === ENV.LOCKED_OUT_USER) {
            expectedMessage = 'Epic sadface: Sorry, this user has been locked out.';
        } else {
            expectedMessage = 'Epic sadface: Username and password do not match any user in this service';
        }

        // Fetch actual error message
        const errorMsg = await LoginPageSelectors.errorLoginUserPopUp().getText();
        console.log(errorMsg);

        expect(errorMsg, `Login failed message for "${username}"`).to.equal(expectedMessage);


        return;
    }


}
