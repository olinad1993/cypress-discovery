var avengers =['Tony Stark' , 'Steve Rogers' , 'Natasha Romanoff' , 'Clint Barton' , 'Bruce Banner' , 'Peter Parker' ] // para pegar somente a posição [numero da posição]

function listaVingadores(){

    //API
    var ul = document.getElementById('avengers') // Pegando tag html UL com a lista.
    ul.innerHTML = '' // Corrigindo BUG que ao clicar no botão novamente ele duplica as informações

    avengers.forEach(function(a){ // Faz um loop dentro da lista dos vingadores.

        var li = document.createElement('li') // Criando elemento da lista no HTML.
        var text = document.createTextNode(a) // Criando o texto da lista do html.
        li.appendChild(text) // pegando texto e adicionando no elemento, vinculo.
        ul.appendChild(li) // Adiconando cada Li dentro da lista.
    }) 
}