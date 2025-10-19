@SNT @PRODUCT @VAL
Feature: Product Sanity Checks

    Background:
        Given the user is landed on the "LOGIN" page

    # === BACKPACK ===
    Scenario Outline: Verify "Sauce Labs Backpack" description for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Backpack" should display correct description

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Backpack" price for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Backpack" should display correct price

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Backpack" image for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Backpack" should display correct image

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |


    # === BIKE LIGHT ===
    Scenario Outline: Verify "Sauce Labs Bike Light" description for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Bike Light" should display correct description

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Bike Light" price for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Bike Light" should display correct price

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Bike Light" image for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Bike Light" should display correct image

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |


    # === JACKET ===
    Scenario Outline: Verify "Sauce Labs Fleece Jacket" description for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Fleece Jacket" should display correct description

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Fleece Jacket" price for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Fleece Jacket" should display correct price

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Fleece Jacket" image for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Fleece Jacket" should display correct image

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |


    # === BOLT SHIRT ===
    Scenario Outline: Verify "Sauce Labs Bolt T-Shirt" description for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Bolt T-Shirt" should display correct description

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Bolt T-Shirt" price for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Bolt T-Shirt" should display correct price

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Bolt T-Shirt" image for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Bolt T-Shirt" should display correct image

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |


    # === ONESIE ===
    Scenario Outline: Verify "Sauce Labs Onesie" description for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Onesie" should display correct description

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Onesie" price for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Onesie" should display correct price

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Sauce Labs Onesie" image for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Sauce Labs Onesie" should display correct image

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |


    # === RED TATT ===
    Scenario Outline: Verify "Test.allTheThings() T-Shirt (Red)" description for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Test.allTheThings() T-Shirt (Red)" should display correct description

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Test.allTheThings() T-Shirt (Red)" price for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Test.allTheThings() T-Shirt (Red)" should display correct price

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify "Test.allTheThings() T-Shirt (Red)" image for different users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the product "Test.allTheThings() T-Shirt (Red)" should display correct image

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |
