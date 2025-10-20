import { Given } from "@wdio/cucumber-framework";
import { ENV } from "../../../config/env";
import CustomWorld from "./world";
import logger from "../../helper/logger";

Given(
  /^the user logs in with username "([^"]+)" and password "([^"]+)"$/,
  async function (this: CustomWorld, usernameKey: string, passwordKey: string) {

    const actualUsername = ENV[usernameKey as keyof typeof ENV] || usernameKey;
    const actualPassword = ENV[passwordKey as keyof typeof ENV] || passwordKey;

    await this.loginPage.login(actualUsername, actualPassword);
        logger.info(`>> ${this.testId}: login successfully`)
    
  }
);
