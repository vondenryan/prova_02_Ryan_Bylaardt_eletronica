let cores = {
    "preto": {val: 0, mult: 1, tolerancia: undefined},
    "marrom": {val: 1, mult: 1, tolerancia: 1},
    "vermelho": {val: 2, mult: 1, tolerancia: 1},
    "laranja": {val: 3, mult: 1, tolerancia: undefined},
    "amarelo": {val: 4, mult: 1, tolerancia: undefined},
    "verde": {val: 5, mult: 1, tolerancia: 0.5},
    "azul": {val: 6, mult: 1, tolerancia: 0.25},
    "violeta": {val: 7, mult: 1, tolerancia: 0.1},
    "cinza": {val: 8, mult: undefined, tolerancia: 0.05},
    "branco": {val: 9, mult: undefined, tolerancia: undefined},
    "dourado": {val: undefined, mult: 0.1, tolerancia: 1},
    "prata": {val: undefined, mult: 0.01, tolerancia: 1},
}

function CalcularResistor(numFaixas, coresFaixas) {
    let valorResistor = "";

    for(let cont = 0; cont < 3; cont++) {
        if(numFaixas == 5) {
            valorResistor += cores[coresFaixas[cont]].val;
        } else {
            if(cont != 2) {
                valorResistor += cores[coresFaixas[cont]].val;
            }
        }
    }

    valorResistor = parseInt(valorResistor) * cores[coresFaixas[3]].mult;

    if(valorResistor >= 1_000_000) {
        valorResistor = `${valorResistor / 10**6} MΩ`;
    } else if(valorResistor >= 1_000) {
        valorResistor = `${valorResistor / 10**3} kΩ`;
    } else {
        valorResistor = `${valorResistor} Ω`;
    }

    return `${valorResistor} ±${cores[coresFaixas[4]].tolerancia}`;
}