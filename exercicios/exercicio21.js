
function judgment(respostasPositivas, respostasNegativas, verificarRespostas, nRespostas) {
    // Remova a linha abaixo, pois você já declarou "respostas" como parâmetro da função.
    // const respostas = 0;
    let respostasPositivas = 0; // Corrigido: inicialize como zero.
    let respostasNegativas = 0; // Corrigido: inicialize como zero.

    // Não é necessário usar "void" em JavaScript.
    // void pergunta();
    // void verificarRespostas( nRespostas);
    // void setenca();

    pergunta();

    function pergunta() {
        // Use "console.log" para exibir mensagens no console.
        console.log("Trocou mensagens com a vítima? [S] sim ou [N] não:");

        verificarRespostas(nRespostas);

        console.log("Esteve no local do crime?? [S] sim ou [N] não:");

        verificarRespostas(nRespostas);

        console.log("É parente ou reside perto da vítima? [S] sim ou [N] não:");

        verificarRespostas(nRespostas);

        console.log("Devia algum valor para a vítima? [S] sim ou [N] não:");

        verificarRespostas(nRespostas);

        console.log("Trabalha ou trabalhou com a vítima? [S] sim ou [N] não:");

        verificarRespostas(nRespostas);

        console.log("Possui algum tipo de relacionamento amoroso com a vítima? [S] sim ou [N] não:");

        verificarRespostas(nRespostas);

        console.log("Ficou feliz pelo destino fatídico na vítima? [S] sim ou [N] não:");

        verificarRespostas(nRespostas);

        console.log("Possui algum tipo de arma de fogo? [S] sim ou [N] não:");

        verificarRespostas(nRespostas);

        setenca();
    }

    function verificarRespostas(nRespostas) {
        // Use "===" para comparar strings em JavaScript.
        if (nRespostas === 'S' || nRespostas === 's') {
            respostasPositivas++;
        }
        else if (nRespostas === 'N' || nRespostas === 'n') {
            respostasNegativas++;
        }
        else {
            console.log("Digite apenas S ou N.");
        }
    }

    function setenca() {
        if (respostasPositivas == 4) {
            console.log("Suspeito do Crime");
        }
        else if (respostasPositivas >= 5 && respostasPositivas <= 7) {
            console.log("Possível Criminoso");
        }
        else if (respostasPositivas == 8) {
            console.log("Assassino");
        }
        else {
            console.log("Inocente");
        }
    }
}
module.exports = { judgment }