@SANITY @CART
Feature: Add items to cart

  Background:
    Given the user is landed on the "LOGIN" page

  Scenario Outline: Verify adding individual products to the cart for different users
    When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    And the user is landed on the "PRODUCTS" page
    And the user verifies page subheader should be equal to "Products"
    When the user adds the following items to the cart:
      | item name               |
      | <product>               |
    Then the cart logo indicator should be equal to 1
    And there should be 1 button with text "Remove"
    When the user clicks on the cart button
    And the user is landed on the "CART" page
    Then all items in the cart should match the ones added from products page
    And the user resets the application state


    Examples:
      | username                | product                          |
      | STANDARD_USER           | Sauce Labs Backpack              |
      | STANDARD_USER           | Sauce Labs Bike Light            |
      | STANDARD_USER           | Sauce Labs Fleece Jacket         |
      | STANDARD_USER           | Sauce Labs Bolt T-Shirt          |
      | STANDARD_USER           | Sauce Labs Onesie                |
      | STANDARD_USER           | Test.allTheThings() T-Shirt (Red)|
      | PROBLEM_USER            | Sauce Labs Backpack              |
      | PROBLEM_USER            | Sauce Labs Bike Light            |
      | PROBLEM_USER            | Sauce Labs Fleece Jacket         |
      | PROBLEM_USER            | Sauce Labs Bolt T-Shirt          |
      | PROBLEM_USER            | Sauce Labs Onesie                |
      | PROBLEM_USER            | Test.allTheThings() T-Shirt (Red)|
      | ERROR_USER              | Sauce Labs Backpack              |
      | ERROR_USER              | Sauce Labs Bike Light            |
      | ERROR_USER              | Sauce Labs Fleece Jacket         |
      | ERROR_USER              | Sauce Labs Bolt T-Shirt          |
      | ERROR_USER              | Sauce Labs Onesie                |
      | ERROR_USER              | Test.allTheThings() T-Shirt (Red)|
      | VISUAL_USER             | Sauce Labs Backpack              |
      | VISUAL_USER             | Sauce Labs Bike Light            |
      | VISUAL_USER             | Sauce Labs Fleece Jacket         |
      | VISUAL_USER             | Sauce Labs Bolt T-Shirt          |
      | VISUAL_USER             | Sauce Labs Onesie                |
      | VISUAL_USER             | Test.allTheThings() T-Shirt (Red)|
      | PERFORMANCE_GLITCH_USER | Sauce Labs Backpack              |
      | PERFORMANCE_GLITCH_USER | Sauce Labs Bike Light            |
      | PERFORMANCE_GLITCH_USER | Sauce Labs Fleece Jacket         |
      | PERFORMANCE_GLITCH_USER | Sauce Labs Bolt T-Shirt          |
      | PERFORMANCE_GLITCH_USER | Sauce Labs Onesie                |
      | PERFORMANCE_GLITCH_USER | Test.allTheThings() T-Shirt (Red)|
