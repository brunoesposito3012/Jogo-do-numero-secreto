//function exibirOla(){
//    console.log('Olá, mundo')
//}
//exibirOla();

//function exibirNome(nome){
//    console.log(`Olá ${nome}`);
//}
//exibirNome("Bruno C.S. da Costa Esposito");

//function receberNumero(numero){
//    return numero * 2;
//}
//let resultadoDobro = receberNumero(5);
//console.log(resultadoDobro);

//function calcularMedia(valor1, valor2, valor3){
//    return (valor1 + valor2 + valor3) / 3;
//}
//let media = calcularMedia(2, 4, 6);
//console.log(media);

//function maiorNumero(a, b){
//    return a > b? 'a' : 'b'
//}
//let encontrarMaior = maiorNumero(10,20);
//console.log(encontrarMaior);

//function dobrarNumero(a){
//    return a * a;
//}
//let numero = dobrarNumero(5);
//console.log(numero);

//let peso = parseFloat(prompt('Informe seu peso:'));
//let altura = parseFloat(prompt('Informe sua altura:'));
//let imc = calcularIMC(peso, altura);
//alert(`Seu IMC é: ${imc.toFixed(2)}`);

//function calcularIMC(peso, altura) {
//    return peso / (altura * altura);
//}

//calcularFatorial(5);
//function calcularFatorial(numero){
//    let i = numero;
//    while(i >= 2){
//        i--;
//        numero *= i;
//    }
//    console.log(numero);
//}

//function converterDolar(valor){
//        valor *= 4.80;
//        return valor.toFixed(2);
//}
//let dolar = prompt('Quanto você tem em dólar?')
//alert(`${dolar} dólar, é o equivalente a R$: ${converterDolar(dolar)} reais`);

//function areaRetangular(altura, largura){
//    let area = altura * largura;
//    let perimetro = 2 * (altura + largura);
//    alert(`A área da sala é ${area} m²`);
//    alert(`O perimetro da sala é ${perimetro} metros`);
//}  
//let altura = parseInt(prompt('Qual a altura?'));
//let largura = parseInt(prompt('Qual a largura?'));
//areaRetangular(altura, largura);

//function areaCircular(raio){
//    let area = Math.PI * raio * raio;
//    let perimetro = 2 * Math.PI * raio;
//    alert(`A área do circulo é: ${area.toFixed(2)} m²`);
//    alert(`O perimetro do circulo é: ${perimetro.toFixed(2)} metros`);
//}
//let raio = parseInt(prompt('Digite o raio'));
//areaCircular(raio);

//function Tabuada(numero){
//   for(let i = 1; i <= 10; i++){
//        let resultado = numero * i;
//        console.log(`O valor de ${numero} x ${i} = ${resultado}`);
//    }
//}
//let numero = parseInt(prompt('Digite um numero'));
//Tabuada(numero);
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while (contador > 0) {
    let numero = parseInt(prompt('Digite o numero:')); 
    soma += numero;
    contador--;
}

let media = soma / qtdNumeros;

alert(media);