// https://docs.cypress.io/api/introduction/api.html
context('Home page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	// describe('Home page links should be for not logged in state[Should fail]', () => {
	// 	it('Should have 3 link', () => {
	// 		cy.get('nav ul li').should('have.length', '3')
	// 	})
	// 	it('Should have first link as Dev', () => {
	// 		cy.get('li:nth-child(1)').should('have.text', 'About us')
	// 		// cy.pause()
	// 	})
	// 	it('Should have second link as Add Dev', () => {
	// 		cy.get('li:nth-child(2)').should('have.text', 'login')
	// 	})
	// 	it('Should have last link as logout', () => {
	// 		cy.get('li:nth-child(3)').should('have.text', 'Sign up')
	// 	})
	// })

	// describe('Page Styles are correct', () => {
	// 	it('Navbar should be creamish', () => {
	// 		cy.get('.navigation').should('have.css', 'background-color', 'rgb(255, 228, 196)')
	// 	})
	// 	it('Body should be black in color', () => {
	// 		cy.get('.section-test').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
	// 	})
	// 	it('font family should be poppins', () => {
	// 		cy.get('body').should('have.css', 'font-family', 'poppins, sans-serif')
	// 	})
	// })

	// describe('Index Page loaded successfully', () => {
	// 	it('Should visit the home page and show content', () => {
	// 		cy.get('h1')
	// 	})
	// 	it('Should have 3 links', () => {
	// 		cy.get('nav ul li').should('have.length.gte', '3')
	// 	})
	// 	it('Should have a brand logo', () => {
	// 		cy.get('.navigation__brand').should('have.text', 'Crenet Test Day')
	// 	})
	// })

	// describe('Index Page should HAVE 3 BUTTONS ', () => {
	// 	it('Page should habe primary button', () => {
	// 		cy.get('.btn--primary')
	// 	})
	// 	it('Page should habe secondary button', () => {
	// 		cy.get('.btn--secondary')
	// 	})
	// 	it('Page should habe tertiary button', () => {
	// 		cy.get('.btn--tertiary')
	// 	})
	// })

	describe('Button clicks should show snackbars', () => {
		let actionButton1, actionButton2, actionButton3, snackBarAlert

		beforeEach(() => {})

		it('button 1 should show a message when clicked', () => {
			cy.get('.btn--primary').click({ force: true })
			cy.get('#snackbar').should('have.class', 'show')
			cy.get('#snackbar').should('have', 'Hi from 1')
		})
		it('button 2 should show a message when clicked', () => {
			cy.get('.btn--secondary').click({ force: true })
			cy.get('#snackbar').should('have.class', 'show')
			cy.get('#snackbar').should('have', 'Hi from 2')
		})
		it('button 3 should show a message when clicked', () => {
			cy.get('.btn--tertiary').click({ force: true })
			cy.get('#snackbar')
				.should('have.class', 'show')
				.and('have.text', 'Hi from 3')
			// cy.get('#snackbar')
		})
	})
})
