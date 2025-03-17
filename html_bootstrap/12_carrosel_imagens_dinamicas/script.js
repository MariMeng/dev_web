var carrossel = new bootstrap.Carousel(document.getElementById("carouselExample"));
var numImagens = document.getElementById("counter");
var itens = document.querySelectorAll(".carousel-item");
var btnProx = document.getElementById("nextButton");
var btnAnte = document.getElementById("prevButton");
var i = 0;

btnAnte.onclick = function(){
    carrossel.prev();
    i = (i - 1 + tam) % itens.length;
    contadorImagem();
}

btnProx.onclick = function(){
    carrossel.next();
    i = (i + 1) % itens.length;
    contadorImagem();
}


function contadorImagem() {
    numImagens.textContent = `${i + 1}/${itens.length}`;
}
    contadorImagem();