// https://docs.cypress.io/api/introduction/api.html
function searchUser() {
  cy.get('[data-testid="search-field"] input').type('nathanccarnelos')
  cy.get('[data-testid="search-button"]').click()
}

describe('My First Test', () => {
  it('validate search-field', () => {
    cy.visit('/')
    cy.contains('[data-testid="search-field"]', 'nome do usuário')
    cy.contains('[data-testid="search-button"]', 'Buscar')
  })
  it('validate search user', () => {
    cy.visit('/')
    searchUser()
    cy.contains('[data-testid="user-name"]', 'Nathan Carnelós')
  })
  it('validate user repos on click', () => {
    cy.visit('/')
    searchUser()
    cy.get('[data-testid="Repos-button"]').click()
    cy.get('[data-testid="Repos-list"] div.v-list-item').should(($div) => {
      expect($div).to.have.length(17)
    })
  })
  it('validate user starred on click', () => {
    cy.visit('/')
    searchUser()
    cy.get('[data-testid="Starred-button"]').click()
    cy.get('[data-testid="Starred-list"] div.v-list-item').should(($div) => {
      expect($div).to.have.length(7)
    })
  })
  it('searching user from url param', () => {
    cy.visit('/nathanccarnelos')
    cy.contains('[data-testid="user-name"]', 'Nathan Carnelós')
  })
})
