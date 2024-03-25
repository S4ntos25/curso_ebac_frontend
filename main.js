function verificarCadastro() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    if (nome === '' || telefone === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let tabela = document.getElementById("tabelaContatos");
    let linhas = tabela.rows;

    for (let i = 1; i < linhas.length; i++) {
        let celulaNome = linhas[i].cells[0];
        if (celulaNome.innerHTML === nome) {
            alert("Este nome já está cadastrado na agenda.");
            return;
        }
    }
    
    adicionarContato();
}

function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    let tabela = document.getElementById("tabelaContatos");
    let novaLinha = tabela.insertRow(-1);


    let celulaNome = novaLinha.insertCell(0);
    
    
    let celulaTelefone = novaLinha.insertCell(1);

    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}