//Elemento MAIN
const GET_PATIO = document.getElementById('patio') as HTMLTableElement;

// Elementos de criação da Table

const TR = document.createElement('tr') as HTMLTableRowElement;


//Elementos de aquisição de informação dos inputs


//Nome
const inputNome = document.getElementById('nomeCarro') as HTMLInputElement;


const pegaValoresNome = inputNome.addEventListener('input', function (event) {

    const valuesNome = event.target as HTMLInputElement;
    var infoValueNome = valuesNome.value;
    return infoValueNome && console.log(infoValueNome);
})


//Placa


const numPlaca = document.getElementById('numeroPlaca') as HTMLInputElement;



const pegaValoresPlaca = numPlaca.addEventListener('input', function (event) {


    const valuesPlaca = event.target as HTMLInputElement;
    var infoValuePlaca = valuesPlaca.value;
    return infoValuePlaca && console.log(infoValuePlaca);
})



//function de criação da table e table rows e vincular a informação obtida em pegaValoresPlaca e pegaValoresNome


function addCarro() {

    //aquisição dos valores obtidos de numPlaca e inputNome.

    var nome = inputNome.value;
    var placa = numPlaca.value;

    //anexação dos valores values numa variavel que os transofrme em textNODE

    var infoNome = document.createTextNode(nome);
    var infoPlaca = document.createTextNode(placa);


    //criação da table div e inserir os elementos do pegaValoresPlaca e pegaValoresNome neles.

    TR.innerHTML = `<td>${infoNome}</td>
            <td>${infoPlaca}</td>
            <td>${new Date()}</td>
            <td><button class = 'delete'>X</button></td>`

    GET_PATIO.appendChild(TR);
}



