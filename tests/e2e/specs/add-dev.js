// https://docs.cypress.io/api/introduction/api.html

context('Login and Add a developer', () => {
	describe('Complete the login process and Login user', () => {
		it('Try to login and pass', () => {
			cy.visit('/login')
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
	describe('Try to add a Dev', () => {
		it('Add a developer', () => {
			cy.visit('/add-dev')
			cy.get('#fullname')
				.type('Sola Alice')
				.should('have.value', 'Sola Alice')

			cy.get('#nickname')
				.type('Sholly P', { delay: 20 })
				.should('have.value', 'Sholly P')

			cy.get('#role')
				.type('Class captain', { delay: 200 })
				.should('have.value', 'Class captain')

			let input = cy.get('input#eyecolor')
			document.getElementById('#eyecolor')

			cy.pause()
			// cy.get('.btn.btn-black').click()
			cy.get('.btn.btn-black').click()
			cy.url().should('include', '/devs')
		})
	})
})
