describe("Login e adionar no carrinho", () => {
  it("Acesso com Login", () => {
    let login = {
      email: "luizclaudiovendra@gmail.com",
      senha: 26062001,
    };
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".login").should("have.text", "\n" + "\t\t\tSign in\n" + "\t\t");
    cy.get(".login").click();
    cy.get("#login_form > .page-subheading").should("have.text", "Already registered?");
    cy.get("#email").type(login.email);
    cy.get("#passwd").type(login.senha);
    cy.get("#SubmitLogin > span").click();
  });
  it("Adicionando no carrinho", () =>{
    cy.get(".logo").click();
    cy.scrollTo(0, 500);
  });
});
