var quadrado = document.getElementById("quadro");
var botao = document.getElementById("mover");

console.log(quadrado);
console.log(botao);


botao.onclick = function(){
    quadrado.classList.toggle("animated");
}