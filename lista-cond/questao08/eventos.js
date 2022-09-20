let a = 70
let b = 4
let c = 300

if(a > b && b > c){
    document.write("A ordem decrescente dos seus numeros é: ",a,",", b,",",c);
}
if(c > b && b > a){
    document.write("A ordem decrescente do seus numeros é: ",c,",",b,",",a);
}
if(a > c && c > b){
    document.write("A ordem decrescente do seus numeros é: ",a,",",c,",", b);
}
if(b > c && c > a){
    document.write("A ordem decrescente do seus numeros é: ",b,",", c,",",a);
}
if(b > a && a > c){
    document.write("A ordem decrescente do seus numeros é: ",b,",", a,",",c);
}
else{
    document.write("A ordem decrescente do seus numeros é: ",c,",", a,",",b);
}