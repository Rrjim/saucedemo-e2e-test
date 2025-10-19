Feature: Inventory

    Background:
        Given the user is landed on the "LOGIN" page

    @UI @E2E
    Scenario Outline: <TestID>: Complete an order with two items
        When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
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
        Then the cart logo indicator should be equal to 6
        When the user clicks on the cart button
        And the user is landed on the "CART" page
        And the user verifies page subheader should be equal to "Your Cart"
        Then all items in the cart should have a quantity of 1
        Then all items in the cart should match the ones added from products page
        Then the user clicks on the checkout button
        And the user is landed on the "INFORMATION" page
        And the user verifies page subheader should be equal to "Checkout: Your Information"
        When the user fills in the checkout form with:
            | first name | last name | postal code |
            | standard   | user      | 12345       |
        When the user clicks on the continue button
        And the user is landed on the "OVERVIEW" page
        And the user verifies page subheader should be equal to "Checkout: Overview"
        Then the payment and shipping information should be:
            | field        | expectedValue               |
            | paymentInfo  | SauceCard #31337            |
            | shippingInfo | Free Pony Express Delivery! |
        Then the item total and tax should match the cart
        When the user clicks on the finish button
        And the user is landed on the "COMPLETION" page
        And the user verifies page subheader should be equal to "Checkout: Complete!"
        Then the user verifies the checkout completion info:
            | completeHeader      | Thank you for your order!                                                               |
            | completeDescription | Your order has been dispatched, and will arrive just as fast as the pony can get there! |
        Then the cart logo indicator should be equal to 0
        Then the order completion image should be correct
        When the user clicks on the back to products button
        When the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        And there should be 6 buttons with text "Add to cart"
        And the user logs out
        And the user is landed on the "LOGIN" page

        Examples:
            | TestID     | username                |
            | TC_E2E_001 | STANDARD_USER           |
            | TC_E2E_002 | PERFORMANCE_GLITCH_USER |

    @UI @E2E
    Scenario Outline: <TestID>: Cancel an order
        When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
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
        Then the cart logo indicator should be equal to 6
        When the user clicks on the cart button
        And the user is landed on the "CART" page
        And the user verifies page subheader should be equal to "Your Cart"
        Then all items in the cart should have a quantity of 1
        Then all items in the cart should match the ones added from products page
        Then the user clicks on the checkout button
        And the user is landed on the "INFORMATION" page
        And the user verifies page subheader should be equal to "Checkout: Your Information"
        When the user fills in the checkout form with:
            | first name | last name | postal code |
            | standard   | user      | 12345       |
        When the user clicks on the continue button
        And the user is landed on the "OVERVIEW" page
        And the user verifies page subheader should be equal to "Checkout: Overview"
        Then the payment and shipping information should be:
            | field        | expectedValue               |
            | paymentInfo  | SauceCard #31337            |
            | shippingInfo | Free Pony Express Delivery! |
        Then the item total and tax should match the cart
        When the user clicks on the cancel button from the checkout overview page
        When the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        Then the cart logo indicator should be equal to 6
        And there should be 6 buttons with text "Remove"
        And the user logs out
        And the user is landed on the "LOGIN" page

        Examples:
            | TestID     | username                |
            | TC_E2E_003 | STANDARD_USER           |
            | TC_E2E_004 | PERFORMANCE_GLITCH_USER |

    @UI @E2E
    Scenario Outline: <TestID>: The total amount is updated when removing an item from the order
        When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
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
        Then the cart logo indicator should be equal to 6
        When the user clicks on the cart button
        And the user is landed on the "CART" page
        And the user verifies page subheader should be equal to "Your Cart"
        Then all items in the cart should have a quantity of 1
        Then all items in the cart should match the ones added from products page
        When the user removes the following item from the cart:
            | item name           |
            | Sauce Labs Backpack |
        Then the cart logo indicator should be equal to 5
        Then the number of products displayed on the page is: 5
        Then the user clicks on the checkout button
        And the user is landed on the "INFORMATION" page
        And the user verifies page subheader should be equal to "Checkout: Your Information"
        When the user fills in the checkout form with:
            | first name | last name | postal code |
            | standard   | user      | 12345       |
        When the user clicks on the continue button
        And the user is landed on the "OVERVIEW" page
        And the user verifies page subheader should be equal to "Checkout: Overview"
        Then the payment and shipping information should be:
            | field        | expectedValue               |
            | paymentInfo  | SauceCard #31337            |
            | shippingInfo | Free Pony Express Delivery! |
        Then the item total and tax should match the cart
        When the user clicks on the finish button
        And the user is landed on the "COMPLETION" page
        And the user verifies page subheader should be equal to "Checkout: Complete!"
        Then the user verifies the checkout completion info:
            | completeHeader      | Thank you for your order!                                                               |
            | completeDescription | Your order has been dispatched, and will arrive just as fast as the pony can get there! |
        Then the cart logo indicator should be equal to 0
        Then the order completion image should be correct
        When the user clicks on the back to products button
        When the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        And there should be 6 buttons with text "Add to cart"
        And the user logs out
        And the user is landed on the "LOGIN" page

        Examples:
            | TestID     | username                |
            | TC_E2E_005 | STANDARD_USER           |
            | TC_E2E_006 | PERFORMANCE_GLITCH_USER |