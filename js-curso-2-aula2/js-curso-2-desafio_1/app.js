let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function clicarBotao(){
    console.log('O botão foi clicado');
}

function clicarAlerta(){
    alert('Eu amo JS');
}
function  clicarPrompt(){
    cidade = prompt('Diga uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function clicarSoma(){
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    let soma = (numero1 + numero2);
    alert(`O resultado da soma foi ${soma}`);
}