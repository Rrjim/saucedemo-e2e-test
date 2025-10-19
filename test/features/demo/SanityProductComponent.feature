@SNT @PRODUCT @CMP
Feature: Product Sanity Checks

  Background:
    Given the user is landed on the "LOGIN" page

  Scenario Outline: Verify product fields for different users
    Given the user logs in with username "<username>" and password "STANDARD_PASSWORD"
    When the user is landed on the "PRODUCTS" page
    Then the product "<product>" should display correct <field> with value "<expected>"

    Examples:
      | username       | product                  | field       | expected                                                                                                                                                   |
      | STANDARD_USER  | Sauce Labs Backpack      | description | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                     |
      | STANDARD_USER  | Sauce Labs Backpack      | price       | $29.99                                                                                                                                                     |
      | STANDARD_USER  | Sauce Labs Backpack      | image       | /static/media/sauce-backpack-1200x1500.0a0b85a3.jpg                                                                                                       |
      | STANDARD_USER  | Sauce Labs Bike Light    | description | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. |
      | STANDARD_USER  | Sauce Labs Bike Light    | price       | $9.99                                                                                                                                                      |
      | STANDARD_USER  | Sauce Labs Bike Light    | image       | /static/media/bike-light-1200x1500.37c843b0.jpg                                                                                                           |
      | STANDARD_USER  | Sauce Labs Fleece Jacket | description | It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. |
      | STANDARD_USER  | Sauce Labs Fleece Jacket | price       | $49.99                                                                                                                                                     |
      | STANDARD_USER  | Sauce Labs Fleece Jacket | image       | /static/media/sauce-pullover-1200x1500.51d7ffaf.jpg                                                                                                       |
      | STANDARD_USER  | Sauce Labs Bolt T-Shirt  | description | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.          |
      | STANDARD_USER  | Sauce Labs Bolt T-Shirt  | price       | $15.99                                                                                                                                                     |
      | STANDARD_USER  | Sauce Labs Bolt T-Shirt  | image       | /static/media/bolt-shirt-1200x1500.c2599ac5.jpg                                                                                                           |
      | STANDARD_USER  | Sauce Labs Onesie        | description | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. |
      | STANDARD_USER  | Sauce Labs Onesie        | price       | $7.99                                                                                                                                                      |
      | STANDARD_USER  | Sauce Labs Onesie        | image       | /static/media/red-onesie-1200x1500.2ec615b2.jpg                                                                                                           |
      | STANDARD_USER  | Test.allTheThings() T-Shirt (Red) | description | This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. |
      | STANDARD_USER  | Test.allTheThings() T-Shirt (Red) | price       | $15.99                                                                                                                                                     |
      | STANDARD_USER  | Test.allTheThings() T-Shirt (Red) | image       | /static/media/red-tatt-1200x1500.30dadef4.jpg                                                                                                             |

      | PROBLEM_USER   | Sauce Labs Backpack      | description | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                     |
      | PROBLEM_USER   | Sauce Labs Backpack      | price       | $29.99                                                                                                                                                     |
      | PROBLEM_USER   | Sauce Labs Backpack      | image       | /static/media/sauce-backpack-1200x1500.0a0b85a3.jpg                                                                                                       |
      | PROBLEM_USER   | Sauce Labs Bike Light    | description | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. |
      | PROBLEM_USER   | Sauce Labs Bike Light    | price       | $9.99                                                                                                                                                      |
      | PROBLEM_USER   | Sauce Labs Bike Light    | image       | /static/media/bike-light-1200x1500.37c843b0.jpg                                                                                                           |
      | PROBLEM_USER   | Sauce Labs Fleece Jacket | description | It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. |
      | PROBLEM_USER   | Sauce Labs Fleece Jacket | price       | $49.99                                                                                                                                                     |
      | PROBLEM_USER   | Sauce Labs Fleece Jacket | image       | /static/media/sauce-pullover-1200x1500.51d7ffaf.jpg                                                                                                       |
      | PROBLEM_USER   | Sauce Labs Bolt T-Shirt  | description | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.          |
      | PROBLEM_USER   | Sauce Labs Bolt T-Shirt  | price       | $15.99                                                                                                                                                     |
      | PROBLEM_USER   | Sauce Labs Bolt T-Shirt  | image       | /static/media/bolt-shirt-1200x1500.c2599ac5.jpg                                                                                                           |
      | PROBLEM_USER   | Sauce Labs Onesie        | description | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. |
      | PROBLEM_USER   | Sauce Labs Onesie        | price       | $7.99                                                                                                                                                      |
      | PROBLEM_USER   | Sauce Labs Onesie        | image       | /static/media/red-onesie-1200x1500.2ec615b2.jpg                                                                                                           |
      | PROBLEM_USER   | Test.allTheThings() T-Shirt (Red) | description | This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. |
      | PROBLEM_USER   | Test.allTheThings() T-Shirt (Red) | price       | $15.99                                                                                                                                                     |
      | PROBLEM_USER   | Test.allTheThings() T-Shirt (Red) | image       | /static/media/red-tatt-1200x1500.30dadef4.jpg                                                                                                             |

      | ERROR_USER     | Sauce Labs Backpack      | description | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                     |
      | ERROR_USER     | Sauce Labs Backpack      | price       | $29.99                                                                                                                                                     |
      | ERROR_USER     | Sauce Labs Backpack      | image       | /static/media/sauce-backpack-1200x1500.0a0b85a3.jpg                                                                                                       |
      | ERROR_USER     | Sauce Labs Bike Light    | description | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. |
      | ERROR_USER     | Sauce Labs Bike Light    | price       | $9.99                                                                                                                                                      |
      | ERROR_USER     | Sauce Labs Bike Light    | image       | /static/media/bike-light-1200x1500.37c843b0.jpg                                                                                                           |
      | ERROR_USER     | Sauce Labs Fleece Jacket | description | It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. |
      | ERROR_USER     | Sauce Labs Fleece Jacket | price       | $49.99                                                                                                                                                     |
      | ERROR_USER     | Sauce Labs Fleece Jacket | image       | /static/media/sauce-pullover-1200x1500.51d7ffaf.jpg                                                                                                       |
      | ERROR_USER     | Sauce Labs Bolt T-Shirt  | description | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.          |
      | ERROR_USER     | Sauce Labs Bolt T-Shirt  | price       | $15.99                                                                                                                                                     |
      | ERROR_USER     | Sauce Labs Bolt T-Shirt  | image       | /static/media/bolt-shirt-1200x1500.c2599ac5.jpg                                                                                                           |
      | ERROR_USER     | Sauce Labs Onesie        | description | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. |
      | ERROR_USER     | Sauce Labs Onesie        | price       | $7.99                                                                                                                                                      |
      | ERROR_USER     | Sauce Labs Onesie        | image       | /static/media/red-onesie-1200x1500.2ec615b2.jpg                                                                                                           |
      | ERROR_USER     | Test.allTheThings() T-Shirt (Red) | description | This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. |
      | ERROR_USER     | Test.allTheThings() T-Shirt (Red) | price       | $15.99                                                                                                                                                     |
      | ERROR_USER     | Test.allTheThings() T-Shirt (Red) | image       | /static/media/red-tatt-1200x1500.30dadef4.jpg                                                                                                             |

      | VISUAL_USER    | Sauce Labs Backpack      | description | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                     |
      | VISUAL_USER    | Sauce Labs Backpack      | price       | $29.99                                                                                                                                                     |
      | VISUAL_USER    | Sauce Labs Backpack      | image       | /static/media/sauce-backpack-1200x1500.0a0b85a3.jpg                                                                                                       |
      | VISUAL_USER    | Sauce Labs Bike Light    | description | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. |
      | VISUAL_USER    | Sauce Labs Bike Light    | price       | $9.99                                                                                                                                                      |
      | VISUAL_USER    | Sauce Labs Bike Light    | image       | /static/media/bike-light-1200x1500.37c843b0.jpg                                                                                                           |
      | VISUAL_USER    | Sauce Labs Fleece Jacket | description | It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. |
      | VISUAL_USER    | Sauce Labs Fleece Jacket | price       | $49.99                                                                                                                                                     |
      | VISUAL_USER    | Sauce Labs Fleece Jacket | image       | /static/media/sauce-pullover-1200x1500.51d7ffaf.jpg                                                                                                       |
      | VISUAL_USER    | Sauce Labs Bolt T-Shirt  | description | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.          |
      | VISUAL_USER    | Sauce Labs Bolt T-Shirt  | price       | $15.99                                                                                                                                                     |
      | VISUAL_USER    | Sauce Labs Bolt T-Shirt  | image       | /static/media/bolt-shirt-1200x1500.c2599ac5.jpg                                                                                                           |
      | VISUAL_USER    | Sauce Labs Onesie        | description | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. |
      | VISUAL_USER    | Sauce Labs Onesie        | price       | $7.99                                                                                                                                                      |
      | VISUAL_USER    | Sauce Labs Onesie        | image       | /static/media/red-onesie-1200x1500.2ec615b2.jpg                                                                                                           |
      | VISUAL_USER    | Test.allTheThings() T-Shirt (Red) | description | This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. |
      | VISUAL_USER    | Test.allTheThings() T-Shirt (Red) | price       | $15.99                                                                                                                                                     |
      | VISUAL_USER    | Test.allTheThings() T-Shirt (Red) | image       | /static/media/red-tatt-1200x1500.30dadef4.jpg                                                                                                             |
