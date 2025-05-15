Feature: Calculator Basic Operations
  As a user
  I want to perform arithmetic operations
  So that I can get accurate results

  Scenario: Add two numbers
    Given I have entered 5 and 7 into the calculator
    When I press the add button
    Then the result should be 12