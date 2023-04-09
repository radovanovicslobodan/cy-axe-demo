/// <reference types="Cypress" />

describe("Daon A11y", () => {
  it("intro page is accessible", () => {
    cy.visit(
      "https://emea-saas-dobs-oidc-rp.identityx-cloud.com/rpdemo/product/relyingParty"
    );
    cy.get("a").contains("Apply now").click();
    cy.injectAxe();
    cy.checkA11y();
  });
  it("consent page is accessible", () => {
    cy.get("#get_started").click();
    cy.injectAxe();
    cy.checkA11y();
  });
  it("switch to mobile page is accessible", () => {
    cy.get("#checkbox_label").click();
    cy.get("#agree").click();
    cy.injectAxe();
    cy.checkA11y();
  });
});
