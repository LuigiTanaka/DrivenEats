//VARIÁVEIS GLOBAIS
let prato;
let bebida;
let sobremesa;

function selecionarPrato(pratoSelecionado) {
    let jaSelecionado = document.querySelector(".pratos").querySelector(".borda-verde");
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
    }
    pratoSelecionado.classList.add("borda-verde");
    prato = pratoSelecionado.innerHTML;
    habilitarBotao();
}

function selecionarBebida(bebidaSelecionada) {
    let jaSelecionado = document.querySelector(".bebidas").querySelector(".borda-verde");
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
    }
    bebidaSelecionada.classList.add("borda-verde");
    bebida = bebidaSelecionada.innerHTML;
    habilitarBotao();
}

function selecionarSobremesa(sobremesaSelecionada) {
    let jaSelecionado = document.querySelector(".sobremesas").querySelector(".borda-verde");
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
    }
    sobremesaSelecionada.classList.add("borda-verde");
    sobremesa = sobremesaSelecionada.innerHTML;
    habilitarBotao();
}

function habilitarBotao () {
    if (document.querySelector(".pratos").querySelector(".borda-verde") !== null && document.querySelector(".bebidas").querySelector(".borda-verde") !== null && document.querySelector(".sobremesas").querySelector(".borda-verde") !== null) {

        document.querySelector(".fechar-pedido button").classList.remove("desabilitado");
        document.querySelector(".fechar-pedido button").classList.add("fundo-verde");
    }
}
