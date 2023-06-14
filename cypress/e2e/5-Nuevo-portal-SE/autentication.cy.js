describe("Autenticación seguros del estado", () => {
  it("Registrar usuario nuevo", () => {
    cy.visit(
      "https://pre.transfiriendo.com:448/PortaliSoatSE/Webforms/Account/Views/Index.aspx"
    );
    cy.get("#iuserName").type("Edwin");
    cy.get("#ipassword").type("Pru.eba1*");
    cy.get("#btn_login").click();
    cy.get("#btn_login").should("be.visible");
    cy.get("#contactenos > .ng-binding").click();
    cy.get("#formResponse").should("be.visible");
    cy.get(".footer-serbal > :nth-child(2)").contains(
      "Versión 2022.5.3.0 PRE01"
    );
  });
});
