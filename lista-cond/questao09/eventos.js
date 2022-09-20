let h = 1.78
let sexo = "M"
let peso

if(sexo == "M"){
    peso = (72.7 * h)-58
    document.write("Você é homem, e seu peso ideal é ", peso,"KG.")
}
if( sexo == "F"){
    peso = (62.1 * h)-44.7
    document.write("Você é mulher, e seu peso ideal é ", peso,"KG.")
}