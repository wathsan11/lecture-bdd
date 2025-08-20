Feature: Calculator Basic Operations
  As a user
  I want to perform arithmetic operations
  So that I can get accurate results

  # Scenario: Add two numbers
  #   Given I have entered 5 and 7 into the calculator //hardcode is not good
  #   When I press the add button
  #   Then the result should be 12

  # <> <- placeholder
  Scenario: Add two numbers
    Given I have entered <firstValue> and <secondValue> into the calculator
    When I press the add button
    Then the result should be <expectedValue>

    Examples:
      | firstValue | secondValue | expectedValue |
      | 5          | 7           | 12            |
      | 30         | 5           | 35            |

  Scenario: Subtract two numbers
    Given I have entered <firstValue> and <secondValue> into the calculator
    When I press sub button
    Then the result should be <expectedValue>

    Examples:
      | firstValue | secondValue | expectedValue |
      | 9          | 1           | 8             |
      | 8          | 7           | 1             |

  # Scenario: User should be able to like a post
  #   Given user has logged in to facebook.com and post has no likes
  #   When user press the like button
  #   Then the number of likes should be 1

