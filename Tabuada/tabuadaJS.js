document.getElementById("gerarTabuada").addEventListener("click", function () {
    var numero = parseInt(document.getElementById("numero").value);
    var limite = parseInt(document.getElementById("limite").value);
    var exibirTodas = document.getElementById("opcaoExibir").checked;
    var tabuadaResult = document.getElementById("tabuadaResult");
    
    tabuadaResult.innerHTML = "";

    if (exibirTodas) {
        for (var i = 1; i <= numero; i++) {
            for (var j = 1; j <= limite; j++) {
                var resultado = i * j;
                tabuadaResult.innerHTML += "<tr><td>" + i + "</td><td>" + i + " x " + j + " = " + resultado + "</td></tr>";
            }
        }
    } else {
        for (var j = 1; j <= limite; j++) {
            var resultado = numero * j;
            tabuadaResult.innerHTML += "<tr><td>" + numero + "</td><td>" + numero + " x " + j + " = " + resultado + "</td></tr>";
        }
    }
});