describe("Caso simple: Busqueda pantalla consulta de poliza", () => {
  it("tests Caso simple: Busqueda pantalla consulta de poliza", () => {
    cy.viewport(1608, 937);
    cy.visit(
      "https://pre.transfiriendo.com:448/PortaliSoatSE/Webforms/Account/Views/Index.aspx"
    );
    cy.get("#iuserName").click();
    cy.get("#iuserName").type("ISOATSE");
    cy.get("#ipassword").click();
    cy.get("#ipassword").type("!QAZxsw2");
    cy.get("#btn_login").click();
    cy.location("href").should(
      "eq",
      "https://pre.transfiriendo.com:448/PortaliSoatSE/Webforms/Account/Views/Default.aspx"
    );
    cy.get("#gestión_de_pólizas > span.ng-binding").click();
    cy.get(
      "#menu > div > ul:nth-of-type(2) > li > ul:nth-of-type(5) > li > a > span.ng-binding"
    ).click();
    cy.get(
      "#menu ul:nth-of-type(2) ul:nth-of-type(5) > li > ul:nth-of-type(2) span"
    ).click();
    cy.wait(10000);
    //30 minutos de correcciones
    cy.get('iframe[id="formResponse"]').then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find("#container_txtDocumentNumber")
        .find("#txtDocumentNumber")
        .click()
        .type("1053222111");
      cy.wrap($body).find("#btnSearch").click();
    });
  });
});
