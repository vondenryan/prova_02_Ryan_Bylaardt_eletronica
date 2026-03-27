let conversionTable = {
    "G": 9,
    "M": 6,
    "k": 3,
    "base": 0,
    "m": -3,
    "u": -6,
    "n": -9,
    "p": -12,
}

function ConversorMultSub() {
    alert("Unidades disponiveis:\nG - M - K - base - m - u - n - p");
    let unidadeOrigem = prompt("Unidade de origem (deixe vazio para base): ") || "base";
    let unidadeDestino = prompt("Unidade de destino (deixe vazio para base): ") || "base";
    let grandeza = prompt("Digite a grandeza: ");

    let valor = parseFloat(prompt("Digite o valor: "));
    let valorConvertido = conversor(unidadeOrigem, unidadeDestino, valor);

    if(!valorConvertido) return;

    //Retorna algo como "100kA" ou "0.1MW"
    console.log(`${valorConvertido}${unidadeDestino === "base" ? "" : unidadeDestino}${grandeza}`);
}

function conversor(origem, destino, val) {
    let de, para;

    if(conversionTable[origem] == undefined || conversionTable[destino] == undefined) {
        console.warn("Unidade Inválida!");
        return;
    }

    de = conversionTable[origem];
    para = conversionTable[destino];

    return val * (10 ** (from - to));
}