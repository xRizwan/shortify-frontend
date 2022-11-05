describe("Logged-in User Test", () => {
  const TEST_USERNAME = "TestUsername22";
  const TEST_PASSWORD = "TestPassword22";
  const TEST_URL = "https://www.google.com";

  it("logged in user can shorten urls", () => {
    cy.intercept({ method: "GET", url: "**/api/shortify" }).as("shortenApi");

    cy.register(TEST_USERNAME, TEST_PASSWORD);
    cy.login(TEST_USERNAME, TEST_PASSWORD);

    cy.visit("/");
    cy.get("[data-cy=url-input]").clear().type(TEST_URL);
    cy.get("[data-cy=shorten-button]").click();

    cy.get("[data-cy=all]").should("be.visible").click();
    cy.url().should("contain", "/all");
    cy.get("[data-cy=heading]").should("contain", "Shortened URLs");

    cy.wait("@shortenApi");
    cy.get("[data-cy=urls-container]").should("contain", TEST_URL);
  });
});
