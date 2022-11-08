

describe('Browser Actions', () => {
    it('should load books website', ()=> {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include', 'books')
    })

    it('should click on Travel category', ()=> {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })

    
    it('should click on Travel category', ()=> {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should click on Poetry category', ()=> {
        cy.get('a').contains('Poetry').click()

    })

    it('should click on Olio book detail', ()=> {
        cy.get('a').contains('Olio').click()

    })

    it('should have correct price tag', ()=> {
        cy.get('.price_color').contains( '£23.88')

    })
})