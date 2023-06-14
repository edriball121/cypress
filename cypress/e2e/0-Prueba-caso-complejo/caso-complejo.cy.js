describe("Emisión Factura", () => {
  it("tests Emisión Factura", () => {
    cy.viewport(1920, 1080);
    cy.visit(
      "https://pre.ifactura.transfiriendo.com:8098/CalidadIFacturaTransfiriendoFaseII/portaladquiriente/pages/auth/portal-ifactura"
    );
    cy.get(
      ".mat-form-field.ng-tns-c59-5 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).type("administrador");
    cy.get(
      ".mat-form-field.ng-tns-c59-6 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).type("Transfiriendo@2016");
    cy.get(".mat-focus-indicator").click();
    //clic boton menu seguridad
    cy.get(".mat-ripple.ng-tns-c213-14").click();
    //administrar adquirientes empresa
    cy.get(
      ".open > .children > :nth-child(1) > .mat-ripple > .nav-link-title"
    ).click();
    //crear adquiriente
    cy.wait(1500);
    cy.get("#mat-expansion-panel-header-2").click();
    cy.get("#mat-input-5").type("Prueba Cypress");
    cy.wait(1500);
    //seleccionar empresa
    cy.get(
      ".mat-form-field.ng-tns-c59-27 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).click();
    cy.get(".mat-select-search-inner > .mat-select-search-input").type(
      "consasu{enter}"
    );
    //seleccionar tipo doc
    /*cy.get(
      ".mat-form-field.ng-tns-c59-29 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).click();
    //cambia el id
    cy.get("#mat-option-11 > .mat-option-text").click();*/
    //ingresar identificacion
    cy.get("#mat-input-6").type("100200700");
    //ingresar codigo cliente
    cy.get("#mat-input-7").type("100200700");
    //nombre sucursal
    cy.get("#mat-input-8").type("Prueba Cypress");
    //seleccionar pais
    cy.get(
      ":nth-child(5) > .mat-form-field-should-float > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).click();
    cy.get(".mat-select-search-inner > .mat-select-search-input").type(
      "colombia{enter}"
    );
    //departamento
    cy.get(
      ".mat-form-field.ng-tns-c59-45 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).click();
    cy.get(".mat-select-search-inner > .mat-select-search-input").type(
      "caldas{enter}"
    );
    //ciudad
    cy.get(
      ":nth-child(6) > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).click();
    cy.get(".mat-select-search-inner > .mat-select-search-input").type(
      "manizales{enter}"
    );
    //barrio
    cy.get("#mat-input-9").type("centro");
    //direccion
    cy.get("#mat-input-10").type("Cra 25 nro 18");
    //cod postal
    cy.get("#mat-input-11").type("17001");
    //correo
    cy.get("#mat-input-12").type("erivera@transfiriendo.com");
    //telefono
    cy.get("#mat-input-13").type("3136484435");
    //responsabilidad runt
    cy.get(
      ":nth-child(9) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).click();
    cy.get(".mat-select-search-inner > .mat-select-search-input").type(
      "no{enter}{esc}"
    );
    //boton crear
    cy.get(".botones > .mat-raised-button").click();

    //iniciar emision
    //acceder a procesamiento
    cy.get(".mat-ripple.ng-tns-c213-13").click();
    //acceder a facturar - crear factura
    cy.get(
      ".ng-tns-c213-13.nav-collapse > .children > :nth-child(3) > .mat-ripple"
    ).click();
    //Datos cabecera
    //seleccionar empresa
    cy.get(
      ".mat-form-field.ng-tns-c59-51 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).click();
    cy.get(".mat-select-search-inner > .mat-select-search-input").type(
      "Consasu{enter}"
    );
    cy.wait(1500);
    //seleccionar prefijo
    //cy.get('.mat-form-field.ng-tns-c59-55 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    //observaciones
    cy.get("#mat-input-17").type("Prueba Cypress");
    //siguiente - pasar a información adquiriente
    cy.get(
      "form.ng-star-inserted > .divSiguienteAtras > .mat-stepper-next"
    ).click();
    cy.wait(1500);
    //ingresar documento adquiriente
    cy.get("#mat-input-29").type("100200700{enter}");
    cy.wait(500);
    //siguiente - items
    cy.get(
      "form.ng-untouched > .divSiguienteAtras > .mat-stepper-next"
    ).click();
    //add item - boton
    cy.get("#icon-add").click();
    cy.get("#mat-option-4126 > .mat-option-text").click();
    //impuesto - item
    cy.get("#mat-select-value-49")
      .click();
      //impuesto %
    cy.get('#mat-select-48-panel').type('{downArrow}');
    //agregar impuesto
    cy.get('.list-impuestos > a > #icon-add').click();
    //siguiente
    cy.get('.btnSend > [type="submit"]').click();
    //tarificar
    cy.get('#cdk-step-content-0-2 > #btn-send').click();
    //siguiente- medio de pago
    cy.get('#cdk-step-content-0-2 > .divSiguienteAtras > .mat-stepper-next').click();
    //Emitir
    cy.get('form.ng-untouched > #btn-send').click();
    //aceptar emision
    cy.get('.swal2-confirm').click();
  }); //fin it
});
