describe("User Creation", () => {
  const TEST_USERNAME = "TestUsername";
  const TEST_PASSWORD = "TestPassword";

  it("user creation works properly", () => {
    cy.visit("/");
    cy.get("[data-cy=signup]").should("be.visible").click();

    cy.url().should("contain", "/register");

    cy.get("[data-cy=username-input]")
      .should("be.visible")
      .clear()
      .type(TEST_USERNAME);
    cy.get("[data-cy=password-input]")
      .should("be.visible")
      .clear()
      .type(TEST_PASSWORD);

    cy.get("[data-cy=submit-button]").should("be.visible").click();

    cy.get(".successToast").should(
      "contain.text",
      "User created successfully."
    );
  });

  it("creating user with the same username fails", () => {
    cy.visit("/register");

    cy.get("[data-cy=username-input]")
      .should("be.visible")
      .clear()
      .type(TEST_USERNAME);
    cy.get("[data-cy=password-input]")
      .should("be.visible")
      .clear()
      .type(TEST_PASSWORD);

    cy.get("[data-cy=submit-button]").should("be.visible").click();

    cy.get(".errorToast").should("contain.text", "Username already exists");
  });
});
