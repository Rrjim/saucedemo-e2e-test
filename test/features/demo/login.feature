Feature: Authentication


  Background:
      Given the user is landed on the "LOGIN" page
   
  @UI @LOGIN
  Scenario Outline: Login and check inventory for each user
      Given the user logs in with username "<usernameKey>" and password "STANDARD_PASSWORD" expecting "<expectedOutcome>"


  Examples:
    | usernameKey              | expectedOutcome |
    | STANDARD_USER            | success         |
    | LOCKED_OUT_USER          | fail            |
    | PROBLEM_USER             | success         |
    | PERFORMANCE_GLITCH_USER  | success         |
    | ERROR_USER               | success         |
    | VISUAL_USER              | success         |
    | OTHER_USER               | fail            |

