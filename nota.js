var maiorNota = -infinito;
var menorNota = infinito;
var somaNotas = 0;


for(var contador = 1; contador <=25; contador++){
    var nota = parseFloat(prompt(`Digite a nota do ${contador} aluno:`));
    if(nota > menorNota){
        maiorNota = nota;
    }
    if(nota < menorNota){
        menorNota = nota;
    }
    somaNotas += nota;
}

     var mediaNotas = somaNotas / 25;

     document.write(`Maior nota:${maiorNota}`);
     document.write(`Menor nota: ${menorNota}`);
     document.write(`Média das notas: ${mediaNotas.toFixed(2)}`);



















