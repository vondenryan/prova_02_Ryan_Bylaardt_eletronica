//ToDo Pedir ao usuario qual calculo fazer

//ToDo CalcularConsumo(), ConversorMultSub()

let option = parseInt(prompt("1. Calcular Consumo\n2. Calcular Multiplo & Sub Multiplo\n3. Calcular Resistor\n4. Calcular Lei de Ohm"))

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
    default:
        alert("Opção Inválida!")
        break;
}