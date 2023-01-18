const inputRange = document.querySelector('.gorjeta')
const btnCalcular = document.querySelector('.calcular')

const atualizarValorRange = ()=>{
    const valorRange = document.querySelector('.valor-range')
    valorRange.innerText = inputRange.value
}

const pegaValorInputText = ()=>{
    const inputText = document.querySelector('.conta')
    return Number(inputText.value)
}

const calcularGorjeta = (total)=>{
    const porcentagem = Number(inputRange.value)
    return total * (porcentagem/100)
}

const mostrarResultados = (gorjeta,total)=>{
    const valorGorjeta = document.querySelector('.valor-gorjeta')
    const valorConta = document.querySelector('.valor-conta')
    valorGorjeta.innerText = gorjeta.toFixed(2)
    valorConta.innerHTML = total.toFixed(2)
}

const calcular = ()=>{
    const contaInicial = pegaValorInputText()
    const gorjeta = calcularGorjeta(contaInicial)
    const valorTotal = gorjeta + contaInicial
    mostrarResultados(gorjeta,valorTotal)
}

inputRange.addEventListener('input',atualizarValorRange)
btnCalcular.addEventListener('click',calcular)