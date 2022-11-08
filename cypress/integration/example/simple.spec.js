describe('My first test', () => {
    it('check is true', () => {
       cy.visit('https://www.google.com/')
    })

    it('url should include google', () => {
       cy.url().should('include', 'google.com')
    })
})


describe('My second test', () => {
    it('check is 5', () => {
        expect(6).to.be.equal(6)
    })
})