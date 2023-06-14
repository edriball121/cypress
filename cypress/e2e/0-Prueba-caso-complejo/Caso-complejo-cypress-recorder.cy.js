describe("Caso complejo cypress recorder", () => {
  it("tests Caso complejo cypress recorder", () => {
    cy.viewport(1366, 649);
    cy.visit(
      "https://pre.ifactura.transfiriendo.com:8098/CalidadIFacturaTransfiriendoFaseII/portaladquiriente/pages/auth/portal-ifactura"
    );
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("administrador");
    cy.get("#mat-input-1").type("Transfiriendo@2016");
    cy.get("span.mat-button-wrapper").click();
    cy.get("fuse-nav-vertical-collapse.ng-tns-c213-14 > a > span").click();
    cy.get(
      "fuse-nav-vertical-collapse.ng-tns-c213-14 fuse-nav-vertical-item:nth-of-type(1) span"
    ).click();
    cy.get("div:nth-of-type(3) span.mat-expansion-indicator").click();
    cy.wait(1500);
    cy.get("#mat-expansion-panel-header-2").click().click();
    cy.get("#mat-input-5").type("CasoComplejo");
    cy.get("#mat-select-value-3").click();
    cy.get("div.cdk-overlay-container div > input").type("consa{enter}");
    cy.get("#mat-input-6").click();
    cy.get("#mat-input-6").type("100200800");
    cy.get("#mat-input-7").click();
    cy.get("#mat-input-7").type("100200800");
    cy.get("div:nth-of-type(4) div.mat-select-arrow-wrapper > div").click();
    cy.get("#mat-option-2045 > span").click();
    cy.get("#mat-input-8").click();
    cy.get("#mat-input-8").type("CasoComplejo");
    cy.get("#mat-select-12 span").click();
    cy.get("#mat-option-259 > span").click();
    cy.get("#mat-select-14 span").click();
    cy.get("#mat-option-605 > span").click();
    cy.get("#mat-input-9").click();
    cy.get("#mat-input-9").type("Caribe");
    cy.get(
      "mat-form-field.paddingbottom div.mat-form-field-flex > div"
    ).click();
    cy.get("#mat-input-10").type("calle 34");
    cy.get("#mat-input-11").click();
    cy.get("#mat-input-11").type("170002");
    cy.get("#mat-input-12").click();
    cy.get("#mat-input-12").type("erivera@transfiriendo.com");
    cy.get(
      "mat-form-field.ng-tns-c59-42 div.mat-form-field-flex > div"
    ).click();
    cy.get("#mat-input-13").click();
    cy.get("#mat-input-13").type("3136484435");
    cy.get("div:nth-of-type(9) div.mat-form-field-flex > div").click();
    cy.get("#").click();
    cy.get("div.cdk-overlay-backdrop").click();
    cy.get("button.mat-raised-button mat-icon").click();
    cy.get("fuse-nav-vertical-collapse.ng-tns-c213-13 > a > span").click();
    cy.get("f").click();
    cy.get("#mat-select-value-17").click();
    cy.get("div.cdk-overlay-container div > input").type("consa");
    cy.get("#mat-option-2724 > span").click();
    cy.get("#mat-input-17").click();
    cy.get("#mat-input-17").type("qa");
    cy.get("#cdk-step-content-0-0 div.divSiguienteAtras mat-icon").click();
    cy.get("#mat-input-29").click();
    cy.get("#mat-input-29").type("100200800");
    cy.type("{enter}");
    cy.get("#cdk-step-content-0-1 button.mat-stepper-next > mat-icon").click();
    cy.get("#icon-add").click();
    cy.get("#mat-option-3845 > span").click();
    cy.get("div.example-container div.mat-select-arrow-wrapper").click();
    cy.get("#mat-option-3826 > span").click();
    cy.get("div.cdk-overlay-container div.example-container mat-icon").click();
    cy.get("div.cdk-overlay-container button:nth-of-type(1)").click();
    cy.get("#cdk-step-content-0-2 > button").click();
    cy.get("tr:nth-of-type(12)").click();
    cy.get("tr:nth-of-type(12) > td.total > input").click();
    cy.get("#cdk-step-content-0-2").click();
    cy.get("#cdk-step-content-0-2 button.mat-stepper-next > mat-icon").click();
    cy.get("#mat-input-28").click();
    cy.get("#mat-input-28").type("");
    cy.get("#mat-input-28").type("N/A");
    cy.get("form > button").click();
    cy.get("button.swal2-confirm").click();
  });
});
