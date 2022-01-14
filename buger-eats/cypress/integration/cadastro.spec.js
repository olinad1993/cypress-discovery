import SignupPage from '../pages/SignupPage'

describe('Cadastro de Entregador' , () => {

    let signup = new SignupPage()

    // before(function (){
    //     cy.log('Tudo aqui é executado uma unica vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(function (){
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    // })


    // after(function (){
    //     cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function(){
    //     cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os casos de testes')
    // })

    it('Usuário deve se tornar um entregador' , () => {

        let deliver = {
            name:'Danilo Ferreira',
            cpf: '00000014141',
            email: 'danilo@hotmail.com',
            whatsapp: '22999999999',

            address: {
                postalcode:'04534011',
                street: 'Rua Joaquim Floriano',
                number: '100',
                details: 'Ap 102',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },

            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto' , () => {

        let deliver = {
            name:'Danilo Ferreira',
            cpf: '000000141AA',
            email: 'danilo@hotmail.com',
            whatsapp: '22999999999',

            address: {
                postalcode:'04534011',
                street: 'Rua Joaquim Floriano',
                number: '100',
                details: 'Ap 102',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },

            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})