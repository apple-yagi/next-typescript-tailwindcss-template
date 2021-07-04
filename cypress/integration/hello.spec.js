describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("", () => {
    cy.get("h1").should("contain", "Hello Next App");
  });
});
