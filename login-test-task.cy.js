/// <reference types="cypress" />

describe("Working with Inputs", () => {
  it("Visit the websites", () => {
    cy.visit("https://www.testyou.in/Login.aspx");
    cy.url().should("include", "Login.aspx");

    
  });
  it("Should fill Username and Password", () => {
      cy.visit("https://www.testyou.in/Login.aspx");
      cy.url().should("include", "Login.aspx");
      cy.get("#ctl00_CPHContainer_txtUserLogin").clear();
      cy.get("#ctl00_CPHContainer_txtUserLogin").type("username");

      cy.get('input[name="ctl00$CPHContainer$txtPassword"]').clear();
      cy.get('input[name="ctl00$CPHContainer$txtPassword"]').type("password");

      cy.get('#ctl00_CPHContainer_chkRememberMe').click()
    });
});
