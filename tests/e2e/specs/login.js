// https://docs.cypress.io/api/introduction/api.html

context('Login Test', () => {
	beforeEach(() => {
		cy.visit('/login')
	})

	describe('Complete the login process and Login user', () => {
		it('Try to login and fail', () => {
			cy.get('.btn.btn-black').click()
			cy.url().should('include', '/login')
		})

		it('Try to login and get error', () => {
			cy.get('.btn.btn-black').click()
			// .should('have.value', 'Sola ')
			cy.get('#snackbar')
				.should('have.class', 'show')
				.and('have.text', 'Check the fields and try again')
		})

		it('Try to login up and fail', () => {
			cy.get('#email')
				.type('Sola')
				.should('have.value', 'Sola')

			cy.get('#password').should('have.value', '')

			cy.get('.btn.btn-black').click()
			// cy.pause()
			// cy.get('#snackbar')
			// 	.should('have.class', 'show')
			// 	.and('have.text', 'Check the fields and try again')
		})

		it('Try to sign up and pass', () => {
			cy.get('#email')
				.type('sola@crenet.com')
				.should('have.value', 'sola@crenet.com')

			cy.get('#password')
				.type('12345')
				.should('have.value', '12345')

			cy.get('.btn.btn-black').click()
			cy.url().should('include', '/devs')
		})
	})
})
describe('Check if logged in', () => {
	it('Should have 3 link', () => {
		cy.get('nav ul li').should('have.length', '3')
	})
	it('Should have first link as Dev', () => {
		cy.get('li:nth-child(1)').should('have.text', 'Dev')
	})
	it('Should have second link as Add Dev', () => {
		cy.get('li:nth-child(2)').should('have.text', 'Add Dev')
	})
	it('Should have last link as logout', () => {
		cy.get('li:nth-child(3)').should('have.text', 'logout')
	})
})
