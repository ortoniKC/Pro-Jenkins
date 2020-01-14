Feature: Super Calculator
    # Scenario: Add two numbers and get the result
    #     Given Goto Super calc webpage
    #     When Users enter in the first field as "8"
    #     And Users enter in the second fiels as "3"
    #     When Users clicks on the go button
    #     Then User must get the result as "11"
    Scenario Outline: Add two numbers and get the result
        Given Goto Super calc webpage
        When Users enter in the first field as "<num1>"
        And Users enter in the second fiels as "<num2>"
        When Users clicks on the go button
        Then User must get the result as "<res>"
        Examples:
            | num1 | num2 | res |
            | 1    | 2    | 3   |
            | 41   | 42   | 83  |

