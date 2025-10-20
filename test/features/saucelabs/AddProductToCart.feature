@UI @SNT @CART
Feature: Add items to cart

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
    And there should be 1 button with text "Remove"
    And the user resets the application state

    Examples:
      | TestID    | username                | product                           |
      | SAUCE_105 | STANDARD_USER           | Sauce Labs Backpack               |
      | SAUCE_106 | STANDARD_USER           | Sauce Labs Bike Light             |
      | SAUCE_107 | STANDARD_USER           | Sauce Labs Fleece Jacket          |
      | SAUCE_108 | STANDARD_USER           | Sauce Labs Bolt T-Shirt           |
      | SAUCE_109 | STANDARD_USER           | Sauce Labs Onesie                 |
      | SAUCE_110 | STANDARD_USER           | Test.allTheThings() T-Shirt (Red) |
      | SAUCE_111 | PROBLEM_USER            | Sauce Labs Backpack               |
      | SAUCE_112 | PROBLEM_USER            | Sauce Labs Bike Light             |
      | SAUCE_113 | PROBLEM_USER            | Sauce Labs Fleece Jacket          |
      | SAUCE_114 | PROBLEM_USER            | Sauce Labs Bolt T-Shirt           |
      | SAUCE_115 | PROBLEM_USER            | Sauce Labs Onesie                 |
      | SAUCE_116 | PROBLEM_USER            | Test.allTheThings() T-Shirt (Red) |
      | SAUCE_117 | ERROR_USER              | Sauce Labs Backpack               |
      | SAUCE_118 | ERROR_USER              | Sauce Labs Bike Light             |
      | SAUCE_119 | ERROR_USER              | Sauce Labs Fleece Jacket          |
      | SAUCE_120 | ERROR_USER              | Sauce Labs Bolt T-Shirt           |
      | SAUCE_121 | ERROR_USER              | Sauce Labs Onesie                 |
      | SAUCE_122 | ERROR_USER              | Test.allTheThings() T-Shirt (Red) |
      | SAUCE_123 | VISUAL_USER             | Sauce Labs Backpack               |
      | SAUCE_124 | VISUAL_USER             | Sauce Labs Bike Light             |
      | SAUCE_125 | VISUAL_USER             | Sauce Labs Fleece Jacket          |
      | SAUCE_126 | VISUAL_USER             | Sauce Labs Bolt T-Shirt           |
      | SAUCE_127 | VISUAL_USER             | Sauce Labs Onesie                 |
      | SAUCE_128 | VISUAL_USER             | Test.allTheThings() T-Shirt (Red) |
      | SAUCE_129 | PERFORMANCE_GLITCH_USER | Sauce Labs Backpack               |
      | SAUCE_130 | PERFORMANCE_GLITCH_USER | Sauce Labs Bike Light             |
      | SAUCE_131 | PERFORMANCE_GLITCH_USER | Sauce Labs Fleece Jacket          |
      | SAUCE_132 | PERFORMANCE_GLITCH_USER | Sauce Labs Bolt T-Shirt           |
      | SAUCE_133 | PERFORMANCE_GLITCH_USER | Sauce Labs Onesie                 |
      | SAUCE_134 | PERFORMANCE_GLITCH_USER | Test.allTheThings() T-Shirt (Red) |



  Scenario Outline: <TestID>: Verify products having the same amount between products and cart pages
    And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    And the user is landed on the "PRODUCTS" page
    And the user verifies page subheader should be equal to "Products"
    And the user resets the application state
    When the user adds the following items to the cart:
      | item name |
      | <product> |
    Then the cart logo indicator should be equal to 1
    And the user clicks on the cart button
    And the user is landed on the "CART" page
    And all items in the cart should match the ones added from products page

    Examples:
      | TestID    | username                | product                           |
      | SAUCE_135 | STANDARD_USER           | Sauce Labs Backpack               |
      | SAUCE_136 | STANDARD_USER           | Sauce Labs Bike Light             |
      | SAUCE_137 | STANDARD_USER           | Sauce Labs Fleece Jacket          |
      | SAUCE_138 | STANDARD_USER           | Sauce Labs Bolt T-Shirt           |
      | SAUCE_139 | STANDARD_USER           | Sauce Labs Onesie                 |
      | SAUCE_140 | STANDARD_USER           | Test.allTheThings() T-Shirt (Red) |
      | SAUCE_141 | PROBLEM_USER            | Sauce Labs Backpack               |
      | SAUCE_142 | PROBLEM_USER            | Sauce Labs Bike Light             |
      | SAUCE_143 | PROBLEM_USER            | Sauce Labs Fleece Jacket          |
      | SAUCE_144 | PROBLEM_USER            | Sauce Labs Bolt T-Shirt           |
      | SAUCE_145 | PROBLEM_USER            | Sauce Labs Onesie                 |
      | SAUCE_146 | PROBLEM_USER            | Test.allTheThings() T-Shirt (Red) |
      | SAUCE_147 | ERROR_USER              | Sauce Labs Backpack               |
      | SAUCE_148 | ERROR_USER              | Sauce Labs Bike Light             |
      | SAUCE_149 | ERROR_USER              | Sauce Labs Fleece Jacket          |
      | SAUCE_150 | ERROR_USER              | Sauce Labs Bolt T-Shirt           |
      | SAUCE_151 | ERROR_USER              | Sauce Labs Onesie                 |
      | SAUCE_152 | ERROR_USER              | Test.allTheThings() T-Shirt (Red) |
      | SAUCE_153 | VISUAL_USER             | Sauce Labs Backpack               |
      | SAUCE_154 | VISUAL_USER             | Sauce Labs Bike Light             |
      | SAUCE_155 | VISUAL_USER             | Sauce Labs Fleece Jacket          |
      | SAUCE_156 | VISUAL_USER             | Sauce Labs Bolt T-Shirt           |
      | SAUCE_157 | VISUAL_USER             | Sauce Labs Onesie                 |
      | SAUCE_158 | VISUAL_USER             | Test.allTheThings() T-Shirt (Red) |
      | SAUCE_159 | PERFORMANCE_GLITCH_USER | Sauce Labs Backpack               |
      | SAUCE_160 | PERFORMANCE_GLITCH_USER | Sauce Labs Bike Light             |
      | SAUCE_161 | PERFORMANCE_GLITCH_USER | Sauce Labs Fleece Jacket          |
      | SAUCE_162 | PERFORMANCE_GLITCH_USER | Sauce Labs Bolt T-Shirt           |
      | SAUCE_163 | PERFORMANCE_GLITCH_USER | Sauce Labs Onesie                 |
      | SAUCE_164 | PERFORMANCE_GLITCH_USER | Test.allTheThings() T-Shirt (Red) |

