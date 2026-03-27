const button = document.getElementById("btn-calcular");
const display = document.getElementById("res-val");
    
button.addEventListener("click", function() {
    const faixas = parseInt(document.querySelector('input[name="tipo"]:checked').value);
    
    let coresFaixas = [];
    
    var val1 = document.getElementById("sel-1").value;
    var val2 = document.getElementById("sel-2").value;
    var val3 = document.getElementById("sel-3").value;
    var valMult = document.getElementById("sel-mult").value;
    var valTol = document.getElementById("sel-tol").value;
    
    coresFaixas.push(val1);
    coresFaixas.push(val2);
    coresFaixas.push(val3);
    coresFaixas.push(valMult);
    coresFaixas.push(valTol);
    
    let potencia = CalcularResistor(faixas, coresFaixas);

    updateDisplay(potencia);
})

function updateDisplay(x) {
    display.textContent = x;
}