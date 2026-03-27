function CalcularLeiDeOhm() {
    let option = parseInt(prompt("1. Tensão (V)\n2. Corrente (I)\n3. Resistência (R)\nOque deseja descobrir: "));
    let resistencia, corrente, tensao;

    switch(option) {
        case 1:
            resistencia = parseFloat(prompt("Digite a Resistência: "));
            corrente = parseFloat(prompt("Digite a Corrente: "));

            console.log(`Tensão: ${resistencia * corrente}V`);
            break;
        case 2:
            tensao = parseFloat(prompt("Digite a Tensão: "));
            resistencia = parseFloat(prompt("Digite a Resistência: "));

            console.log(`Corrente: ${tensao / resistencia}A`);
            break;
        case 3:
            tensao = parseFloat(prompt("Digite a Tensão: "));
            corrente = parseFloat(prompt("Digite a Corrente: "));

            console.log(`Resistência: ${tensao / corrente}Ω`);
            break;
        default:
            console.warn("Opção Inválida!");
    }
}