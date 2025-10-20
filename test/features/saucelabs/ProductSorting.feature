@UI @SNT @PRD @SORT
Feature: Product Sorting Sanity

    Background:
        Given the user is landed on the "LOGIN" page

    Scenario Outline: <TestID>: Verify the filter dropdown displays for users
        And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then the filter dropdown should display
        And the user resets the application state

        Examples:
            | TestID   | username                |
            | SAUCE_80 | STANDARD_USER           |
            | SAUCE_81 | PROBLEM_USER            |
            | SAUCE_82 | PERFORMANCE_GLITCH_USER |
            | SAUCE_83 | ERROR_USER              |
            | SAUCE_84 | VISUAL_USER             |

    Scenario Outline: <TestID>: Verify products are sorted correctly for users
        And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page
        Then products should be sorted by "<sort type>"
        And the user resets the application state

        Examples:
            | TestID    | username                | sort type |
            | SAUCE_85  | STANDARD_USER           | az        |
            | SAUCE_86  | STANDARD_USER           | za        |
            | SAUCE_87  | STANDARD_USER           | lohi      |
            | SAUCE_88  | STANDARD_USER           | hilo      |
            | SAUCE_89  | PROBLEM_USER            | az        |
            | SAUCE_90  | PROBLEM_USER            | za        |
            | SAUCE_91  | PROBLEM_USER            | lohi      |
            | SAUCE_92  | PROBLEM_USER            | hilo      |
            | SAUCE_93  | PERFORMANCE_GLITCH_USER | az        |
            | SAUCE_94  | PERFORMANCE_GLITCH_USER | za        |
            | SAUCE_95  | PERFORMANCE_GLITCH_USER | lohi      |
            | SAUCE_96  | PERFORMANCE_GLITCH_USER | hilo      |
            | SAUCE_97  | ERROR_USER              | az        |
            | SAUCE_98  | ERROR_USER              | za        |
            | SAUCE_99  | ERROR_USER              | lohi      |
            | SAUCE_100 | ERROR_USER              | hilo      |
            | SAUCE_101 | VISUAL_USER             | az        |
            | SAUCE_102 | VISUAL_USER             | za        |
            | SAUCE_103 | VISUAL_USER             | lohi      |
            | SAUCE_104 | VISUAL_USER             | hilo      |

