/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
      register(username: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("register", (username, password) => {
  cy.visit("/register");
  cy.intercept({ method: "POST", url: "**/api/users" }).as("userApi");

  cy.get("[data-cy=username-input]").clear().type(username);
  cy.get("[data-cy=password-input]").clear().type(password);

  cy.get("[data-cy=submit-button]").click();

  cy.wait("@userApi");
  cy.get(".successToast").should("contain.text", "User created successfully.");
});

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/login");
  cy.intercept({ method: "POST", url: "**/login" }).as("loginApi");

  cy.get("[data-cy=username-input]").clear().type(username);
  cy.get("[data-cy=password-input]").clear().type(password);

  cy.get("[data-cy=submit-button]").click();

  cy.wait("@loginApi");
  cy.get(".successToast").should("contain.text", "Logged in!");
});

export {};
