/// <reference types="cypress" />

describe("Working with inputs", () => {
  it("Visit the websites", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.url().should("include", "practice-test-login");
  });

  it("Should fill username", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.url().should("include", "practice-test-login");
    cy.get("#username").clear();
    cy.get("#username").type("username");
  });

  it("Should fill password", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.url().should("include", "practice-test-login");
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type("password");
  });
});
