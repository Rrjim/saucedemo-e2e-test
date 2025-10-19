@SNT @PRODUCT @SORT
Feature: Product Sorting Sanity

    Background:
        Given the user is landed on the "LOGIN" page

    Scenario Outline: Verify the filter dropdown displays for users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the filter dropdown should display

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    Scenario Outline: Verify products are sorted correctly for users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then products should be sorted by "<sort type>"

        Examples:
            | username                | sort type |
            | STANDARD_USER           | az        |
            | STANDARD_USER           | za        |
            | STANDARD_USER           | lohi      |
            | STANDARD_USER           | hilo      |
            | PROBLEM_USER            | az        |
            | PROBLEM_USER            | za        |
            | PROBLEM_USER            | lohi      |
            | PROBLEM_USER            | hilo      |
            | PERFORMANCE_GLITCH_USER | az        |
            | PERFORMANCE_GLITCH_USER | za        |
            | PERFORMANCE_GLITCH_USER | lohi      |
            | PERFORMANCE_GLITCH_USER | hilo      |
            | ERROR_USER              | az        |
            | ERROR_USER              | za        |
            | ERROR_USER              | lohi      |
            | ERROR_USER              | hilo      |
            | VISUAL_USER             | az        |
            | VISUAL_USER             | za        |
            | VISUAL_USER             | lohi      |
            | VISUAL_USER             | hilo      |
