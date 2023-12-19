/// <reference types="cypress" />

describe("Working with Inputs", () => {
  it("Visit the websites", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });
  it("Should Try to Login", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");

    cy.fixture("user").then((user) => {
      const username = user.username;
      const password = user.password;
      cy.get("#user_login").clear();
      cy.get("#user_login").type(username);

      cy.get('input[name="user_password"]').clear();
      cy.get('input[name="user_password"]').type(password);

      cy.get('input[name="submit"]').click();

      cy.get("#pay_bills_tab").click();

      cy.get("#sp_amount").clear();
      cy.get("#sp_amount").type("1000");
      cy.get("#sp_date").clear();
      cy.get('input[name="date"]').invoke("val", "2023-12-19");

      cy.get("#pay_saved_payees").click();
    });
  });
});
