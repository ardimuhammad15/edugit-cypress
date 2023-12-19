/// <reference types="cypress" />

describe ("Browser Action", () => {
    it("Should load books website", () =>{
        cy.visit('https://books.toscrape.com/index.html', {timeout:10000})
    })

    it('Should click on Travel category', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout:10000})
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    })
})