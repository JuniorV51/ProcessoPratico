describe("Criando Conta", () => {
  it("Acesso ao site", () => {
    cy.visit("http://automationpractice.com/index.php");
  });
  it("Dados pessoal", () => {
    let dados = {
      email: "luizclaudio26045@hotmail.com", // trocar email ao rodar o codigo mais 1 vez
      nome: "luiz Claudio",
      sobrenome: "vendramini Junior",
      senha: "26062001",
    };
    cy.get(".login").should("have.text", "\n" + "\t\t\tSign in\n" + "\t\t");
    cy.get(".login").click();
    cy.get("#create-account_form > .page-subheading").should(
      "have.text",
      "Create an account"
    );
    cy.get("#email_create").type(dados.email);
    cy.get("#SubmitCreate > span").click();
    cy.get(":nth-child(1) > .page-subheading").should(
      "have.text",
      "Your personal information"
    );
    cy.get("#id_gender1").click();
    cy.get("#customer_firstname").type(dados.nome);
    cy.get("#customer_lastname").type(dados.sobrenome);
    cy.get("#passwd").type(dados.senha);
    cy.get("#days").select("26");
    cy.get("#months").select("6");
    cy.get("#years").select("2001");
    cy.get("#newsletter").click();
    cy.get("#optin").click();
  });
  it("Dados de endereco", () => {
    let endereco = {
      company: "NEW HAMPSHIRE",
      endereco1: "1070 Coast Village Rd",
      endereco2: "1070 Coast Village Rd",
      cidade: "Montecito,",
      cep: 93108,
      adicional: "44998870979",
      telefone: 443355949987,
      celular: 44998780912,
      futuro: "Avenida Brasil ",
    };
    cy.get("#company").type(endereco.company);
    cy.get("#address1").type(endereco.endereco1);
    cy.get("#address2").type(endereco.endereco2);
    cy.get("#city").type(endereco.cidade);
    cy.get("#id_state").select("5");
    cy.get("#postcode").type(endereco.cep);
    cy.get("#other").type(endereco.adicional);
    cy.get("#phone").type(endereco.telefone);
    cy.get("#phone_mobile").type(endereco.celular);
    cy.get("#alias").clear().type(endereco.futuro);
    cy.get("#submitAccount > span").click();
  });
});
