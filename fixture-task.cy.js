/// <reference types="cypress" />

describe("Working with Inputs", () => {
    it("Visit the websites", () => {
      cy.visit("https://www.saucedemo.com/");
      cy.url().should("include", "saucedemo.com");
  
      
    });
    it("Should Try to Login", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.url().should("include", "saucedemo.com");

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
        cy.get("#user-name").clear();
        cy.get("#user-name").type("standard_user");
  
        cy.get('input[name="password"]').clear();
        cy.get('input[name="password"]').type("secret_sauce");

        cy.get('#login-button').click()


        })
      });

      it("Should Try to ADD TO CART and Check in the Chart", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.url().should("include", "saucedemo.com");

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
        cy.get("#user-name").clear();
        cy.get("#user-name").type("standard_user");
  
        cy.get('input[name="password"]').clear();
        cy.get('input[name="password"]').type("secret_sauce");

        cy.get('#login-button').click()

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        cy.get('.shopping_cart_link').click()
        })
      });
  });
  