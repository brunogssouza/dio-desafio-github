//Aqui será selecionado o container da lista de afazeres e que posteriormente teremos que fazer um appendChild para que receba as infos do InfoTexto

var checkboxContainer = document.getElementById("checkbox-container");


//Criação dos elementos HTML via DOM. Será necessario um div, label, input e alteração do tipo de input.

var div = document.createElement("div");
var label = document.createElement("label");
var checkbox = document.createElement("input");
checkbox.type = "checkbox";



// Nesta função criamos um var que receberá a info do input (infoTexto), posteriomente vincularemos o input a label criada, vincularemos o texto a label criada, pegaremos a label e vincularemos a uma div. Por fim vincularemos a div ao container.

function adicionarNovaTarefa() {

    var infoTexto = document.createTextNode(document.getElementsByClassName("input-tarefa")[0].value);
    label.appendChild(checkbox);
    label.appendChild(infoTexto);
    div.appendChild(label);
    checkboxContainer.appendChild(div);


    console.log(infoTexto);
    console.log(label);
    console.log(div);
    console.log(checkboxContainer);


}