import { Before } from "@wdio/cucumber-framework";
import PageFactory from "../../../utils/factories/PageObjectFactory";
import LoginPage from "../../page-objects/Login/LoginPage";

const pageFactory = new PageFactory();
const loginPage = pageFactory.get(LoginPage);

Before(async function (world) {
    if (world.pickle) {
        this.testId = world.pickle.name.split(/:/)[0];
        console.log(`>> Test Case ${this.testId} is starting...`);
    }

    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await loginPage.open("");
    await browser.maximizeWindow();
});
