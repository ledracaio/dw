function calcularIMC() {
    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Pré-obesidade";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade Grau 1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3";
    }

    const resultado = `${nome}, seu IMC é ${imc.toFixed(2)} e sua classificação é: ${classificacao}.`;

    document.getElementById("resultado").innerHTML = resultado;
}