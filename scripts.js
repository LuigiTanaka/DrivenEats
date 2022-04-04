//VARIÁVEIS GLOBAIS
let prato;
let bebida;
let sobremesa;

function selecionarPrato(pratoSelecionado) {
    let jaSelecionado = document.querySelector(".pratos").querySelector(".borda-verde");
    
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
        jaSelecionado.querySelector(".icone").classList.add("esconder");
    }

    pratoSelecionado.classList.add("borda-verde");
    pratoSelecionado.querySelector(".icone").classList.remove("esconder");

    prato = pratoSelecionado.innerHTML;
    habilitarBotao();
}

function selecionarBebida(bebidaSelecionada) {
    let jaSelecionado = document.querySelector(".bebidas").querySelector(".borda-verde");

    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
        jaSelecionado.querySelector(".icone").classList.add("esconder");
    }

    bebidaSelecionada.classList.add("borda-verde");
    bebidaSelecionada.querySelector(".icone").classList.remove("esconder");

    bebida = bebidaSelecionada.innerHTML;
    habilitarBotao();
}

function selecionarSobremesa(sobremesaSelecionada) {
    let jaSelecionado = document.querySelector(".sobremesas").querySelector(".borda-verde");

    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
        jaSelecionado.querySelector(".icone").classList.add("esconder");
    }

    sobremesaSelecionada.classList.add("borda-verde");
    sobremesaSelecionada.querySelector(".icone").classList.remove("esconder");

    sobremesa = sobremesaSelecionada.innerHTML;
    habilitarBotao();
}

function habilitarBotao () {
    let pratoJaSelecionado = document.querySelector(".pratos").querySelector(".borda-verde");
    let bebidaJaSelecionada = document.querySelector(".bebidas").querySelector(".borda-verde");
    let sobremesaJaSelecionada = document.querySelector(".sobremesas").querySelector(".borda-verde");
    let botaoDeFinalizar = document.querySelector(".fechar-pedido button");

    if ( pratoJaSelecionado !== null && bebidaJaSelecionada !== null && sobremesaJaSelecionada !== null) {
        botaoDeFinalizar.classList.remove("desabilitado");
        botaoDeFinalizar.classList.add("fundo-verde");
        botaoDeFinalizar.innerHTML = `Fechar pedido`;
    }
}
