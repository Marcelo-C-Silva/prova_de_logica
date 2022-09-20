let altura = [1.78, 1.53, 1.90, 1.50, 1.40, 3.50, 2.80, 1.25, 1.70, 1.89, 1.80, 2.90, 1.58, 1.74, 1.20];
let n;
let maior = 0;
let menor = 3;
for(n = 0; n < altura.length; n++){
    if( altura[n] > maior){
        maior = altura[n];
    }
    if( altura[n] < menor){
        menor = altura[n];
    }
}

document.write("Maior altura da  turma : ", maior, " ||| ")
document.write("Menor altura da turma : ", menor)