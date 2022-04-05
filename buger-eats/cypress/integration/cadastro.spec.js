import SignupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro de Entregador', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    var signup = new SignupPage()

    it('Usuário deve se tornar um entregador', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '00000000141AA'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Email Incorreto', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Requer dados' , function(){
         const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}

         ]

         before(function(){
            signup.go()
            signup.submit()

         })

         messages.forEach(function(msg){
             it(`${msg.field} is required` , function(){
                 signup.alertMessageShouldBe(msg.output)
             })
         })
    })

    // it('Requer dados', function(){
        
    //     signup.alertMessageShouldBe('É necessario informar o nome')
    //     signup.alertMessageShouldBe('É necessário informar o CPF')
    //     signup.alertMessageShouldBe('É necessário informar o email')
    //     signup.alertMessageShouldBe('É necessário informar o CEP')
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    //     signup.alertMessageShouldBe('Selecione o método de entrega')
      
})