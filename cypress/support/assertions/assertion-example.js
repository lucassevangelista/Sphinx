class AssertionsExample {
  assrtionMethodExample(status){
    cy.get('@loginRealizado').should((res) => {
      expect(res.body).not.to.be.empty
      expect(res.status).to.be.equal(status)
    })
  }
}
export default new AssertionsExample()
