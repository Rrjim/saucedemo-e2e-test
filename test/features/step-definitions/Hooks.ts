// hooks.ts
import { Before } from '@wdio/cucumber-framework';
import PageFactory from '../../../utils/factories/PageObjectFactory';
import LoginPage from '../../page-objects/Login/LoginPage';

const pageFactory = new PageFactory();
const loginPage = pageFactory.get(LoginPage);

Before(async () => {
    /** ensure that the browser will be launched */
    await browser.setTimeout({
        implicit: 15000,
        pageLoad: 10000
    })
    /** open browser using the base url */
    await loginPage.open("");
    /** maximize the window to avoid responsiveness issues */
    await browser.maximizeWindow();
});
