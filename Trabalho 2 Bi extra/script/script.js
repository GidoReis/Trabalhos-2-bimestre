let vlr01 =
document.querySelector("#vlr01")

let vlr02 =
document.querySelector("#vlr02")

let vlr03 =
document.querySelector("#vlr03")

let vlr04 =
document.querySelector("#vlr04")

let vlr05 =
document.querySelector("#vlr05")

let btCalular =
document.querySelector("#btCalular")

let h1Exibir =
document.querySelector("#h1Exibir")

function sortNumbers() {
    let num1 = Number(vlr01.value)
    let num2 = Number(vlr02.value)
    let num3 = Number(vlr03.value)
    let num4 = Number(vlr04.value)
    let num5 = Number(vlr05.value)


    if (num1 !== num2 && num1 !== num3 && num1 !== num4 && num1 !== num5 &&
      num2 !== num3 && num2 !== num4 && num2 !== num5 &&
      num3 !== num4 && num3 !== num5 &&
      num4 !== num5) {

    let numbers = [num1, num2, num3, num4, num5];
    numbers.sort(function(a, b) {
      return b - a;
    });

    h1Exibir.innerHTML = "Números em ordem decrescente: " + numbers.join(", ");
  } else {
    h1Exibir.innerHTML = "Os números devem ser diferentes!";
  }
    
}

btCalular.onclick = function(){
  sortNumbers()
}

//Segundo Exercicio

let inputVlr01 =
document.querySelector("#inputVlr01")

let inputVlr02 =
document.querySelector("#inputVlr02")

let inputVlr03 =
document.querySelector("#inputVlr03")

let btExibir =
document.querySelector("#btExibir")

let h2Exibir =
document.querySelector("#h2Exibir")

function calcula(){
  let x = Number(inputVlr01.value)
  let y = Number(inputVlr02.value)
  let z = Number(inputVlr03.value)

  
    if (x + y > z && x + z > y && y + z > x) {
      if (x === y && y === z) {
        h2Exibir.innerHTML = "Tri&acirc;ngulo Equil&aacute;tero";
      } else if (x === y || x === z || y === z) {
        h2Exibir.innerHTML = "Tri&acirc;ngulo Is&oacute;sceles";
      } else {
        h2Exibir.innerHTML = "Tri&acirc;ngulo Escaleno";
      }
    } else {
      h2Exibir.innerHTML = "N&atilde;o &eacute;	 um Tri&acirc;ngulo v&aacute;lido";
    }
  



  
  h2Exibir.style.color = "white"
}

btExibir.onclick = function(){
  calcula()
}

//Terceiro Exercicio

let inputVlrN =
document.querySelector("#inputVlrN")

let bTN =
document.querySelector("#bTN")

let h3Exibir =
document.querySelector("#h3Exibir")



function decomposeValue() {
  let value = Number(inputVlrN.value);

  let notas100 = Math.floor(value / 100);
  value %= 100;
  let notas50 = Math.floor(value / 50);
  value %= 50;
  let notas10 = Math.floor(value / 10);
  value %= 10;
  let notas5 = Math.floor(value / 5);
  value %= 5;
  let notas1 = value;

  let result = "Valor lido: R$" + value + "<br>";
  result += "Notas de 100: " + notas100 + "<br>";
  result += "Notas de 50: " + notas50 + "<br>";
  result += "Notas de 10: " + notas10 + "<br>";
  result += "Notas de 5: " + notas5 + "<br>";
  result += "Notas de 1: " + notas1;

  h3Exibir.innerHTML = result;
}



bTN.onclick = function(){
  decomposeValue()
}

//Quarto Exercicio

let inputVlr = document.querySelector("#inputVlr");
let inputAno = document.querySelector("#inputAno");
let bTexibir = document.querySelector("#bTexibir");
let h4Exibir = document.querySelector("#h4Exibir");

function CalculaVlrN() {
  let year = Number(inputAno.value);
  let value = Number(inputVlr.value);
  let tax = 0;

  if (year < 1990) {
    tax = value * 0.01;
  } else {
    tax = value * 0.15;
  }

  h4Exibir.innerHTML = "Imposto a ser pago: R$" + tax.toFixed(2);
  h4Exibir.style.color = "white";
}

bTexibir.onclick = function () {
  CalculaVlrN();
};
//Quinto Exercicio

let inputCodigo =
document.querySelector("#inputCodigo")

let inputSalario =
document.querySelector("#inputSalario")

let btSalario =
document.querySelector("#btSalario")

let h5Exibir =
document.querySelector("#h5Exibir")



function Cargo() {
  let Codigo = String(inputCodigo.value)
  let Salario = Number(inputSalario.value)
  let increasePercentage = 0;

  if (Codigo === "101") {
    increasePercentage = (10/100);
  } else if (Codigo === "102") {
    increasePercentage = (20/100);
  } else if (Codigo === "103") {
    increasePercentage = (30/100);
  } else {
    increasePercentage = (40/100);
  }

  let newSalary = Salario * (1 + increasePercentage);
  let difference = newSalary - Salario;

  let result = "Salário antigo: R$" + Salario.toFixed(2) + "<br>";
  result += "Novo salário: R$" + newSalary.toFixed(2) + "<br>";
  result += "Diferença: R$" + difference.toFixed(2);

  h5Exibir.innerHTML = result;
}



btSalario.onclick = function(){
  Cargo()
}

//Sexto Exercicio

let inputSaldo =
document.querySelector("#inputSaldo")

let btSaldo =
document.querySelector("#btSaldo")

let h6Exibir =
document.querySelector("#h6Exibir")

function exiba(){
  let saldo = Number(inputSaldo.value)
  let credit = 0

  if (saldo >= 0 && saldo <= 200) {
    credit = 0;
  } else if (saldo >= 201 && saldo <= 400) {
    credit = saldo * (20/100);
  } else if (saldo >= 401 && saldo <= 600) {
    credit = saldo * (30/100);
  } else if (saldo > 600) {
    credit = saldo * (40/100);
  }

  let result = "Saldo Médio: R$" + saldo.toFixed(2) + "<br>";
  result + "Valor do Crédito: R$" + credit.toFixed(2);

  h6Exibir.innerHTML = result
  h6Exibir.style.color = 'white'
}

btSaldo.onclick = function(){
  exiba()
}

//Setimo Exercicio

let inputCproduto =
document.querySelector("#inputCproduto")

let inputQtd =
document.querySelector("#inputQtd")

let btVlr =
document.querySelector("#btVlr")

let h7Exibir =
document.querySelector("#h7Exibir")

function setimo(){
  let Cproduto = inputCproduto.value;
  let quantidade = Number(inputQtd.value);
  let total = 0;

  if (Cproduto === "01") {
    total = 11.0 * quantidade;
  } else if (Cproduto === "02") {
    total = 8.5 * quantidade;
  } else if (Cproduto === "03") {
    total = 8.0 * quantidade;
  } else if (Cproduto === "04") {
    total = 9.0 * quantidade;
  } else if (Cproduto === "05") {
    total = 10.0 * quantidade;
  } else if (Cproduto === "06") {
    total = 4.5 * quantidade;
  }

  let resulta = "Valor a ser pago: R$" + total.toFixed(2);

  h7Exibir.innerHTML = resulta;
  h7Exibir.style.color = 'white';
}

btVlr.onclick = function(){
  setimo();
}


//Oitavo Exercicio

let inputS =
document.querySelector("#inputS")

let inputP =
document.querySelector("#inputP")

let botao =
document.querySelector("#botao")

let h8Exibir =
document.querySelector("#h8Exibir")

function oitavo() {
  let height = parseFloat(inputP.value);
  let gender = inputS.value;
  let weight = 0;

  if (gender === "male") {
    weight = (72.7 * height) - 58;
  } else if (gender === "female") {
    weight = (62.1 * height) - 44.7;
  }

  let result8 = "Peso Ideal: " + weight.toFixed(2) + " kg";
  h8Exibir.innerHTML = result8;
  h8Exibir.style.color = "white";
}

botao.onclick = function() {
  oitavo();
};

//Nono Exercicio

let inputCalculo =
document.querySelector("#inputCalculo")

let btDinhero =
document.querySelector("#btDinhero")

let btCartao =
document.querySelector("#btCartao")

let btDuasVezes =
document.querySelector("#btDuasVezes")

let btComjuros =
document.querySelector("#btComjuros")

let h9Exibir =
document.querySelector("#h9Exibir")

function dinhero() {
  let num1 = Number(inputCalculo.value)
  let result = num1 + (10/100);
  h9Exibir.innerHTML = "Valor Final: " + result.toFixed(2);
}

function cartao() {
  let num1 = Number(inputCalculo.value)
  let result = num1 + (15/100);
  h9Exibir.innerHTML = "Valor Final: " + result.toFixed(2);
}

function semjuros() {
  let num1 = Number(inputCalculo.value)
  let result = num1 ;
  h9Exibir.innerHTML = "Valor Final: " + result.toFixed(2);
}

function comjuros() {

  let num1 = Number(inputCalculo.value)
  let result = num1 +(10/100);
  h9Exibir.innerHTML = "Valor Final: " + result.toFixed(2);
  h9Exibir.style.color = "white"
}

btDinhero.onclick = function(){
  dinhero()
}

btCartao.onclick = function(){
  cartao()
}

btDuasVezes.onclick = function(){
  semjuros()
}

btComjuros.onclick = function(){
  comjuros()
}

//Decimo Exercicio

let inputNivelP =
document.querySelector("#inputNivelP")

let inputHorasAula =
document.querySelector("#inputHorasAula")

let btDecimo =
document.querySelector("#btDecimo")

let h10Exibir =
document.querySelector("#h10Exibir")

function decimo(){
  let nivelProfessor = String(inputNivelP.value)
  let HorasAula = Number(inputHorasAula.value)
  let recebe 

  if (nivelProfessor === "level 1") {
    recebe = (12.00 * HorasAula * 4.5);
  } else if (nivelProfessor === "level 2") {
    recebe = (17.00 * HorasAula * 4.5);
  } else if (nivelProfessor === "level 3") {
    recebe = (25.00 * HorasAula * 4.5);
  }

  h10Exibir.innerHTML = "Salario do Professor sera de " + recebe.toFixed(2);
  h10Exibir.style.color = "white"

}

btDecimo.onclick = function(){
  decimo()
}

