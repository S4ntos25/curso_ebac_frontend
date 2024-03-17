const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./festando.jpeg "alt="Emoji celebrando" />';
const imgReprovado = '<img src="./reprovado.jpg "alt="Emoji chorando" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span cla="resulado aprovado">Aprovado</span>';
const spanReprovado = '<span cla="resulado reprovado">Reprovado</span>' ;
const notaMInima = parseFloat(prompt("Digite a nota mínima"));



let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicinaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicinaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNotaAtividade.value)) {
        alert(`A atividade: ${inputNotaAtividade.value)} ja foi inserida`);
    }
    else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMInima? imgAprovado : imgReprovado}</td>`;
    linha += `<tr>`;

    linhas += linhas;
    }

    inputNomeAtividade.value = '';
    inputNomeAtividade.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const atualizaMediaFinal = calcularMediaDinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMInima ? spamAprovado : spanReprovado;
}

function calcularMediaDinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas [i];
    }
    return somaDasNotas / notaas.length;
}