@UI @SMK @PRD @CMP 
Feature: Product reusable component

  Background:
    Given the user is landed on the "LOGIN" page

  Scenario Outline: <TestID>: Verify product fields for different users
    And the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    When the user is landed on the "PRODUCTS" page
    Then the product "<product>" should display correct <field> with value "<expected>"

  Examples:
  | TestID     | username      | product                           | field       | expected            |
  | SAUCE_008  | STANDARD_USER | Sauce Labs Backpack               | description | BACKPACK.desc       |
  | SAUCE_009  | STANDARD_USER | Sauce Labs Backpack               | price       | BACKPACK.price      |
  | SAUCE_010  | STANDARD_USER | Sauce Labs Backpack               | image       | BACKPACK.img        |
  | SAUCE_011  | STANDARD_USER | Sauce Labs Bike Light             | description | BIKE_LIGHT.desc     |
  | SAUCE_012  | STANDARD_USER | Sauce Labs Bike Light             | price       | BIKE_LIGHT.price    |
  | SAUCE_013  | STANDARD_USER | Sauce Labs Bike Light             | image       | BIKE_LIGHT.img      |
  | SAUCE_014  | STANDARD_USER | Sauce Labs Fleece Jacket          | description | JACKET.desc         |
  | SAUCE_015  | STANDARD_USER | Sauce Labs Fleece Jacket          | price       | JACKET.price        |
  | SAUCE_016  | STANDARD_USER | Sauce Labs Fleece Jacket          | image       | JACKET.img          |
  | SAUCE_017  | STANDARD_USER | Sauce Labs Bolt T-Shirt           | description | BOLT_SHIRT.desc     |
  | SAUCE_018  | STANDARD_USER | Sauce Labs Bolt T-Shirt           | price       | BOLT_SHIRT.price    |
  | SAUCE_019  | STANDARD_USER | Sauce Labs Bolt T-Shirt           | image       | BOLT_SHIRT.img      |
  | SAUCE_020  | STANDARD_USER | Sauce Labs Onesie                 | description | ONESIE.desc         |
  | SAUCE_021  | STANDARD_USER | Sauce Labs Onesie                 | price       | ONESIE.price        |
  | SAUCE_022  | STANDARD_USER | Sauce Labs Onesie                 | image       | ONESIE.img          |
  | SAUCE_023  | STANDARD_USER | Test.allTheThings() T-Shirt (Red)| description | RED_TATT.desc       |
  | SAUCE_024  | STANDARD_USER | Test.allTheThings() T-Shirt (Red)| price       | RED_TATT.price      |
  | SAUCE_025  | STANDARD_USER | Test.allTheThings() T-Shirt (Red)| image       | RED_TATT.img        |
  | SAUCE_026  | PROBLEM_USER  | Sauce Labs Backpack               | description | BACKPACK.desc       |
  | SAUCE_027  | PROBLEM_USER  | Sauce Labs Backpack               | price       | BACKPACK.price      |
  | SAUCE_028  | PROBLEM_USER  | Sauce Labs Backpack               | image       | BACKPACK.img        |
  | SAUCE_029  | PROBLEM_USER  | Sauce Labs Bike Light             | description | BIKE_LIGHT.desc     |
  | SAUCE_030  | PROBLEM_USER  | Sauce Labs Bike Light             | price       | BIKE_LIGHT.price    |
  | SAUCE_031  | PROBLEM_USER  | Sauce Labs Bike Light             | image       | BIKE_LIGHT.img      |
  | SAUCE_032  | PROBLEM_USER  | Sauce Labs Fleece Jacket          | description | JACKET.desc         |
  | SAUCE_033  | PROBLEM_USER  | Sauce Labs Fleece Jacket          | price       | JACKET.price        |
  | SAUCE_034  | PROBLEM_USER  | Sauce Labs Fleece Jacket          | image       | JACKET.img          |
  | SAUCE_035  | PROBLEM_USER  | Sauce Labs Bolt T-Shirt           | description | BOLT_SHIRT.desc     |
  | SAUCE_036  | PROBLEM_USER  | Sauce Labs Bolt T-Shirt           | price       | BOLT_SHIRT.price    |
  | SAUCE_037  | PROBLEM_USER  | Sauce Labs Bolt T-Shirt           | image       | BOLT_SHIRT.img      |
  | SAUCE_038  | PROBLEM_USER  | Sauce Labs Onesie                 | description | ONESIE.desc         |
  | SAUCE_039  | PROBLEM_USER  | Sauce Labs Onesie                 | price       | ONESIE.price        |
  | SAUCE_040  | PROBLEM_USER  | Sauce Labs Onesie                 | image       | ONESIE.img          |
  | SAUCE_041  | PROBLEM_USER  | Test.allTheThings() T-Shirt (Red)| description | RED_TATT.desc       |
  | SAUCE_042  | PROBLEM_USER  | Test.allTheThings() T-Shirt (Red)| price       | RED_TATT.price      |
  | SAUCE_043  | PROBLEM_USER  | Test.allTheThings() T-Shirt (Red)| image       | RED_TATT.img        |
  | SAUCE_044  | ERROR_USER    | Sauce Labs Backpack               | description | BACKPACK.desc       |
  | SAUCE_045  | ERROR_USER    | Sauce Labs Backpack               | price       | BACKPACK.price      |
  | SAUCE_046  | ERROR_USER    | Sauce Labs Backpack               | image       | BACKPACK.img        |
  | SAUCE_047  | ERROR_USER    | Sauce Labs Bike Light             | description | BIKE_LIGHT.desc     |
  | SAUCE_048  | ERROR_USER    | Sauce Labs Bike Light             | price       | BIKE_LIGHT.price    |
  | SAUCE_049  | ERROR_USER    | Sauce Labs Bike Light             | image       | BIKE_LIGHT.img      |
  | SAUCE_050  | ERROR_USER    | Sauce Labs Fleece Jacket          | description | JACKET.desc         |
  | SAUCE_051  | ERROR_USER    | Sauce Labs Fleece Jacket          | price       | JACKET.price        |
  | SAUCE_052  | ERROR_USER    | Sauce Labs Fleece Jacket          | image       | JACKET.img          |
  | SAUCE_053  | ERROR_USER    | Sauce Labs Bolt T-Shirt           | description | BOLT_SHIRT.desc     |
  | SAUCE_054  | ERROR_USER    | Sauce Labs Bolt T-Shirt           | price       | BOLT_SHIRT.price    |
  | SAUCE_055  | ERROR_USER    | Sauce Labs Bolt T-Shirt           | image       | BOLT_SHIRT.img      |
  | SAUCE_056  | ERROR_USER    | Sauce Labs Onesie                 | description | ONESIE.desc         |
  | SAUCE_057  | ERROR_USER    | Sauce Labs Onesie                 | price       | ONESIE.price        |
  | SAUCE_058  | ERROR_USER    | Sauce Labs Onesie                 | image       | ONESIE.img          |
  | SAUCE_059  | ERROR_USER    | Test.allTheThings() T-Shirt (Red)| description | RED_TATT.desc       |
  | SAUCE_060  | ERROR_USER    | Test.allTheThings() T-Shirt (Red)| price       | RED_TATT.price      |
  | SAUCE_061  | ERROR_USER    | Test.allTheThings() T-Shirt (Red)| image       | RED_TATT.img        |
  | SAUCE_062  | VISUAL_USER   | Sauce Labs Backpack               | description | BACKPACK.desc       |
  | SAUCE_063  | VISUAL_USER   | Sauce Labs Backpack               | price       | BACKPACK.price      |
  | SAUCE_064  | VISUAL_USER   | Sauce Labs Backpack               | image       | BACKPACK.img        |
  | SAUCE_065  | VISUAL_USER   | Sauce Labs Bike Light             | description | BIKE_LIGHT.desc     |
  | SAUCE_066  | VISUAL_USER   | Sauce Labs Bike Light             | price       | BIKE_LIGHT.price    |
  | SAUCE_067  | VISUAL_USER   | Sauce Labs Bike Light             | image       | BIKE_LIGHT.img      |
  | SAUCE_068  | VISUAL_USER   | Sauce Labs Fleece Jacket          | description | JACKET.desc         |
  | SAUCE_069  | VISUAL_USER   | Sauce Labs Fleece Jacket          | price       | JACKET.price        |
  | SAUCE_070  | VISUAL_USER   | Sauce Labs Fleece Jacket          | image       | JACKET.img          |
  | SAUCE_071  | VISUAL_USER   | Sauce Labs Bolt T-Shirt           | description | BOLT_SHIRT.desc     |
  | SAUCE_072  | VISUAL_USER   | Sauce Labs Bolt T-Shirt           | price       | BOLT_SHIRT.price    |
  | SAUCE_073  | VISUAL_USER   | Sauce Labs Bolt T-Shirt           | image       | BOLT_SHIRT.img      |
  | SAUCE_074  | VISUAL_USER   | Sauce Labs Onesie                 | description | ONESIE.desc         |
  | SAUCE_075  | VISUAL_USER   | Sauce Labs Onesie                 | price       | ONESIE.price        |
  | SAUCE_076  | VISUAL_USER   | Sauce Labs Onesie                 | image       | ONESIE.img          |
  | SAUCE_077  | VISUAL_USER   | Test.allTheThings() T-Shirt (Red)| description | RED_TATT.desc       |
  | SAUCE_078  | VISUAL_USER   | Test.allTheThings() T-Shirt (Red)| price       | RED_TATT.price      |
  | SAUCE_079  | VISUAL_USER   | Test.allTheThings() T-Shirt (Red)| image       | RED_TATT.img        |
