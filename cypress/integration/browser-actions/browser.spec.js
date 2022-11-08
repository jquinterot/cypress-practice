

describe('Browser Actions', () => {
    it('should load books website', ()=> {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include', 'books')
    })

    it('should click on Travel category', ()=> {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
})