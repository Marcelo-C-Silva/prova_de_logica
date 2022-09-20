let imc
let peso = 58
let altura = 1.53

imc =  peso / (altura * altura);

if (imc <= 18.5) {
    document.write ("Melhore sua rotina de alimentação e treino, você está abaixo do Peso.")
}
if (imc <= 24.9 && imc >= 18.6) {
    document.write ("Continue assim, seu peso está Normal.")
}
if (imc <= 25 && imc >= 29.9) {
    document.write ("Melhore sua rotina de alimentação e treino, você está acima do Peso.")
}
if (imc >= 30){ 
    document.write ("Obeso!!!!")
}