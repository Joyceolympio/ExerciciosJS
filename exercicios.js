//EX 1

// let nome = "Joyce";
// let sobrenome = "Olympio"

// document.write("Meu nome completo é: " + nome + " " + sobrenome);

//EX 2

// let n1 = 25;
// let n2 = 19;
// let soma = n1 + n2;

// document.write("Resultado da soma 25 + 19: " + soma);   

//EX 3

// let horasTrabalhadas = prompt("Horas trabalhadas no mês: ");
// let valorHora = prompt("Valor hora trabalhada: ");
// let percentualDesconto = prompt("Percentual de desconto: ");

// let salarioBruto = horasTrabalhadas * valorHora;

// let totalDesconto = (percentualDesconto / 100) * salarioBruto;

// let salarioLiquido = salarioBruto - totalDesconto;

// document.write("Horas Trabalhadas: " + horasTrabalhadas + "<br> Salário bruto: " + salarioBruto + "<br> Desconto: " + percentualDesconto + "<br> Salário líquido: " + salarioLiquido);

//EX 4

// let altura = prompt("Altura da sua lata de óleo: ");
// let raio = prompt("Raio da sua lata de óleo: ");

// let volume = 3.14159 * Math.pow(raio, 2) * altura;

// document.write("O volume da sua lata de óleo é: " + volume);

//EX 5

// let tempo = prompt("Tempo de viagem: ");
// let velocidade = prompt("Velocidade média durante a viagem: ");

// let distancia = tempo * velocidade;

// let litros_usados = distancia / 12;

// document.write("Velocidade média: " + velocidade + "<br> Tempo de viagem: " + tempo + "<br> Distância percorrida: " + distancia + "<br> Quantidade de litros ultilizados: " + litros_usados);

//EX 6
//REFAZER
// let salarioBruto = prompt("Informe seu salário bruto: ");

// let desconto = (salarioBruto * 0.1) * 0.05;

// document.write("Seu salário líquido é: " + desconto);

//EX 7

// let idade = prompt("Informe sua idade: ");
// let ano = 12;
// let mes = 30;
// let resultado = idade * ano * mes;

// document.write(`Você viveu ${resultado} dias`);

//EX 8 

// let nome = "Joyce <br>";
// let quantidade = 552;

// document.write(nome.repeat(quantidade));

//EX 9

let nome = prompt("Digite seu nome: ");
let dias = prompt("Digite o número de dias que será hospedado: ")
let valorDiaria = "";
let total = ""

if (dias < 15) {
    valorDiaria == 4 * dias;
    document.write(valorDiaria)
};

if (dias == 15) {
    valorDiaria == 3.60 * dias;
    document.write(valorDiaria)
}

else {
    valorDiaria == 3.00 * dias;
    document.write(valorDiaria)
}

total = (50 * dias) + valorDiaria;
document.write(total);

