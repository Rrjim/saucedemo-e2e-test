// utils/Dropdown.ts
import Element from './Element';

export default class Dropdown extends Element {
    async selectByVisibleText(text: string) {
        const element = await this.getElement();
        await element.selectByVisibleText(text);
    }

    async selectByIndex(index: number) {
        const element = await this.getElement();
        await element.selectByIndex(index);
    }

    async selectByAttribute(attribute: string, value: string) {
        const element = await this.getElement();
        await element.selectByAttribute(attribute, value);
    }

    async getSelectedOptionText() {
        const element = await this.getElement();
        const selected = await element.$('option:checked');
        return selected.getText();
    }

    async getAllOptions(): Promise<string[]> {
        const element = await this.getElement();
        const options = await element.$$('option'); 

        const texts: string[] = [];
        for (const option of options) {
            texts.push(await option.getText());
        }

        return texts;
}


}
