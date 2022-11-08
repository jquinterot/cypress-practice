describe('My first test', () => {
    it('check is true', () => {
       cy.visit('https://www.google.com/')
    })

    it('url should include google', () => {
       cy.url().should('include', 'google.com')
    })

    it('should wait for 3 seconds', () => {
        cy.wait(3000);
     })

     it('should pause the excecution', () => {
        cy.pause();
     })
})


describe('My second test', () => {
    it('check is 5', () => {
        expect(6).to.be.equal(6)
    })
})