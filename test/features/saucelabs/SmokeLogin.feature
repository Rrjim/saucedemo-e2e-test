@UI @SMOKE
Feature: Authentication

    Background:
        Given the user is landed on the "LOGIN" page

    @LOGIN
    Scenario Outline: <TestID>: Successful login users
        When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        Then the user is landed on the "PRODUCTS" page

        Examples:
            | TestID | username                |
            | TC_SMK_001  | STANDARD_USER           |
            | TC_SMK_002  | PROBLEM_USER            |
            | TC_SMK_003  | PERFORMANCE_GLITCH_USER |
            | TC_SMK_004  | ERROR_USER              |
            | TC_SMK_005  | VISUAL_USER             |

    @UI @LOGIN
    Scenario Outline: <TestID>: Unsuccessful login users
        When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        Then the login error message should be correct for "<username>"

        Examples:
            | TestID | username        |
            | TC_SMK_006  | LOCKED_OUT_USER |
            | TC_SMK_007  | OTHER_USER      |


