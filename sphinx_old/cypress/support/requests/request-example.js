import helpersExample from "../helpers/helpers-example"

class RequestExample {
  requestMethodExample(){
    cy.fixture('example.json').then((data) => {
      data.loginCorretoBody.message = helpersExample.helpersMethodExample()
      cy.makeRequest(
        `${data.urlBase}/login`,
        'POST',
        data.headers,
        data.loginCorretoBody,
      ).as('loginRealizado')
    })
  }
}
export default new RequestExample()
