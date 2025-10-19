Feature: Authentication

    Background:
        Given the user is landed on the "LOGIN" page

    @UI @LOGIN
    Scenario Outline: Successful login users
        When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
        When the user is landed on the "PRODUCTS" page

        Examples:
            | username                |
            | STANDARD_USER           |
            | PROBLEM_USER            |
            | PERFORMANCE_GLITCH_USER |
            | ERROR_USER              |
            | VISUAL_USER             |

    @UI @LOGIN
    Scenario Outline: Unsuccessful login users
    When the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    Then the login error message should be correct for "<username>"

    Examples:
    | username        |
    | LOCKED_OUT_USER |
    | OTHER_USER      |


