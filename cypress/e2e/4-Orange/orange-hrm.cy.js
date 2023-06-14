/*
Actividad de automatización

Sitio de pruebas: https://opensource-demo.orangehrmlive.com/
( Username : Admin | Password : admin123 )
Automatiza una suite de pruebas  con casos para que se valide los elementos básicos de la página de inicio:
+Se debe validar que el logo "Orange HRM"  de la parte superior siempre sea visible
+Se debe validar que el campo username (txtUsername) sea visible
+Se debe válidar que en la parte inferior exista una etiqueta con un texto que diga la version de la pagina "OrangeHRM "
+Se debe validar que el boton "login" sea visible

+Automatiza un caso para validar la pagina de adicionar usuarios
+Ingresa en la pagina como un administrador con el usuario y password indicado en la parte superior
+En la parte superior, debes buscar la pestaña de admin y dar click
+Una vez estes en Admin,  debes dar click en el boton verde que dice "Add"
Valida que puedas ingresar texto en el campo, Employee name, username, password and confirm password

Nota: Prueba a correr tus casos desde el TestRunner y tambien  desde linea de comandos usando el script runner y verifica que el video de la prueba quede generado
*/
const user = "Admin";
const pass = "admin123";

describe("Pruebas Orange HRM", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });
  /*it("01. Validar pagina de inicio Orange HRM", () => {
    cy.get(".orangehrm-login-branding > img").should("be.visible");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).should("be.visible");
    cy.get(".orangehrm-copyright-wrapper > :nth-child(1)").contains(
      "OrangeHRM OS 5.3"
    );
    cy.get(".oxd-button").should("be.visible");
  });*/
  it("02. Validar pagina de inicio - Registro de usuarios", () => {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon").select('ESS');
  });
});
