// https://docs.cypress.io/api/introduction/api.html

context('Login Test', () => {
	beforeEach(() => {
		cy.visit('/signup')
	})

	describe('Fill The form', () => {
		it('Try to sign and fail', () => {
			cy.get('.btn.btn-black').click()
			// .should('have.value', 'Sola ')
			cy.url().should('include', '/login')
		})

		it('Try to sign and get error', () => {
			cy.get('.btn.btn-black').click()
			// .should('have.value', 'Sola ')
			cy.get('#snackbar')
				.should('have.class', 'show')
				.and('have.text', 'Check the fields and try again')
		})

		it('Try to sign up and fail', () => {
			cy.get('#firstname')
				.type('Sola ')
				.should('have.value', 'Sola ')

			cy.get('#lastname')
				.type('Adebayo', { delay: 20 })
				.should('have.value', 'Adebayo')

			cy.get('#email')
				.type('sola@crenettechlabs.com', { delay: 200 })
				.should('have.value', 'sola@crenettechlabs.com')

			cy.get('.btn.btn-black').click()
			cy.get('#snackbar')
				.should('have.class', 'show')
				.and('have.text', 'Check the fields and try again')

			// cy.get('#phone-number')
			// 	.type('080770695432', { delay: 20 })
			// 	.should('have.value', '080770695432')
		})

		it('Try to sign up and pass', () => {
			cy.get('#firstname')
				.type('Sola ')
				.should('have.value', 'Sola ')

			cy.get('#lastname')
				.type('Adebayo', { delay: 20 })
				.should('have.value', 'Adebayo')

			cy.get('#email')
				.type('sola@crenettechlabs.com', { delay: 200 })
				.should('have.value', 'sola@crenettechlabs.com')

			cy.get('#phone-number')
				.type('080770695432', { delay: 20 })
				.should('have.value', '080770695432')

			cy.get('.btn.btn-black').click()
			cy.url().should('include', '/login')
		})
	})
})
