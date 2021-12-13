function verificarIdade () {
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if(nome.value.length == 0){
        alert('Nome obrigatório.')
        return
    }

    if(idade.value.length == 0){
        alert('Idade é um campo obrigatório.')
        return
    }

   
    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18){
        alert('OK, você pode tirar a sua CNH.')

    } else if (idadeNum > 4) {
        alert('Você é menor de idade, por enquanto sugiro andar de bike.')
    } else {
        alert('Melhor você tomar leite...')
    }

}