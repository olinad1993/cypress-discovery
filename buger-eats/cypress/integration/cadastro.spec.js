describe('Cadastro de Entregador' , () => {

    it('Usuário deve se tornar um entregador' , () => {
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') // problema no espaço da linha

        var entregador = {
            nome:'Danilo Ferreira',
            cpf: '00000014141',
            email: 'danilo@hotmail.com',
            whatsapp: '22999999999',

            endereco: {
                cep:'28470000',
                rua: 'Rua dos Bobos',
                numero: '100',
                complemento: 'Ap 102',
                bairro: 'Casa Velha',
                cidade_uf: 'Pádua/RJ'
            }

        }

        cy.get('input[name="name"]').type(entregador.nome);
        cy.get('input[name="cpf"]').type(entregador.cpf);
        cy.get('input[name="email"]').type(entregador.email);
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp);

        // ENDEREÇO

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero);
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento);
    })
})