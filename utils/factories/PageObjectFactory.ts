import BasePage from "../../test/page-objects/Base/BasePage";

type PageClass<T extends BasePage> = new () => T;

export default class PageFactory {
  private instances: Map<string, BasePage> = new Map();

  /** Lazily instantiate and return a singleton page for the scenario */
  public get<T extends BasePage>(pageClass: PageClass<T>): T {
    const key = pageClass.name;

    if (!this.instances.has(key)) {
      this.instances.set(key, new pageClass());
    }

    return this.instances.get(key) as T;
  }

  /** Clear all cached pages (to reset between scenarios) */
  public clear(): void {
    this.instances.clear();
  }
}
