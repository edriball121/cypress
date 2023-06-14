describe("Emisión Factura", () => {
  it("tests Emisión Factura", () => {
    cy.viewport(1060, 657);
    cy.visit(
      "https://pre.ifactura.transfiriendo.com:8098/CalidadIFacturaTransfiriendoFaseII/portaladquiriente/pages/auth/portal-ifactura"
    );
    cy.get("[id='mat-input-0']").click();
    cy.get("[id='mat-input-0']").type("Administrador");
    cy.get("[id='mat-input-1']").click();
    cy.get("[id='mat-input-1']").type("Transfiriendo@2016");
    cy.get("[index='0']");
    cy.get('.recaptcha-checkbox-border').click();
    /*cy.get(
      'xpath///*[@id="login-form"]/form/mat-form-field[2]/div/div[1]/div[2]/mat-icon'
    ).click();
    cy.get(
      'xpath///*[@id="login-form"]/form/mat-form-field[2]/div/div[1]/div[2]/mat-icon'
    ).click();*/
    
    cy.get('xpath///*[@id="recaptcha-anchor"]/div[1]').click();
    cy.get('xpath///*[@id="login-form"]/form/button/span[1]').click();
    cy.get(
      'xpath///*[@id="wrapper"]/div/fuse-toolbar/mat-toolbar/div/div[1]/button/span[1]/mat-icon'
    ).click();
    cy.get(
      'xpath///*[@id="main-navigation"]/fuse-nav-vertical-group[1]/div[2]/fuse-nav-vertical-collapse[6]/a/span'
    ).click();
    cy.get(
      'xpath///*[@id="main-navigation"]/fuse-nav-vertical-group[1]/div[2]/fuse-nav-vertical-collapse[6]/div/fuse-nav-vertical-item[3]/a/span'
    ).click();
    cy.get("[id='mat-input-5']").click();
    cy.get("[id='mat-input-5']").type("Emision Factura");
    cy.get("[id='mat-select-value-1']").click();
    cy.get(
      'xpath///*[@id="mat-option-0"]/span/ngx-mat-select-search/div/input'
    ).type("con");
    cy.get("[id='mat-option-64'] > span").click();
    cy.get(
      "[id='cdk-step-content-0-0'] div.divSiguienteAtras mat-icon"
    ).click();
    cy.get("[id='mat-input-16']").click();
    cy.get("[id='mat-input-16']").type("1057758133");
    cy.get("[id='searchacquirer'] > div").click();
    cy.get("[id='mat-input-16']").click();
    cy.type("{enter}");
    cy.get("[id='mat-input-21']").click();
    cy.get(
      "[id='cdk-step-content-0-1'] button.mat-stepper-next > mat-icon"
    ).click();
    cy.get("[id='icon-add']").click();
    cy.get("[id='mat-option-1218'] > span").click();
    cy.get("[id='mat-select-value-33']").click();
    cy.get("[id='mat-option-1255'] > span").click();
    cy.get('xpath///*[@id="mat-select-30"]/div/div[2]').click();
    cy.get("[id='mat-option-1280'] > span").click();
    cy.get("div.cdk-overlay-container [id='icon-add']").click();
    cy.get(
      "html > body > div.cdk-overlay-container > div.cdk-global-overlay-wrapper > [id='cdk-overlay-1'] > [id='mat-dialog-0'] > fuse-app-item-comprobante-v2 > div > div.contentDialog > form > div.btnSend > [id='btn-send'] > [id='mat-send']"
    ).click();
    cy.get("[id='cdk-step-content-0-2'] > [id='btn-send']").click();
    cy.get(
      'xpath///*[@id="cdk-step-content-0-2"]/form/div[4]/table/tbody/tr/td[1]'
    ).click();
    cy.get('xpath///*[@id="cdk-step-content-0-2"]/form/div[5]/table').click();
    cy.get('xpath///*[@id="cdk-step-content-0-2"]/form/div[5]/table').click();
    cy.get(
      "[id='cdk-step-content-0-2'] button.mat-stepper-next > mat-icon"
    ).click();
    cy.get("[id='mat-input-15']").click();
    cy.get("[id='mat-input-15']").type("n/a");
    cy.get("[id='cdk-step-content-0-3'] [id='mat-send']").click();
    cy.get("[id='swal2-html-container']").click();
    cy.get("button.swal2-confirm").click();
  });
});
