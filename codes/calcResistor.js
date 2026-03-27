let cores = {
    "Preto": {val: 0, mult: 1, tolerancia: undefined},
    "Marrom": {val: 1, mult: 10, tolerancia: 1},
    "Vermelho": {val: 2, mult: 100, tolerancia: 2},
    "Laranja": {val: 3, mult: 1_000, tolerancia: undefined},
    "Amarelo": {val: 4, mult: 10_000, tolerancia: undefined},
    "Verde": {val: 5, mult: 100_000, tolerancia: 0.5},
    "Azul": {val: 6, mult: 1_000_000, tolerancia: 0.25},
    "Violeta": {val: 7, mult: 10_000_000, tolerancia: 0.1},
    "Cinza": {val: 8, mult: undefined, tolerancia: 0.05},
    "Branco": {val: 9, mult: undefined, tolerancia: undefined},
    "Dourado": {val: undefined, mult: 0.1, tolerancia: 5},
    "Prata": {val: undefined, mult: 0.01, tolerancia: 10},
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

    if(valorResistor >= 1_000_000_000) {
        valorResistor = `${valorResistor / 10**9} GΩ`;
    } else if(valorResistor >= 1_000_000) {
        valorResistor = `${valorResistor / 10**6} MΩ`;
    } else if(valorResistor >= 1_000) {
        valorResistor = `${valorResistor / 10**3} kΩ`;
    } else {
        valorResistor = `${valorResistor} Ω`;
    }

    console.log(coresFaixas);
    return `${valorResistor} ±${cores[coresFaixas[4]].tolerancia}`;
}