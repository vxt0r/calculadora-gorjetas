const atualizarValorRange = ()=>{
    $('.valor-range').text($('.gorjeta').val())
}

const pegaValorInputText = ()=>{
    return Number($('.conta').val())
}

const calcularGorjeta = (total)=>{
    const porcentagem = Number($('.gorjeta').val())
    return total * (porcentagem/100)
}

const mostrarResultados = (gorjeta,total)=>{
    $('.valor-gorjeta').text(gorjeta.toFixed(2))
    $('.valor-conta').text(total.toFixed(2))
}

const calcular = ()=>{
    const contaInicial = pegaValorInputText()
    const gorjeta = calcularGorjeta(contaInicial)
    const valorTotal = gorjeta + contaInicial
    mostrarResultados(gorjeta,valorTotal)
}

$('.gorjeta').on('input',atualizarValorRange)
$('.calcular').click(calcular)
