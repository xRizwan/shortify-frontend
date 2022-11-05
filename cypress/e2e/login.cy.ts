describe("Login Test", () => {
  const TEST_USERNAME = "TestUsername";
  const TEST_PASSWORD = "TestPassword";

  it("registered user can login successfully", () => {
    cy.register(TEST_USERNAME, TEST_PASSWORD);

    cy.visit("/");

    cy.get("[data-cy=all]").should("not.be.visible");
    cy.get("[data-cy=logout]").should("not.be.visible");

    cy.get("[data-cy=login]").should("be.visible").click();

    cy.url().should("contain", "/login");

    cy.get("[data-cy=username-input]")
      .should("be.visible")
      .clear()
      .type(TEST_USERNAME);
    cy.get("[data-cy=password-input]")
      .should("be.visible")
      .clear()
      .type(TEST_PASSWORD);

    cy.get("[data-cy=submit-button]").should("be.visible").click();
    cy.get(".successToast").should("contain.text", "Logged in!");

    cy.get("[data-cy=all]").should("be.visible");
    cy.get("[data-cy=login]").should("not.be.visible");
  });

  it("logged in user can log out", () => {
    cy.get("[data-cy=logout]").should("be.visible").click();
    cy.get("[data-cy=logout]").should("not.be.visible");

    cy.get("[data-cy=login]").should("be.visible");
  });
});
