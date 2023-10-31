function calcularViagem() {
    // Obtenha os valores dos campos
    var kmPercorridos = parseFloat(document.getElementById("kmPercorridos").value);
    var litrosGastos = parseFloat(document.getElementById("litrosGastos").value);
    var valorLitro = parseFloat(document.getElementById("valorLitro").value);

    // Calcule a autonomia em km/l
    var autonomia = kmPercorridos / litrosGastos;

    // Calcule o valor da viagem em R$
    var valorViagem = litrosGastos * valorLitro;

    // Calcule o valor por quilômetro em R$
    var valorPorKm = valorViagem / kmPercorridos;

    var resultado = "Em sua viagem para " + document.getElementById("nomeViagem").value + ", você percorreu " + kmPercorridos + " km e gastou " + litrosGastos + " L de combustível. Seu carro fez " + autonomia.toFixed(2) + " km/L e sua viagem teve um custo de R$ " + valorViagem.toFixed(2) + " sendo " + valorPorKm.toFixed(2) + " R$/km";

    document.getElementById("resultado").innerHTML = resultado;
}