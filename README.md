# Cypress Demo

Cypress is/can be used as:

- UI testing tool
- Integration testing tool (spin up environment, run cypress, kill environment)
- API testing tool (make requests to API, check if response contains stuff)

Why Cypress is awesome:

- Great documentation
- Active community
- Open Source (the test runner, not dashboards)
- It just works (one library, not one for assertion, one for this, one for that)
- Great debugging tool
- Intuitive, easy syntax

The Cypress roadmap

## Starting

First, install Cypress:

```javascript
npm install cypress --save-dev
```

## Chapter 1: Running Cypress' standard tests

Create a script in package.json:

```json
"cypress:open": "cypress open"
```

Add it to WebStorm run configs and run.

Click `run all specs`


## Chapter 2: Creating a test

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

## Chapter 3: Running a test

Using `cypress run` to show off CI capabilities

## Chapter 4: Demonstrating DockPanels tests

## Chapter 5: Demonstrating Cypress demos

## Chapter 4: Debugging

- Running a spec
- labels

## Chapter 5: Test driven development

First, install the Cypress Cucumber plugin:

```javascript
npm install cypress-cucumber-preprocessor --save-dev
```

## Chapter 6: Writing a test with a form

## Chapter 7: Aliasing

## Chapter 8: Assertion

## Chapter 9: 
