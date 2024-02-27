//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){ 
    //oq está dentro do () é a diferença entre as variáveis
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //mulher brasileira voz                                     //velocidade
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 50');
}
exibirMensagemInicial();
function verificarChute(){
    //value = quero pegar somente o valor do input
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Parabéns!');
        //dado tipo boolean
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Você acertou o número secreto com ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //na hora que acertasse, queria desabilitar o botão chutar
        //document.getElementById('chutar').setAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');  
        } else {
            exibirTextoNaTela('p','O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}   

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdeNumerosLista = listaNumerosSorteados.length
    
    if (qtdeNumerosLista == numeroLimite){
        listaNumerosSorteados = []
    }
    //includes = verifica se tem um elemento na lista
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
        //um novo numero será gerado quando o número já esteja na lista
    } else {
        //push = adicionar elemento na lista
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}
function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}