@SNT @PRD @SORT
Feature: Product Sorting Sanity

    Background:
        Given the user is landed on the "LOGIN" page

    Scenario Outline: <TestID>: Verify the filter dropdown displays for users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the filter dropdown should display

        Examples:
            | TestID       | username                |
            | TC_SNT_31    | STANDARD_USER           |
            | TC_SNT_32    | PROBLEM_USER            |
            | TC_SNT_33    | PERFORMANCE_GLITCH_USER |
            | TC_SNT_34    | ERROR_USER              |
            | TC_SNT_35    | VISUAL_USER             |

    Scenario Outline: <TestID>: Verify products are sorted correctly for users
        Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then products should be sorted by "<sort type>"

        Examples:
            | TestID       | username                | sort type |
            | TC_SNT_36    | STANDARD_USER           | az        |
            | TC_SNT_37    | STANDARD_USER           | za        |
            | TC_SNT_38    | STANDARD_USER           | lohi      |
            | TC_SNT_39    | STANDARD_USER           | hilo      |
            | TC_SNT_40    | PROBLEM_USER            | az        |
            | TC_SNT_41    | PROBLEM_USER            | za        |
            | TC_SNT_42    | PROBLEM_USER            | lohi      |
            | TC_SNT_43    | PROBLEM_USER            | hilo      |
            | TC_SNT_44    | PERFORMANCE_GLITCH_USER | az        |
            | TC_SNT_45    | PERFORMANCE_GLITCH_USER | za        |
            | TC_SNT_46    | PERFORMANCE_GLITCH_USER | lohi      |
            | TC_SNT_47    | PERFORMANCE_GLITCH_USER | hilo      |
            | TC_SNT_48    | ERROR_USER              | az        |
            | TC_SNT_49    | ERROR_USER              | za        |
            | TC_SNT_50    | ERROR_USER              | lohi      |
            | TC_SNT_51    | ERROR_USER              | hilo      |
            | TC_SNT_52    | VISUAL_USER             | az        |
            | TC_SNT_53    | VISUAL_USER             | za        |
            | TC_SNT_54    | VISUAL_USER             | lohi      |
            | TC_SNT_55    | VISUAL_USER             | hilo      |
