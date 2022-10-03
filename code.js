class Calculadora {
    suma(num1,num2) {
        return num1 + num2;
    }
    restar(num1,num2) {
        return num1 - num2;
    }
    dividir(num1,num2) {
        return num1 / num2;
    }
    multiplicar(num1,num2) {
        return num1 * num2;
    }
}

let valorNuevo = document.querySelector(".valor-nuevo")
let valorAnterior = document.querySelector(".valor-anterior")
let numButton = document.querySelectorAll(".numero")
let signo = document.querySelectorAll(".op")

let calcular = new Calculadora;
let operacion="";

function detectarOperador(op) {
    if (op == "+") return  calcular.suma((parseFloat(valorAnterior.innerHTML)),parseFloat(valorNuevo.innerHTML))
    else if (op == "-") return calcular.restar((parseFloat(valorAnterior.innerHTML)),parseFloat(valorNuevo.innerHTML))
    else if (op == "*") return calcular.multiplicar((parseFloat(valorAnterior.innerHTML)),parseFloat(valorNuevo.innerHTML))
    else if (op == "/") return calcular.dividir((parseFloat(valorAnterior.innerHTML)),parseFloat(valorNuevo.innerHTML)) 
}
document.querySelector(".igual").addEventListener("click",() =>{
    try{
        if (valorNuevo.innerHTML == "" || operacion == "" || valorAnterior.innerHTML == "" )throw "operacion incorrecta";
        let resultado = detectarOperador(operacion)
        operacion="";
        valorAnterior.innerHTML="";
        valorNuevo.innerHTML=resultado;
    }catch(e){
        valorNuevo.innerHTML=e;
        setTimeout(()=>{
            valorNuevo.innerHTML=""
            valorAnterior.innerHTML=""
        },1000)
    }
})

signo.forEach(op => {
    op.addEventListener("click",() =>{
        console.log("operador")
        if (operacion != "") operacion=op.innerHTML;
        else if (operacion == "") {
            valorAnterior.innerHTML = valorNuevo.innerHTML;
            valorNuevo.innerHTML = "";
            operacion = op.innerHTML;
        }
    })
})

numButton.forEach(numero => { 
    numero.addEventListener("click",() =>{
        if (numero.innerHTML == "." && valorNuevo.innerHTML.includes("."))return ;
        valorNuevo.innerHTML = valorNuevo.innerHTML + numero.innerHTML;
    })
})

document.querySelector(".AC").addEventListener("click",() =>{
    valorNuevo.innerHTML="";
    operacion="";
    valorAnterior.innerHTML="";
})

document.querySelector(".Change").addEventListener("click",() =>{
    console.log("cambiando")
    if (Math.sign(valorNuevo.innerHTML) == 1) valorNuevo.innerHTML = -(valorNuevo.innerHTML);
    else if (Math.sign(valorNuevo.innerHTML) == -1) valorNuevo.innerHTML =  Math.abs(valorNuevo.innerHTML);
})
document.querySelector(".porcentaje").addEventListener("click",() =>{
    try{
        if (valorNuevo.innerHTML == "" || operacion == "" || valorAnterior == "") throw "operacion incorrecta";
        else {
            if (operacion == "+" || operacion == "-") valorNuevo.innerHTML=(valorNuevo.innerHTML/100)*valorAnterior.innerHTML;
            else if (operacion == "*" || operacion == "/") valorNuevo.innerHTML = valorNuevo.innerHTML/100;
        }
    }catch(e){
        valorNuevo.innerHTML=e;
        setTimeout(()=>{
            valorNuevo.innerHTML=""
            valorAnterior.innerHTML=""
        },1000)
    }
})
