Feature: Product Sanity Validation

  Background:
    Given the user is landed on the "LOGIN" page

  @UI @SANITY
  Scenario Outline: Validate product metadata on the inventory page for <username>
    And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    When the user is landed on the "PRODUCTS" page
    Then all products should display correct names
    And all products should display correct descriptions
    And all products should display correct prices
    And all products should display correct images    
    And the user logs out
    And the user is landed on the "LOGIN" page

    Examples:
      | username                |
      | STANDARD_USER           |
      | PERFORMANCE_GLITCH_USER |
    #   | VISUAL_USER             |
