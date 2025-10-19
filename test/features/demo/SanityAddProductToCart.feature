@SANITY @PRODUCT @ADDITEM
Feature: Add item to cart

    Background:
        Given the user is landed on the "LOGIN" page

    Scenario: Complete an order with two items
        When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        And the user verifies page subheader should be equal to "Products"
        When the user adds the following items to the cart:
            | item name            |
            | Sauce Labs Backpack |
        Then the cart logo indicator should be equal to 1
        And there should be 1 button with text "Remove"
        When the user clicks on the cart button
        And the user is landed on the "CART" page
        Then all items in the cart should match the ones added from products page

        Examples:
            | username                |
            | STANDARD_USER           |
            | PERFORMANCE_GLITCH_USER |