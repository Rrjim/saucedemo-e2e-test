import BasePage from "../Base/BasePage";
import { CommonPageSelectors } from "./CommonPageSelectors";
import { expect} from "chai";

export default class CommonPage extends BasePage {

        /**
     * Logs out the current user
     */
    async logout(): Promise<void> {
        const burgerMenu = await CommonPageSelectors.burgerMenu();
        await burgerMenu.waitForClickable({ timeout: 5000 });
        await burgerMenu.click();

        const logoutLink = await CommonPageSelectors.logout();
        await logoutLink.waitForClickable({ timeout: 5000 });
        await logoutLink.click();

    }

    /**
     * Optionally reset app state without logging out
     */
    async resetAppState(): Promise<void> {
        const burgerMenu = await CommonPageSelectors.burgerMenu();
        await burgerMenu.waitForClickable({ timeout: 5000 });
        await burgerMenu.click();

        const resetLink = await CommonPageSelectors.restAppState();
        await resetLink.waitForClickable({ timeout: 5000 });
        await resetLink.click();

        await browser.refresh();
        await burgerMenu.waitForDisplayed({ timeout: 5000 });
    }

    async verifyPageSubheader(expectedHeader: string) {
        const subHeaderElem = await CommonPageSelectors.pageSubHeader();
        await subHeaderElem.waitForExist({ timeout: 5000 });

        const actualSubHeaderText = await subHeaderElem.getText(); // <-- add await
        console.log(actualSubHeaderText);

        expect(actualSubHeaderText).to.equal(expectedHeader);
    }

     async verifyCartItemCount(expectedCount: number): Promise<void> {
            const badge = await CommonPageSelectors.cartAddedItems();
            let actualCount = 0;
    
            if (await badge.isExisting()) {
                actualCount = parseInt(await badge.getText());
            }
    
            expect(actualCount, `Expected ${expectedCount} items in the cart, but found ${actualCount}`).to.equal(Number(expectedCount));
    }
    
        async clickOnCartButton(){
            const cartItemLogo = await CommonPageSelectors.cartAddedItems();
            await cartItemLogo.click();
        }
}
