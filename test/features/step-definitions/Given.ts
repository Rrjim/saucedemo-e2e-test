import { Given } from "@wdio/cucumber-framework";
import { ENV } from "../../../config/env";
import CustomWorld from "./world";

Given(
  /^the user logs in with username "([^"]+)" and password "([^"]+)"$/,
  async function (this: CustomWorld, usernameKey: string, passwordKey: string) {
    // Resolve values from ENV or use literal strings
      console.log("Test ID:", this.testId);

    const actualUsername = ENV[usernameKey as keyof typeof ENV] || usernameKey;
    const actualPassword = ENV[passwordKey as keyof typeof ENV] || passwordKey;

    await this.loginPage.login(actualUsername, actualPassword);
  }
);
