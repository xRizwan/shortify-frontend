// https://docs.cypress.io/api/introduction/api.html

const TEST_URL = "https://www.google.com";

describe("Url Shortening Test", () => {
  it("Shortens urls properly", () => {
    cy.visit("/");
    cy.contains("Shorten urls!");

    cy.get("[data-cy=short-url]").should("not.be.visible");

    cy.get("[data-cy=url-input]").clear().type(TEST_URL);
    cy.get("[data-cy=shorten-button]").click();

    cy.get("[data-cy=short-url]").should("be.visible");
    cy.get("[data-cy=short-url]").should("not.be.empty");

    cy.window()
      .its("navigator.permissions")
      .invoke("query", { name: "clipboard-read" })
      .its("state")
      .then(cy.log);

    cy.get("[data-cy=copy-button]").should("be.visible").click();

    cy.window()
      .then(
        (win) =>
          new Cypress.Promise((resolve, reject) =>
            win.navigator.clipboard.readText().then(resolve).catch(reject)
          )
      )
      .then((val) => {
        cy.get("[data-cy=short-url]").invoke("text").should("equal", val);
      });
  });
});
