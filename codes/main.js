//ToDo Pedir ao usuario qual calculo fazer

//ToDo CalcularConsumo(), ConversorMultSub(), CalcularLeiDeOhm(), CalcularReqResistor()

let option = parseInt(prompt("1. Calcular Consumo\n2. Calcular Multiplo & Sub Multiplo\n3. Calcular Resistor\n4. Calcular Lei de Ohm\n5. Calcular Req Resistores"));

switch (option) {
    case 1:
        CalcularConsumo();
        break;
    case 2:
        ConversorMultSub();
        break;
    case 3:
        window.location.href = "pages/resistor.html";
        break;
    case 4:
        CalcularLeiDeOhm();
        break;
    case 5:
        CalcularReqResistor();
        break;
    default:
        alert("Opção Inválida!")
        break;
}