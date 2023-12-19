/// <reference types="cypress" />

describe("Working with Inputs", () => {
    it("Visit the websites", () => {
      cy.visit("https://www.testyou.in/Login.aspx");
      cy.url().should("include", "Login.aspx");
    });
    it("Should Try to Login", () => {
        cy.visit("https://www.testyou.in/Login.aspx");
        cy.url().should("include", "Login.aspx");

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get("#ctl00_CPHContainer_txtUserLogin").clear();
            cy.get("#ctl00_CPHContainer_txtUserLogin").type(username);
  
            cy.get('input[name="ctl00$CPHContainer$txtPassword"]').clear();
            cy.get('input[name="ctl00$CPHContainer$txtPassword"]').type(password);
  
            cy.get('#ctl00_CPHContainer_chkRememberMe').click()

            cy.get('input[name="ctl00$CPHContainer$btnLoginn"]').click()
            cy.get('.lblboxerror').should('have.text', 'Userid or Password did Not Match !!')
        })
        
      });
  });