/* global Given, When, Then */

const url = 'http://localhost:4204/';

Given(/^I am on the webpage$/, () => {
  cy.visit(url);
});

When(/^I type "(.*?)" in the text field$/, (text) => {
  cy.get('[cy-data=textfield]')
    .type(text);
});

When(/^I click send$/, (dock) => {
  cy.get('[cy-data=submit]')
    .click();
});

Then(/^the label should say "(.*?)"$/, (text) => {
  cy.get('[cy-data=label]')
    .contains(text);
});
