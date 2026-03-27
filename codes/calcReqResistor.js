//todo Resistor em Série soma
//todo Resistor em Paralelo 

function CalcularReqResistor() {
    let option = parseInt(prompt("1. Associação em Série\n2. Associação em Paralelo"));
    let qtdResistores, soma = 0;

    switch(option) {
        case 1:
            qtdResistores = parseInt(prompt("Quantos resistores você ira conectar: "));

            for(let contador = 0; contador < qtdResistores; contador++) {
                soma += parseInt(prompt("Digite o valor do resistor: "));
            }

            console.log(`Req = ${soma}Ω`);
            break;
        case 2:
            qtdResistores = parseInt(prompt("Quantos resistores você ira conectar: "));
            let resistores = [];

            for(let contador = 0; contador < qtdResistores; contador++) {
                resistores.push(parseInt(prompt("Digite o valor do resistor: ")));
            }

            console.log(`Req = ${CalcularParalelo(resistores)}Ω`);
    }
}

function CalcularParalelo(arr) {
    //Caso de apenas 2 resistores
    if(arr.length == 2) {
        let resistor1 = arr[0], resistor2 = arr[1];
        if(resistor1 + resistor2 == 0) return 0;

        return (resistor1 * resistor2) / (resistor1 + resistor2)
    }

    //Analisa quantos resistores são iguais
    let qtd = 0;
    for(let contador = 0; contador < arr.length; contador++) {
        if(arr[0] == arr[contador]) {
            qtd++;
        }
    }

    //Se todos os Resistores tiverem o mesmo valor faz calculo especial
    if(qtd == arr.length) {
        return arr[0] / qtd;
    }

    let somaInversos = 0;

    for(let contador = 0; contador < arr.length; contador++) {
        if(arr[contador] == 0) return 0;

        somaInversos += 1 / arr[contador];
    }
    return 1 / somaInversos;
}