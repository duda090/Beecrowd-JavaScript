function processaLinha(linha) {
    // Se a linha for vazia, imprime uma nova linha
    if (!linha) {
        console.log("");
        return;
    }

    // Remove espaços, elimina duplicatas e ordena as letras
    let letras = Array.from(new Set(linha.replace(/\s/g, '').split(''))).sort();

    // Se não houver letras após remoção, imprime uma nova linha
    if (letras.length === 0) {
        console.log("");
        return;
    }

    let intervalos = [];
    let inicio = letras[0];
    let fim = letras[0];

    for (let i = 1; i < letras.length; i++) {
        // Verifica se a letra atual é consecutiva à anterior
        if (letras[i].charCodeAt(0) === letras[i - 1].charCodeAt(0) + 1) {
            fim = letras[i];  // Atualiza o fim da faixa
        } else {
            // Se não for consecutiva, adiciona o intervalo atual
            intervalos.push(inicio === fim ? `${inicio}:${inicio}` : `${inicio}:${fim}`);
            inicio = letras[i];
            fim = letras[i];
        }
    }

    // Adiciona o último intervalo
    intervalos.push(inicio === fim ? `${inicio}:${inicio}` : `${inicio}:${fim}`);

    // Imprime os intervalos com vírgulas e espaços
    console.log(intervalos.join(', '));
}

// Leitura da entrada
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

for (let linha of lines) {
    processaLinha(linha);
}