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

  it('should add 2', () => {
    cy.get('[cy-data=add-2]')
      .click();

    cy.get('[cy-data=count]')
      .contains('Count: 2');
  });

  it('should add 88', () => {
    cy.get('[cy-data=add-88]')
      .click();

    cy.get('[cy-data=count]')
      .contains('Count: 88');
  });

  it('should reset', () => {
    cy.get('[cy-data=add-1]')
      .click().click().click();
    cy.get('[cy-data=add-2]')
      .click().click().click();
    cy.get('[cy-data=add-88]')
      .click().click().click();

    cy.get('[cy-data=reset]')
      .click();

    cy.get('[cy-data=count]')
      .contains('Count: 0');
  });

});
