var numeroAtualElement = document.getElementById("numeroInicial"); //vem o elemento span
var numeroAtual = 0; //definimos o valor inicial do valor atual

function increment() {
    numeroAtual = numeroAtual + 1;
    return numeroAtualElement.innerHTML = numeroAtual;

}

function decrement() {
    numeroAtual = numeroAtual - 1;
    return numeroAtualElement.innerHTML = numeroAtual;

}


