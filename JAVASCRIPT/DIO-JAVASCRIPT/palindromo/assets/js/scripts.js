//O ideal era colocar os DOMs dentro de variaveis e trabalhar em cima delas pelas variaveis, mas ao declara-las e executa-las, o console não conseguia receber a info correta das DOMS.


var containerResposta = document.getElementById("container-resposta");
var textoPalindromo = document.getElementsByClassName("palindromoText")[0].value;


var h1 = document.createElement("h1");
var label = document.createElement("label");
var div = document.createElement("div");
var br = document.createElement("br");




var palindromo = document.createTextNode("Isso é um Palindromo! Parabens");


var palindromoTexto = document.getElementsByClassName("palindromoText")[0].value.split("").reverse();

function verificaçaoPalindromo() {

    if (document.getElementsByClassName("palindromoText")[0].value == document.getElementsByClassName("palindromoText")[0].value.split("").reverse().join("")) {


        var palindromo = document.createTextNode("Isso é um Palindromo! Parabens");


        label.appendChild(palindromo);
        h1.appendChild(document.createTextNode(document.getElementsByClassName("palindromoText")[0].value));


        div.appendChild(h1);
        div.appendChild(label);


        containerResposta.appendChild(div);


    } else {
        console.log("Isso não é um Palindromo");

        var infoTexto = document.createTextNode("Isso não é um Palindromo");

        h1.appendChild(infoTexto);
        containerResposta.appendChild(h1);
    }
}