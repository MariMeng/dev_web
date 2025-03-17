var pessoas = document.querySelectorAll(".accordion-collapse");

async function carregarDados(id, elemento) {
        const dados = await fetch(`https://jsonplaceholder.typicode.com/users`);  //o await é para esperar pelo retorno, sem ele n funciona
        const pessoas = await dados.json();  
        const pessoa = pessoas[id - 1]; 

        elemento.innerHTML = `
            <h5>Nome: ${pessoa.name}</h5>
            <p>Email: ${pessoa.email}</p>
            <p>Telefone: ${pessoa.phone}</p>
        `; 
}

document.addEventListener("DOMContentLoaded", function () {
    pessoas.forEach((p, i) => {
        p.addEventListener("show.bs.collapse", () => {
            const info = p.querySelector(".accordion-body");
            carregarDados(i + 1, info);
        });
    });
});
