import { $ } from '@wdio/globals';

export default class Element {
    private selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    protected async getElement() {
        return $(this.selector);
    }

    async click() {
        const element = await this.getElement();
        await element.waitForDisplayed();
        await element.click();
    }

    async getText() {
        const element = await this.getElement();
        await element.waitForDisplayed();
        return element.getText();
    }

    async isDisplayed() {
        const element = await this.getElement();
        return element.isDisplayed();
    }

    async waitForExist(timeout = 5000) {
        const element = await this.getElement();
        await element.waitForExist({ timeout });
    }

    async waitForDisplayed(timeout = 5000) {
    const element = await this.getElement();
    await element.waitForDisplayed({ timeout });
}


}
