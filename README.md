# Cypress Demo

## Doel van deze presentatie

- Kennismaking met Cypress
	- Waar is het voor?
	- Waarom is Cypress gaaf?
	- Wat kan Cypress?
	- Wat kan Cypress niet?
	- Wat staat nog op de roadmap?
- Geen in depth code (wel een beetje natuurlijk!)
- Laten zien van:
	- Kleine code voorbeelden
	- Cypress' eigen demos
	- Hoe gebruik ik Cypress in de DockPanels library?
	- Cypress in command line (voor CI)
	- Cypress als TDD tool

## Cypress is/can be used as:

- UI testing tool
- Integration testing tool (spin up environment, run cypress, kill environment)
- API testing tool (make requests to API, check if response contains stuff)

## Why Cypress is awesome:

- Great documentation
- Active community
- Open Source (the test runner, not dashboards)
- It just works (one library, not one for assertion, one for this, one for that)
- Great debugging tool
- Intuitive, easy syntax

## Wat kan Cypress?

- API requests sturen (CORS wordt genegeerd)
- Server stubben (lege/slechte requests terug sturen voor error handling)
- Data stores manipuleren
- Functies stubben
- Event listeners toevoegen
- Websockets messages faken
- 3rd party scripts laden
- Functies direct aanroepen
- Functionaliteit skippen (geen UI gebruiken om state op te bouwen)

Wat kan Cypress niet?

https://docs.cypress.io/guides/references/trade-offs.html#Permanent-trade-offs-1

- Automation tool (niet voor bedoeld)
- Meerdere tabbladen/windows (op te lossen door tests anders te schrijven)
- Commands buiten de browser runnen
- Meerdere browsers tegelijk runnen (multi-user is te stubben/mocken)
- Verschillende domeinen testen (inloggen etc kan op andere manieren)

Wat kan Cypress NOG niet?

- Parallel testen
- Andere browsers dan Chrome en Electron (Firefox support onderweg!)
- Native events
- Upload inputs gebruiken (is vaak om heen te werken)
- Downloads (is grotendeels te stubben)
- IFrames (limited)

## Running a test

Using `cypress run` to show off CI capabilities

## Demonstrating DockPanels tests

## Demonstrating Cypress demos

## Starting

First, install Cypress:

```javascript
npm install cypress --save-dev
```

## Running Cypress' standard tests

Create a script in package.json:

```json
"cypress:open": "cypress open"
```

Add it to WebStorm run configs and run.

Click `run all specs`


## Creating a test

Test 1:

- Go to localhost
- Click the Add 1 button
- Count is 1

Test 2:

- Go to localhost
- Click the Add 2 button
- Count is 2

Test 3:

- Go to localhost
- Click the Add 88 button
- Count is 88

Test 4:

- Go to localhost
- Click the Add buttons a bunch of times
- Click the reset button
- Count is 0

Example:

```javascript
context('Actions', () => {
	beforeEach(() => {
		cy.visit('http://localhost:4200');
	});

	it('should add 1', () => {
		cy.get('[cy-data=add-1]')
			.click();

		cy.get('[cy-data=count]')
			.contains('Count: 1');
	});
});
```

## Debugging

- Running a spec
- labels

## Test driven development

First, install the Cypress Cucumber plugin:

```javascript
npm install cypress-cucumber-preprocessor --save-dev
```

- Test schrijven:

Cucumber stuff:

```
Feature: Textfield stuff

  Scenario: Label should say what we type
    Given I am on the webpage
    When I type "Hallo Hackerscafe!" in the text field
    And I click send
    Then the label should say "Hallo Hackerscafe!"
```

Steps:

```javascript
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
```

HTML:

```html
<div class="container">
  <div class="block">
    <h1>Feature 1</h1>
    <form (submit)="onSubmit()">
      <input type="text" [(ngModel)]="inputText" name="myText" cy-data="textfield">
      <input type="submit" cy-data="submit" value="Verstuur!">
    </form>
  </div>

  <div class="block">
    <h1>Output</h1>
    <span cy-data="label">{{output}}</span>
  </div>
</div>

```

Javascript:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputText = '';
  public output = '';

  public onSubmit(): void {
    this.output = this.inputText;
  }
}

```
