import BasePage from '../../test/page-objects/Base/BasePage';

type PageClass<T extends BasePage> = new () => T;

export default class PageFactory {
    private instances: Map<string, BasePage> = new Map();

    get<T extends BasePage>(pageClass: PageClass<T>): T {
        const key = pageClass.name;

        if (!this.instances.has(key)) {
            this.instances.set(key, new pageClass());
        }

        return this.instances.get(key) as T;
    }
}
