describe('Login', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.config().baseUrl}/login`);
        cy.get('body').within(() => {
            cy.get('div').should('contain.text', "Don't have an account? Sign up");
        })
    });

    it('inputs the email address and password and submits the form', () => {
        cy.get('form').within(() => {
            cy.get('input:first')
                .should('have,attr', 'placeholder', 'Email address')
                .type('issaidiaz2@gmail.com');

            cy.get('input:last')
                .should('have,attr', 'placeholder', 'Password')
                .type('123test');
            cy.get('button').should('contain.text', 'Login').click();
        })
    })
})