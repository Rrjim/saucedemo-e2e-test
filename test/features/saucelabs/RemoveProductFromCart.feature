@UI @SNT @CART
Feature: Remove product from cart

  Background:
    Given the user is landed on the "LOGIN" page

  @RMV
  Scenario Outline: <TestID>: Verify adding individual products to the cart for different users
    And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    And the user is landed on the "PRODUCTS" page
    And the user verifies page subheader should be equal to "Products"
    When the user adds the following items to the cart:
      | item name |
      | <product> |
    Then the cart logo indicator should be equal to 1
    And the user clicks on the cart button
    And there should be 1 button with text "Remove"
    And the user is landed on the "CART" page
    And the user verifies page subheader should be equal to "Your Cart"
    And all items in the cart should have a quantity of 1
    Then the user removes the following item from the cart:
      | item name         |
      | Sauce Labs Onesie |
    And the number of products displayed on the page is: 0
    And the cart logo indicator should be equal to 0
    And the user resets the application state

    Examples:
      | TestID    | username                | product           |
      | SAUCE_165 | STANDARD_USER           | Sauce Labs Onesie |
      | SAUCE_166 | PROBLEM_USER            | Sauce Labs Onesie |
      | SAUCE_167 | ERROR_USER              | Sauce Labs Onesie |
      | SAUCE_168 | VISUAL_USER             | Sauce Labs Onesie |
      | SAUCE_169 | PERFORMANCE_GLITCH_USER | Sauce Labs Onesie |

