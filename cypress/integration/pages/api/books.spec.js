describe("Book test", () => {
  it("Confirms the number of books in your local library", () => {
    cy.visit("http://localhost:3000");
    cy.request("GET", "api/books").as("books");

    cy.get("@books").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      expect(response.body).to.have.length(3);
    });
  });
});
