/// <reference types="cypress" />

describe("Working with Inputs", () => {
    it("Visit the websites", () => {
      cy.visit("http://zero.webappsecurity.com/login.html");
      cy.url().should("include", "login.html");
  
      
    });
    it("Should Try to Login", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.url().should("include", "login.html");

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
        cy.login(username, password)

        cy.get('#pay_bills_tab').click()

        cy.paybill()
        })
      });
  });
  