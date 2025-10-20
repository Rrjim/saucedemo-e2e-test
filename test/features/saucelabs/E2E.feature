@UI @E2E
Feature: Order products

    Background:
        Given the user is landed on the "LOGIN" page

    Scenario Outline: <TestID>: Complete an order with two items
        And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        And the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        And the number of products displayed on the page is: 6
        And validate all products have valid price
        When the user adds the following items to the cart:
            | item name                         |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |
        And the cart logo indicator should be equal to 6
        And the user clicks on the cart button
        And the user is landed on the "CART" page
        And the user verifies page subheader should be equal to "Your Cart"
        And all items in the cart should have a quantity of 1
        And all items in the cart should match the ones added from products page
        And the user clicks on the checkout button
        And the user is landed on the "INFORMATION" page
        And the user verifies page subheader should be equal to "Checkout: Your Information"
        And the user fills in the checkout form with:
            | first name | last name | postal code |
            | standard   | user      | 12345       |
        And the user clicks on the continue button
        And the user is landed on the "OVERVIEW" page
        And the user verifies page subheader should be equal to "Checkout: Overview"
        And the payment and shipping information should be:
            | field        | expectedValue               |
            | paymentInfo  | SauceCard #31337            |
            | shippingInfo | Free Pony Express Delivery! |
        And the item total and tax should match the cart
        Then the user clicks on the finish button
        And the user is landed on the "COMPLETION" page
        And the user verifies page subheader should be equal to "Checkout: Complete!"
        And the user verifies the checkout completion info:
            | completeHeader      | Thank you for your order!                                                               |
            | completeDescription | Your order has been dispatched, and will arrive just as fast as the pony can get there! |
        And the cart logo indicator should be equal to 0
        And the order completion image should be correct
        And the user clicks on the back to products button
        And the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        And there should be 6 buttons with text "Add to cart"
        And the user resets the application state
        And the user logs out
        And the user is landed on the "LOGIN" page

        Examples:
            | TestID    | username                |
            | SAUCE_175 | STANDARD_USER           |
            | SAUCE_176 | PERFORMANCE_GLITCH_USER |

    Scenario Outline: <TestID>: Cancel an order
        And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        And the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        Then the number of products displayed on the page is: 6
        And validate all products have valid price
        When the user adds the following items to the cart:
            | item name                         |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |
        And the cart logo indicator should be equal to 6
        And the user clicks on the cart button
        And the user is landed on the "CART" page
        And the user verifies page subheader should be equal to "Your Cart"
        And all items in the cart should have a quantity of 1
        And all items in the cart should match the ones added from products page
        And the user clicks on the checkout button
        And the user is landed on the "INFORMATION" page
        And the user verifies page subheader should be equal to "Checkout: Your Information"
        And the user fills in the checkout form with:
            | first name | last name | postal code |
            | standard   | user      | 12345       |
        And the user clicks on the continue button
        And the user is landed on the "OVERVIEW" page
        And the user verifies page subheader should be equal to "Checkout: Overview"
        And the payment and shipping information should be:
            | field        | expectedValue               |
            | paymentInfo  | SauceCard #31337            |
            | shippingInfo | Free Pony Express Delivery! |
        And the item total and tax should match the cart
        Then the user clicks on the cancel button from the checkout overview page
        And the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        And the cart logo indicator should be equal to 6
        And there should be 6 buttons with text "Remove"
        And the user resets the application state
        And the user logs out
        And the user is landed on the "LOGIN" page

        Examples:
            | TestID    | username                |
            | SAUCE_177 | STANDARD_USER           |
            | SAUCE_178 | PERFORMANCE_GLITCH_USER |

    Scenario Outline: <TestID>: The total amount is updated when removing an item from the order
        And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        And the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        And the number of products displayed on the page is: 6
        And validate all products have valid price
        When the user adds the following items to the cart:
            | item name                         |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |
        And the cart logo indicator should be equal to 6
        And the user clicks on the cart button
        And the user is landed on the "CART" page
        And the user verifies page subheader should be equal to "Your Cart"
        And all items in the cart should have a quantity of 1
        And all items in the cart should match the ones added from products page
        Then the user removes the following item from the cart:
            | item name           |
            | Sauce Labs Backpack |
        And the cart logo indicator should be equal to 5
        And the number of products displayed on the page is: 5
        And the user clicks on the checkout button
        And the user is landed on the "INFORMATION" page
        And the user verifies page subheader should be equal to "Checkout: Your Information"
        And the user fills in the checkout form with:
            | first name | last name | postal code |
            | standard   | user      | 12345       |
        And the user clicks on the continue button
        And the user is landed on the "OVERVIEW" page
        And the user verifies page subheader should be equal to "Checkout: Overview"
        Then the payment and shipping information should be:
            | field        | expectedValue               |
            | paymentInfo  | SauceCard #31337            |
            | shippingInfo | Free Pony Express Delivery! |
        And the item total and tax should match the cart
        And the user clicks on the finish button
        And the user is landed on the "COMPLETION" page
        And the user verifies page subheader should be equal to "Checkout: Complete!"
        And the user verifies the checkout completion info:
            | completeHeader      | Thank you for your order!                                                               |
            | completeDescription | Your order has been dispatched, and will arrive just as fast as the pony can get there! |
        And the cart logo indicator should be equal to 0
        And the order completion image should be correct
        And the user clicks on the back to products button
        And the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        And there should be 6 buttons with text "Add to cart"
        And the user resets the application state
        And the user logs out
        And the user is landed on the "LOGIN" page

        Examples:
            | TestID    | username                |
            | SAUCE_179 | STANDARD_USER           |
            | SAUCE_180 | PERFORMANCE_GLITCH_USER |


# PENDING Good to have
# 1. Glitch user fast scenarios failures like back to products, reset state, login
# 2. Clicking on product items => check images, prices etc