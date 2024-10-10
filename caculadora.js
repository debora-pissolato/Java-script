var textoInfro = document.querySelector('h1')
textoInfro.innerHTML = 'Calculadora'


var textoInfro = document.querySelector('p')
textoInfro.innerHTML = ''





function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);
        
    var soma = nota1 + nota2 + nota3 + nota4;
    var media = soma / 4;
    return media;
}

function verificacaoAprovado(media) {
    if (media >= 5) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}



var resultado = document.getElementById('resultado');
        if (isNaN(media)) {
            resultado.innerHTML = "Por favor, insira todas as notas corretamente.";
        } else if (media >= 5) {
            resultado.innerHTML = `Alune ${nome} está APROVADE com média ${media.toFixed(2)} e ${faltas} falta(s)!`;
        } else {
            resultado.innerHTML = `Alune ${nome} está REPROVADE com média ${media.toFixed(2)} e ${faltas} falta(s).`;
        }
    
























































































