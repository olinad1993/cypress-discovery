import SignupPage from '../pages/SignupPage'

describe('Cadastro de Entregador' , () => {
    
    beforeEach(()=> {
        cy.fixture('deliver').then((d)=> {
            this.deliver = d
        })
    })

     let signup = new SignupPage()

    it('Usuário deve se tornar um entregador' , () => {
        signup.go()
        signup.fillform(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto' , () => {

        signup.go()
        signup.fillform(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})