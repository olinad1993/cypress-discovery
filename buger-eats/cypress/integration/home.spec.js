describe('home page', () => {
    it('app deve estar online', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })

})




// describe = Swit de teste
// it = palavra reservada para o caso de teste.
// cy = acessa os recursos do cypress
// visit = funcao do cypress.
// viewport = definir tamanho da tela.
// should = validar alguma propriedade.
// have.text (deve ter um texto) e depois passar o texto.