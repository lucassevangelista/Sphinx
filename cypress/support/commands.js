Cypress.Commands.add('makeRequest', (Url, Method, Headers, Body) => {
  cy.request({
    url: Url,
    method: Method,
    headers: Headers,
    body: Body,
    failOnStatusCode: false,
  })
    .its('.')
    .should('not.be.empty')
    .then((res) => res)
})
