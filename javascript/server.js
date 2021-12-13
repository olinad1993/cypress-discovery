
const express = require('express') // importando
const app = express() // ativando o express
 
app.get('/', function (req, res) { // metodo GET da pagina principal
  res.json({message:'Olá Cypress Discovery'}) // Resultado da chamada, resposta res.jason passa para json.
})
 
app.get('/avengers' , function(req, res) {
    var avengers = ['Tony Stark' , 'Steve Rogers' , 'Natasha Romanoff' , 'Clint Barton' , 'Bruce Banner' , 'Peter Parker' ]
    return res.json({data: avengers})
})

app.get('/cnh' , function (req, res){
    const idade = req.query.idade 

    if(!idade){ // Resolvendo erro quando não passa informação nenhuma
       return res.json ({message: 'Idade é um campo obrigatório.'})
    }
    
    var idadeNum = parseInt(idade)
    
    if (idadeNum >= 18) {
        return res.json({message:'OK, você pode tirar a sua CNH.'})
    
    } else if (idadeNum > 4) {
        return res.json({message:'Você é menor de idade, por enquanto sugiro andar de bike.'})

    } else {
       return res.json({message:'Melhor você tomar leite...'})
    }

})
app.listen(3000) // porta


