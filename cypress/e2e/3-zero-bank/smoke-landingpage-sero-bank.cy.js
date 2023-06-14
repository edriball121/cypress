//Variables
const user = "username";
const pass = "password";

//Set de pruebas 1
//con it.only corremos solo ese caso de prueba
describe("Pruebas de humo landingPage Zero Bank", () => {
  it("Visualizar pagina principal", () => {
    cy.visit("http://zero.webappsecurity.com/");
    cy.get(".active > img").should("be.visible");
    cy.get(".brand").contains("Zero Bank");
    cy.get("#signin_button").should("be.visible");
  });
});

//set de pruebas 2
describe("Prueba funcionales Zero Bank", () => {
  beforeEach(() => {
    cy.visit('http://zero.webappsecurity.com/')
  })
  //Caso 1
  it("1. Realizar transferencia bancaria", () => {
    cy.get("#signin_button").click();
    cy.get("#user_login").type(user);
    cy.get("#user_password").type("password");
    cy.get(".btn").click();
    cy.get("#transfer_funds_tab > a").click();
    cy.get("#tf_fromAccountId").select("1");
    cy.get("#tf_toAccountId").select("5");
    cy.get("#tf_amount").type("300");
    cy.get("#tf_description").type("Transferencia de prueba");
    cy.get("#btn_submit").click();
    cy.get("#btn_submit").click();
    cy.get(".board-header").contains(
      "Transfer Money & Make Payments - Confirm"
    );
  });

  //Caso 2
  it("2. Validar grafico en pastel", () => {
    cy.get("#signin_button").click();
    cy.get("#user_login").type(user);
    cy.get("#user_password").type(pass);
    cy.get(".btn").click();
    cy.get("#money_map_tab > a").click();
    cy.get("#ext-sprite-1275").should("be.visible");
    cy.get('#ext-sprite-1167 > tspan').contains("Retail").click();
    cy.get("#ext-sprite-1275").should("not.be.visible");
    cy.get('#account_summary_tab > a').click();
  });
});

//Set de pruebas 3
