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