var maiorNota = -Infinity;
var menorNota = Infinity;
var somaNotas = 0;


for(var contador = 1; contador <=25; contador++){
    var nota = parseInt(prompt(`Digite a nota do ${contador} aluno:`));
    if(nota > maiorNota){
        maiorNota = nota;
    }
    if(nota < menorNota){
        menorNota = nota;
    }
    somaNotas += nota;
}

     var mediaNotas = somaNotas / 25;

     document.write(`Maior nota:${maiorNota}`+"<br>")
     document.write(`Menor nota: ${menorNota}`+"<br>")
     document.write(`Média das notas: ${mediaNotas.toFixed(2)}`)








































