Feature: Add and remove panels

  Scenario: Adding a panel
    Given I am on the webpage
    When I type "Hallo Hackerscafe!" in the text field
    And I click send
    Then the label should say "Hallo Hackerscafe!"
