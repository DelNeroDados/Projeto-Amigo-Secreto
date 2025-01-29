// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const nomeInput = document.getElementById('nomeAmigo');
    const nome = nomeInput.value.trim();

    // Validar entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar nome ao array
    amigos.push(nome);
    nomeInput.value = ""; // Limpar campo de entrada
    atualizarLista(); // Atualizar a lista de amigos
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpar lista existente

    // Adicionar cada amigo como um elemento <li>
    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Função para sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}

// Adicionar eventos aos botões
document.getElementById('adicionar').addEventListener('click', adicionarAmigo);
document.getElementById('sortear').addEventListener('click', sortearAmigo);