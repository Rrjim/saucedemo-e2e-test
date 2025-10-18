Feature: Inventory

  Background:
      Given the user is landed on the "LOGIN" page

  @UI @E2E
  Scenario: Make an order with 
      Given the user logs in with username "STANDARD_USER" and password "STANDARD_PASSWORD" expecting "success"
      When the user is landed on the "INVENTORY" page
      And the user verifies page subheader should be equal to "Products"
      Then the inventory page should contain 6 products
      And validate all products have valid price
    When the user adds the following items to the cart:
      | itemName                 |
      | Sauce Labs Backpack       |
      | Sauce Labs Bike Light     |
    Then the cart should display 2 items
    When the user clicks on the cart button
    And the user is landed on the "CART" page
    And the user verifies page subheader should be equal to "Your Cart"
    Then all items in the cart should have a quantity of 1
    Then all items in the cart should match the ones added from products page
    Then the user clicks on the checkout button
    And the user is landed on the "INFORMATION" page
    And the user verifies page subheader should be equal to "Checkout: Your Information"
    When the user fills in the checkout form with:
    | firstName | lastName | postalCode |
    | standard  | user     | 12345      |
    When the user clicks on the continue button
    #   And all items should be reset to "Add to cart" state
