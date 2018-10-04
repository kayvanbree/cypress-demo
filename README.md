# Cypress Demo

Cypress is/can be used as:

- UI testing tool
- Integration testing tool (spin up environment, run cypress, kill environment)
- API testing tool (make requests to API, check if response contains stuff)

Why Cypress is awesome:

- Great documentation
- Active community
- Open Source (the test runner, not dashboards)
- It just works

The Cypress roadmap

## Demo

- Using master branch
- Using DockPanels

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

- Go to localhost
- Click the Add 1 button
- Check the count

- Go to localhost
- Click the Add 2 button
- Check the count

- Go to localhost
- Click the Add 88 button
- Check the count

## Chapter 3: Running a test

Using `cypress run` to show off CI capabilities

## Chapter 4: Debugging

- Running a spec
- labels

## Chapter 5: Test driven development

First, install the Cypress Cucumber plugin:

```javascript
npm install cypress-cucumber-preprocessor --save-dev
```
