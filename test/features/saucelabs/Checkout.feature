@UI @SNT @CHECKOUT
Feature: Remove product from cart

  Background:
    Given the user is landed on the "LOGIN" page

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
    And the user clicks on the checkout button
    And the user is landed on the "INFORMATION" page
    And the user verifies page subheader should be equal to "Checkout: Your Information"
    And the user fills in the checkout form with:
      | first name | last name | postal code |
      | standard   | user      | 12345       |
    And the user clicks on the continue button
    And the checkout information for should be sent succesffully
    And the checkout information is not empty
    And the user resets the application state

    Examples:
      | TestID     | username                | product           |
      | TC_SNT_001 | STANDARD_USER           | Sauce Labs Onesie |
      | TC_SNT_012 | PROBLEM_USER            | Sauce Labs Onesie |
      | TC_SNT_017 | ERROR_USER              | Sauce Labs Onesie |
      | TC_SNT_023 | VISUAL_USER             | Sauce Labs Onesie |
      | TC_SNT_029 | PERFORMANCE_GLITCH_USER | Sauce Labs Onesie |

