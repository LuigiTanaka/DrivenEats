//VARIÁVEIS GLOBAIS
let prato;
let bebida;
let sobremesa;
let botaoHabilitado = false;
let preco;
let precoPrato;
let precoBebida;
let precoSobremesa;

function selecionarPrato(pratoSelecionado) {
    let jaSelecionado = document.querySelector(".pratos").querySelector(".borda-verde");
    
    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
        jaSelecionado.querySelector(".icone").classList.add("esconder");
    }

    pratoSelecionado.classList.add("borda-verde");
    pratoSelecionado.querySelector(".icone").classList.remove("esconder");

    prato = pratoSelecionado.querySelector(".nome-prato").innerHTML;
    habilitarBotao();
    precoPrato = Number(pratoSelecionado.querySelector(".preco").innerHTML.replace(",", "."));
}

function selecionarBebida(bebidaSelecionada) {
    let jaSelecionado = document.querySelector(".bebidas").querySelector(".borda-verde");

    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
        jaSelecionado.querySelector(".icone").classList.add("esconder");
    }

    bebidaSelecionada.classList.add("borda-verde");
    bebidaSelecionada.querySelector(".icone").classList.remove("esconder");

    bebida = bebidaSelecionada.querySelector(".nome-bebida").innerHTML;
    habilitarBotao();
    precoBebida = Number(bebidaSelecionada.querySelector(".preco").innerHTML.replace(",", "."));
}

function selecionarSobremesa(sobremesaSelecionada) {
    let jaSelecionado = document.querySelector(".sobremesas").querySelector(".borda-verde");

    if (jaSelecionado !== null) {
        jaSelecionado.classList.remove("borda-verde");
        jaSelecionado.querySelector(".icone").classList.add("esconder");
    }

    sobremesaSelecionada.classList.add("borda-verde");
    sobremesaSelecionada.querySelector(".icone").classList.remove("esconder");

    sobremesa = sobremesaSelecionada.querySelector(".nome-sobremesa").innerHTML;
    habilitarBotao();
    precoSobremesa = Number(sobremesaSelecionada.querySelector(".preco").innerHTML.replace(",", "."));
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
        botaoHabilitado = true;
    }
}

function finalizarPedido() {
    if (botaoHabilitado) {
        preco = (precoPrato + precoBebida + precoSobremesa).toFixed(2);
        let dadosPedido = encodeURIComponent (`Olá, gostaria de fazer o pedido:
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$ ${preco}`)

        let url = `https://wa.me/5511943100443?text=${dadosPedido}`;
        window.open(url);
    }
}

