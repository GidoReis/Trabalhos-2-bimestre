let largura =
document.querySelector("#largura")

let comprimento =
document.querySelector("#comprimento")

let area =
document.querySelector("#area")

let h3Resultado =
document.querySelector("#h3Resultado")

function areacalculator(){
    let campo1 = Number(largura.value)
    let campo2 = Number(comprimento.value)

    h3Resultado.textContent = (campo1 * campo2) + " MTS²"
    h3Resultado.style.color= "white"
}

area.onclick = function(){
    areacalculator()
}

//Segundo exercio 

let quantidaCvalos =
document.querySelector("#quantidaCvalos")

let btCacular =
document.querySelector("#btCacular")

let h3Exebir =
document.querySelector("#h3Exebir")

function cacula(){
    let cavalo = Number(quantidaCvalos.value)
    h3Exebir.textContent = cavalo * 4 + "Ferraduras"
    h3Exebir.style.color = "white"
}

btCacular.onclick = function(){
    cacula()
}

//Terceiro Exercicio

let quantidadeBroas =
document.querySelector("#quantidadeBroas")

let QuantidadePães =
document.querySelector("#QuantidadePães")

let btSomar =
document.querySelector("#btSomar")

let h1Exibir =
document.querySelector("#h1Exibir")

let h2Exibir =
document.querySelector("#h2Exibir")

function somar(){
    let somabroas = Number(quantidadeBroas.value)
    let somapaes = Number(QuantidadePães.value)
    let resultado 

    h1Exibir.innerHTML = "Valor recebido nas soma das vendas R$" + ((somabroas*3/25 ) + (somapaes*15/10)).toFixed(2)
    h2Exibir.innerHTML = "Valor á ser guardado R$" + (((somabroas*3/25 ) + (somapaes*15/10)) * 10/100).toFixed(2)
    h1Exibir.style.color = "white"
    h2Exibir.style.color = "white"
}

btSomar.onclick = function(){
    somar()
}



//Quarto Exercicio

let inputNome =
document.querySelector("#inputNome")

let inputIdade =
document.querySelector("#inputIdade")

let btCalculaDias =
document.querySelector("#btCalculaDias")

let h4Exibir =
document.querySelector("#h4Exibir")

function calculaDias(){
    let nome = String(inputNome.value)
    let idade = Number(inputIdade.value)

    h4Exibir.textContent = nome + ", você ja viveu " + (idade * 365) + " dias de Vida."
    h4Exibir.style.color = "white"
}

btCalculaDias.onclick = function(){
    calculaDias()
}

//Quinto Exercicio

let inputValorPago =
document.querySelector("#inputValorPago")

let inputVlrGasolina =
document.querySelector("#inputVlrGasolina")

let btPreço =
document.querySelector("#btPreço")

let h5Exibir =
document.querySelector("#h5Exibir")

function gasolina(){
    let ValrPGGasolina = Number(inputValorPago.value)
    let VlrsGasolina = Number(inputVlrGasolina.value)

    h5Exibir.textContent = "Você encheu o tanque com " + (ValrPGGasolina / VlrsGasolina).toFixed(2) + " Litros de Gasolina."
    h5Exibir.style.color = "White"

}

btPreço.onclick = function(){
    gasolina()
}

//Sexto Exercicio

let inputKilos =
document.querySelector("#inputKilos")

let btApagar =
document.querySelector("#btApagar")

let h6Exibir =
document.querySelector("#h6Exibir")

function pagar(){
    let kilo = Number(inputKilos.value)

    h6Exibir.textContent = "Seu prato Custa R$" + (kilo * 12).toFixed(2)
    h6Exibir.style.color = "White"
}

btApagar.onclick = function(){
    pagar()
}


//Setimo Exercicio

let inputDias =
document.querySelector("#inputDias")

let inputMes =
document.querySelector("#inputMes")

let btCalJJJ =
document.querySelector("#btCalJJJ")

let h7Exibir =
document.querySelector("#h7Exibir")

function juliano(){
    let dias = Number(inputDias.value)

    let mes = Number(inputMes.value)

    h7Exibir.textContent = "O dia do Juliano é  " + ((mes * 30) + dias)
    h7Exibir.style.color = "White"
}

btCalJJJ.onclick = function(){
    juliano()
}



//Oitavo Exercicio

let inputCamisaP =
document.querySelector("#inputCamisaP")

let inputCamisaM =
document.querySelector("#inputCamisaM")

let inputCamisaG =
document.querySelector("#inputCamisaG")

let btCaTotalCamisa =
document.querySelector("#btCaTotalCamisa")

let h8Exibir =
document.querySelector("#h8Exibir")

function Carrinhoo(){
    let camisaP = Number(inputCamisaP.value)

    let camisaM = Number(inputCamisaM.value)

    let camisaG = Number(inputCamisaG.value)

    h8Exibir.textContent = "O valor do carrinho é R$  " + ((camisaP * 10) + (camisaM * 12) + (camisaP * 10)).toFixed(2)
    h8Exibir.style.color = "White"
}

btCaTotalCamisa.onclick = function(){
    Carrinhoo()
}


//Nono Exercicio

let inputX1 =
document.querySelector("#inputX1")

let inputY1 =
document.querySelector("#inputY1")

let inputX2 =
document.querySelector("#inputX2")

let inputY2 =
document.querySelector("#inputY2")

let btCalcularEuclidiana =
document.querySelector("#btCalcularEuclidiana")

let h9Exibir =
document.querySelector("#h9Exibir")

function Carrinhoo(){
    let x1 = Number(inputX1.value)

    let y1 = Number(inputY1.value)

    let x2 = Number(inputX2.value)

    let y2 = Number(inputY2.value)

    h9Exibir.textContent = "A distancia entre os dois ponto é  " + (((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5).toFixed(2)
    h9Exibir.style.color = "White"
}

btCalcularEuclidiana.onclick = function(){
    Carrinhoo()
}

//Decimo Exercicio

let inputTempo =
document.querySelector("#inputTempo")

let btTempo =
document.querySelector("#btTempo")

let h10Exibir =
document.querySelector("#h10Exibir")


function tempo(){
    let campotempo = Number(inputTempo.value)
    h10Exibir.textContent = ((campotempo/360 ).toFixed(0) ) + " Anos/ " + (((campotempo % 360) / 30 ).toFixed(0)) + " Meses/ " + (((campotempo % 360) % 30) .toFixed(0)) + " dias"
 
    h10Exibir.style.color = "white"

}

btTempo.onclick = function(){
    tempo()


}

//Decimo Primeiro Exercicio

let inputSalario =
document.querySelector("#inputSalario")

let btCalcularSalario =
document.querySelector("#btCalcularSalario")

let h11Exibir =
document.querySelector("#h11Exibir")

function salario(){
    let campoSalario = Number(inputSalario.value)

    h11Exibir.innerHTML = "O Salario Atual Será de R$" + campoSalario.toFixed(2) + "<br>" 
    + "O Novo Salario Será de R$" + (campoSalario * (115/100)).toFixed(2) + "<br>"
    + "Salario Com Desconto Será R$" + ((campoSalario * (115/100)) / (108/100)).toFixed(2)
    h11Exibir.style.color = "white"

}

btCalcularSalario.onclick = function(){
    salario()
}

//Decimo Segundo Exercicio

let inputNumero =
document.querySelector("#inputNumero")

let btNumero =
document.querySelector("#btNumero")

let h12Exibir =
document.querySelector("#h12Exibir")

function inteiro(){
    let campoNumero = Number(inputNumero.value)

    h12Exibir.innerHTML = "Centena: " + Math.floor(campoNumero / 100) + "<br>" +
    "Dezena: " + Math.floor((campoNumero % 100) / 10) + "<br>" +
    "Unidade: " + Math.floor(campoNumero % 10)


    h12Exibir.style.color = "white"
}

btNumero.onclick = function(){
    inteiro()
}

//Decimo Terciero Exercicio

let inputArea =
document.querySelector("#inputArea")

let btCalcularArea =
document.querySelector("#btCalcularArea")

let h13Exibir =
document.querySelector("#h13Exibir")

function CalcularArea(){
    let area = Number(inputArea.value)

    h13Exibir.textContent = "A Area da Pizza e: " + ((area * area) * 3.14).toFixed(2) + "cm"
    h13Exibir.style.color = "white"

}

btCalcularArea.onclick = function(){
    CalcularArea()
}

//Decimo Quarto Exercicio

let inputVlr =
document.querySelector("#inputVlr")

let btVlr =
document.querySelector("#btVlr")

let h14Exibir =
document.querySelector("#h14Exibir")

function Vlr(){
    let campoVlr = Number(inputVlr.value)
    
    let carlos = Math.floor(campoVlr / 3);
    let andre = Math.floor(campoVlr / 3);
    let felipe = campoVlr - (carlos + andre);

    h14Exibir.innerHTML = "Carlos irá pagar R$" + carlos.toFixed(2) + "<br>" +
    "Andre irá pagar R$" + andre.toFixed(2) + "<br>" +
    "Felipe irá pagar R$" + felipe.toFixed(2)

    h14Exibir.style.color = "white"

}

btVlr.onclick = function(){
    Vlr()
}