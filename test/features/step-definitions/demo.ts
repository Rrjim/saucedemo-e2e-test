import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from 'chai';

Given(/^Google page is opened$/, async() => {
    console.log(`Before opening browser...`)
    await browser.url("https://www.google.com")
    await browser.pause(7000)
    console.log(`After opening browser...`)
})

When(/Search with (.*)$/, async(searchItem) => {
    console.log(`>> searchItem: $s{searchItem}`)
    let element = await $(`[name=q]`)
    await element.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on first search result$/, async() => {
    // identify element by tag
    let element = await $(`<h3>`)
    element.click();
})

Then(/^URL should match (.*)$/, async(expectedURL) => {
    console.log(`>> expectedURL: ${expectedURL}`)
    let url = await browser.getUrl();
    expect(url).to.equal(expectedURL)

})

Given(/^A web page is opened$/, async() => {
    await browser.url("");
    await browser.setTimeout(
        {
            implicit: 15000,
            pageLoad: 10000
        }
    );
    await browser.maximizeWindow();
})

When(/^Perform web interactions$/, async function() {
    /**
     * 1. Input box
     * Actions:
     * 1. type into input box
     * 2. clear the field and type or just addvalue
     * 3. click and type
     * slow typing
     */

    let num = 12345;
    let strNum = num.toString();

    let element = await $(`[type=number]`)
    await element.setValue(strNum)
    element.scrollIntoView()

    for(let i = 0; i < SVGComponentTransferFunctionElement.length; i++) {
        let charStr = strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }
})