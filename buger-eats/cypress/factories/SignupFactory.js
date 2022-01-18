

var faker = require('faker') // Importar biblioteca Faker
var cpf = require('gerador-validador-cpf') // Importar biblioteca para gerar CPF

export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name:`${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
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

        return data;
    }
}