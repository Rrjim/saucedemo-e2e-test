@UI @SNT @CART
Feature: Add items to cart

  Background:
    Given the user is landed on the "LOGIN" page

  Scenario Outline: <TestID>: Verify adding individual products to the cart for different users
    And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    And the user is landed on the "PRODUCTS" page
    And the user verifies page subheader should be equal to "Products"
    When the user adds the following items to the cart:
      | item name               |
      | <product>               |
    Then the cart logo indicator should be equal to 1
    And there should be 1 button with text "Remove"
    And the user resets the application state

     Examples:
      | TestID       | username                | product                          |
      | TC_SNT_001   | STANDARD_USER           | Sauce Labs Backpack              |
      | TC_SNT_002   | STANDARD_USER           | Sauce Labs Bike Light            |
      | TC_SNT_003   | STANDARD_USER           | Sauce Labs Fleece Jacket         |
      | TC_SNT_004   | STANDARD_USER           | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_005   | STANDARD_USER           | Sauce Labs Onesie                |
      | TC_SNT_006   | STANDARD_USER           | Test.allTheThings() T-Shirt (Red)|
      | TC_SNT_007   | PROBLEM_USER            | Sauce Labs Backpack              |
      | TC_SNT_008   | PROBLEM_USER            | Sauce Labs Bike Light            |
      | TC_SNT_009   | PROBLEM_USER            | Sauce Labs Fleece Jacket         |
      | TC_SNT_010   | PROBLEM_USER            | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_011   | PROBLEM_USER            | Sauce Labs Onesie                |
      | TC_SNT_012   | PROBLEM_USER            | Test.allTheThings() T-Shirt (Red)|
      | TC_SNT_013   | ERROR_USER              | Sauce Labs Backpack              |
      | TC_SNT_014   | ERROR_USER              | Sauce Labs Bike Light            |
      | TC_SNT_015   | ERROR_USER              | Sauce Labs Fleece Jacket         |
      | TC_SNT_016   | ERROR_USER              | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_017   | ERROR_USER              | Sauce Labs Onesie                |
      | TC_SNT_018   | ERROR_USER              | Test.allTheThings() T-Shirt (Red)|
      | TC_SNT_019   | VISUAL_USER             | Sauce Labs Backpack              |
      | TC_SNT_020   | VISUAL_USER             | Sauce Labs Bike Light            |
      | TC_SNT_021   | VISUAL_USER             | Sauce Labs Fleece Jacket         |
      | TC_SNT_022   | VISUAL_USER             | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_023   | VISUAL_USER             | Sauce Labs Onesie                |
      | TC_SNT_024   | VISUAL_USER             | Test.allTheThings() T-Shirt (Red)|
      | TC_SNT_025   | PERFORMANCE_GLITCH_USER | Sauce Labs Backpack              |
      | TC_SNT_026   | PERFORMANCE_GLITCH_USER | Sauce Labs Bike Light            |
      | TC_SNT_027   | PERFORMANCE_GLITCH_USER | Sauce Labs Fleece Jacket         |
      | TC_SNT_028   | PERFORMANCE_GLITCH_USER | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_029   | PERFORMANCE_GLITCH_USER | Sauce Labs Onesie                |
      | TC_SNT_030   | PERFORMANCE_GLITCH_USER | Test.allTheThings() T-Shirt (Red)|


Scenario Outline: <TestID>: Verify products having the same amount between products and cart pages
    And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    And the user is landed on the "PRODUCTS" page
    And the user verifies page subheader should be equal to "Products"
    And the user resets the application state
    When the user adds the following items to the cart:
      | item name               |
      | <product>               |
    Then the cart logo indicator should be equal to 1
    And the user clicks on the cart button
    And the user is landed on the "CART" page
    And all items in the cart should match the ones added from products page

        Examples:
      | TestID       | username                | product                          |
      | TC_SNT_056   | STANDARD_USER           | Sauce Labs Backpack              |
      | TC_SNT_057   | STANDARD_USER           | Sauce Labs Bike Light            |
      | TC_SNT_058   | STANDARD_USER           | Sauce Labs Fleece Jacket         |
      | TC_SNT_059   | STANDARD_USER           | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_060   | STANDARD_USER           | Sauce Labs Onesie                |
      | TC_SNT_061   | STANDARD_USER           | Test.allTheThings() T-Shirt (Red)|
      | TC_SNT_062   | PROBLEM_USER            | Sauce Labs Backpack              |
      | TC_SNT_063   | PROBLEM_USER            | Sauce Labs Bike Light            |
      | TC_SNT_064   | PROBLEM_USER            | Sauce Labs Fleece Jacket         |
      | TC_SNT_065   | PROBLEM_USER            | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_066   | PROBLEM_USER            | Sauce Labs Onesie                |
      | TC_SNT_067   | PROBLEM_USER            | Test.allTheThings() T-Shirt (Red)|
      | TC_SNT_068   | ERROR_USER              | Sauce Labs Backpack              |
      | TC_SNT_069   | ERROR_USER              | Sauce Labs Bike Light            |
      | TC_SNT_070   | ERROR_USER              | Sauce Labs Fleece Jacket         |
      | TC_SNT_071   | ERROR_USER              | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_072   | ERROR_USER              | Sauce Labs Onesie                |
      | TC_SNT_073   | ERROR_USER              | Test.allTheThings() T-Shirt (Red)|
      | TC_SNT_074   | VISUAL_USER             | Sauce Labs Backpack              |
      | TC_SNT_075   | VISUAL_USER             | Sauce Labs Bike Light            |
      | TC_SNT_076   | VISUAL_USER             | Sauce Labs Fleece Jacket         |
      | TC_SNT_077   | VISUAL_USER             | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_078   | VISUAL_USER             | Sauce Labs Onesie                |
      | TC_SNT_079   | VISUAL_USER             | Test.allTheThings() T-Shirt (Red)|
      | TC_SNT_080   | PERFORMANCE_GLITCH_USER | Sauce Labs Backpack              |
      | TC_SNT_081   | PERFORMANCE_GLITCH_USER | Sauce Labs Bike Light            |
      | TC_SNT_082   | PERFORMANCE_GLITCH_USER | Sauce Labs Fleece Jacket         |
      | TC_SNT_083   | PERFORMANCE_GLITCH_USER | Sauce Labs Bolt T-Shirt          |
      | TC_SNT_084   | PERFORMANCE_GLITCH_USER | Sauce Labs Onesie                |
      | TC_SNT_085   | PERFORMANCE_GLITCH_USER | Test.allTheThings() T-Shirt (Red)|
