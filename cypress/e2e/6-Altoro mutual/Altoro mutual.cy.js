describe("Altoro mutual", () => {
  it("tests Altoro mutual", () => {
    cy.viewport(1303, 896);
  
    cy.visit("http://www.altoromutual.com/");
  
    cy.get("#LoginLink > font").click();
    cy.location("href").should("eq", "http://www.altoromutual.com/login.jsp");
  
    cy.get("#uid").click();
  
    cy.get("#uid").type("jsmith");
  
    cy.get("#passw").click();
  
    cy.get("#passw").type("demo1234");
  
    });

  });