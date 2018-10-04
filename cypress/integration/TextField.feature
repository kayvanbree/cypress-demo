Feature: Textfield stuff

  Scenario: Label should say what we type
    Given I am on the webpage
    When I type "Hallo Hackerscafe!" in the text field
    And I click send
    Then the label should say "Hallo Hackerscafe!"
