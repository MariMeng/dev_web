var tabela = document.getElementById("tableBody");
var pagina = document.getElementById("pagination");
var pesquisa = document.getElementById("searchInput");

const pessoas = [
    { nome: "Mariana", idade: 20, cidade: "Porto Velho" },
    { nome: "Pedro", idade: 21, cidade: "Porto Velho" },
    { nome: "Cubone", idade: 2, cidade: "Lavander-Town" },
    { nome: "Pikachu", idade: 2, cidade: "Pallet Town" },
    { nome: "Naruto", idade: 90, cidade: "Konoha" },
    { nome: "Rafaela", idade: 25, cidade: "Rio do Janeiro" },
    { nome: "Ricardo", idade: 20, cidade: "Ji-Parana" },
    { nome: "Paula", idade: 32, cidade: "Naruto, Tokushima" },
    { nome: "Misaki", idade: 29, cidade: "Tokyo" },
    { nome: "Laura", idade: 33, cidade: "São Paulo" },
    { nome: "Lucas", idade: 24, cidade: "João Pessoa" },
    { nome: "Sophia", idade: 38, cidade: "Curitiba" },
];

let pagInicial = 1;
const itemsPorPag = 5;
let pessoasFiltradas = [...pessoas]; 

function dados(pagina) {
    const inicio = (pagina - 1) * itemsPorPag;
    const fim = pagina * itemsPorPag;
    const dadosPagina = pessoasFiltradas.slice(inicio, fim);

    tabela.innerHTML = ""; 

    dadosPagina.forEach(pessoa => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${pessoa.nome}</td>
            <td>${pessoa.idade}</td>
            <td>${pessoa.cidade}</td>
        `;
        tabela.appendChild(row);
    });
    atualizarPag(pessoasFiltradas.length);
}

function atualizarPag(total) {
    const totalPag = Math.ceil(total / itemsPorPag);
    pagina.innerHTML = ""; 

    for (let i = 1; i <= totalPag; i++) {
        const li = document.createElement("li");
        li.classList.add("page-item");
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener("click", function() {
            pagInicial = i;
            dados(pagInicial);
        });
        pagina.appendChild(li);
    }
}

pesquisa.addEventListener("input", function(event) {
    let busca = event.target.value.toLowerCase();

    pessoasFiltradas = pessoas.filter(function(pessoa) {
        return pessoa.nome.toLowerCase().includes(busca) || pessoa.cidade.toLowerCase().includes(busca);
    });
    pagInicial = 1; 
    dados(pagInicial);
});

document.addEventListener("DOMContentLoaded", function() {
    dados(pagInicial);
});
