function somar (n1, n2){
    return n1+n2
}

function subtrair (n1, n2){
    return n1-n2
}

function dividir (n1, n2){
    return n1/n2
}

function multiplicar (n1, n2){
    return n1*n2
}

function aoQuadrado (n1){
    return n1 ** 2
}

function raizQuadrada (n1){
    return Math.sqrt(n1)
}

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar,
    raizQuadrada,
    aoQuadrado
}