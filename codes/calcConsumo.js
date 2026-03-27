function CalcularConsumo() {
    let elet = prompt("Digite o eletrodomestico: ");
    let opcao = parseInt(prompt("1. Watt\n2. KiloWatt\nDigite a opção: "));
    let potencia = parseFloat(prompt("Digite a potência: "));
    let tempo = parseInt(prompt("Digite o tempo de uso: "));
    let taxa = parseInt(prompt("Digite o valor do Kwh: "));
    let kwhMes, valor;

    switch(opcao) {
        case 1:
            kwhMes = ((potencia * tempo) / 1000) * 30;
            break;
        case 2:
            kwhMes = (potencia * tempo) * 30;
            break;
        default:
            console.log("Opção inválida!");
    }

    valor = kwhMes * taxa;

    console.log(`Eletrodomestico: ${elet}\nKwh Mês: ${kwhMes.toFixed(2)}\nValor: ${valor.toFixed(2)}`);
}