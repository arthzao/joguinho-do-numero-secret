let listaDeNumerosSorteadosToppe = [];
let numeroLimite = 10;
mensagemInicialToppe();
let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'escolha um número entre 1 e 10 por gentileza meu patrão?';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 3.0; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
};

function mensagemInicialToppe() {
exibirTextoNaTela('h1', 'joguin do número secreto');
exibirTextoNaTela('p', 'escolhe um número entre 1 e 10 por gentileza meu patrão?');
    };

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertouu lindão, boa');
        let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemCincoTentativasOuMais = `tá maluco, demorou mas conseguiu, precisou de ${numeroDeTentativas} tentativas`;
        let mensagemTentativas = `descobriu essa porra aí ó com ${numeroDeTentativas} ${palavraTentativa} newba.`;
        if (numeroDeTentativas >= 5) {
            exibirTextoNaTela('p', mensagemCincoTentativasOuMais);
        } else {
            exibirTextoNaTela('p', mensagemTentativas); 
        }
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'é menor burrão');
        } else {
            exibirTextoNaTela('p', 'é maior burrão');
        }
        numeroDeTentativas++;
        limparCampoDeChute();
        if (numeroDeTentativas > 5) {
    exibirTextoNaTela('p', 'tá maluco mano acerta logo essa porra ai ó');
}
    
    }
    
};

function gerarNumeroAleatorio() {
    let numeroSorteadoo = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteadosToppe.length;
    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteadosToppe = [];
    };
        if (listaDeNumerosSorteadosToppe.includes(numeroSorteadoo)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteadosToppe.push(numeroSorteadoo);
        return numeroSorteadoo;
    };
}

function limparCampoDeChute() {
    chute = document.querySelector('input');
    chute.value = '';
};

let chute = document.querySelector('input');
chute.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarChute();
    }
});



function reiniciarJoguinho(){
    numeroSecreto = gerarNumeroAleatorio();
    numeroDeTentativas = 1;
    limparCampoDeChute();
    mensagemInicialToppe();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
};
