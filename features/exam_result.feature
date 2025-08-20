Feature: The application should get the user score and produce the grade

    Scenario: Any user below 30 should be failed
        Given given the score of the user is <score>
        When I click on get grade button
        Then I should get "<mark>" as the mark

        Examples:
            | score | mark |
            | 20    | F    |

    Scenario:Any user greater 30 should pass
        Given given the score of the user is <score>
        When I click on get grade button
        Then I should get "<mark>" as the mark

        Examples:
            | score | mark |
            | 50    | P    |

