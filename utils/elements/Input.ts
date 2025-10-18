import Element from './Element';

export default class Input extends Element {
    async setValue(value: string) {
        const element = await this.getElement();
        await element.waitForDisplayed();
        await element.setValue(value);
    }

    async clearValue() {
        const element = await this.getElement();
        await element.clearValue();
    }

    async getValue() {
        const element = await this.getElement();
        return element.getValue();
    }
}
