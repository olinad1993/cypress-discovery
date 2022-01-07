class SignupPage {

    go(){

        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') // problema no espaço da linha
    }
    // Função para preencher o formulario
    fillform(deliver){

        cy.get('input[name="name"]').type(deliver.name);
        cy.get('input[name="cpf"]').type(deliver.cpf);
        cy.get('input[name="email"]').type(deliver.email);
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp);

        // ENDEREÇO
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode);
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number);
        cy.get('input[name="address-details"]').type(deliver.address.details);

        // VALIDAR CAMPOS
        cy.get('input[name="address"]').should('have.value' , deliver.address.street); 
        cy.get('input[name="district"]').should('have.value' , deliver.address.district); 
        cy.get('input[name="city-uf"]').should('have.value' , deliver.address.city_state); 

        // funcão recebe localizador, juntar localizador CSS com texto
        cy.contains('.delivery-method li' , deliver.delivery_method).click();
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh) // Componente do file upload

    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text' , expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        cy.get('.alert-error').should('have.text' , expectedMessage)
    }
}

export default SignupPage;