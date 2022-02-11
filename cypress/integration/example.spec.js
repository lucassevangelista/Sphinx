import assertionExample from "../support/assertions/assertion-example"
import requestExample from "../support/requests/request-example"

describe('Autenticação', () => {
  it('Realizar login', () => {
    requestExample.requestMethodExample()
    assertionExample.assrtionMethodExample(200)
  })
})
