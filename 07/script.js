var lista = document.getElementById("listau");
var caixa = document.getElementById("lista");
var botao = document.getElementById("adicionar");
var entrada = document.getElementById("entrada");


botao.onclick = function(){
    const elem = document.createElement("li");
    elem.innerHTML = entrada.value;    
    lista.appendChild(elem);

}