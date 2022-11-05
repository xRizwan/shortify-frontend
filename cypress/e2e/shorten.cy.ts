// https://docs.cypress.io/api/introduction/api.html

const TEST_URL = "https://www.google.com";

describe("Url Shortening Test", () => {
  it("Shortens url properly", () => {
    cy.visit("/");
    cy.intercept({ method: "POST", url: "**/api/shortify" }).as("shortenApi");

    cy.contains("Shorten urls!");

    cy.get("[data-cy=short-url]").should("not.be.visible");

    cy.get("[data-cy=url-input]").clear().type(TEST_URL);
    cy.get("[data-cy=shorten-button]").click();

    cy.wait("@shortenApi");
    cy.get("[data-cy=short-url]").should("be.visible");
    cy.get("[data-cy=short-url]").should("not.be.empty");
  });

  it("Copies short url properly", () => {
    cy.window()
      .its("navigator.permissions")
      .invoke("query", { name: "clipboard-read" })
      .its("state")
      .then(cy.log);

    cy.get("[data-cy=copy-button]").should("be.visible").click();

    cy.window()
      .invoke("navigator.clipboard.readText")
      .then((val) => {
        cy.get("[data-cy=short-url]").invoke("text").should("equal", val);
      });
  });
});
