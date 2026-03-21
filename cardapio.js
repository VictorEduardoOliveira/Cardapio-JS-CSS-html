let aux = 0
let aux_1 = 0
let aux_2 = 0
let aux_3 = 0

let valor = parseFloat(0);
function pedir(num){
    document.getElementById("qtd").classList.add("active")
    if(num == 1){
        aux_1++
        document.getElementById("pedido-1").textContent = `Big Mac    ${aux_1}xUn    R$ ${aux_1*24.00}`
        valor += 24.00 
        aux++
    } else if(num == 2){
        aux_2++
        document.getElementById("pedido-2").textContent = `Duplo Quarterão    ${aux_2}xUn    R$ ${aux_2*34.00}`
        valor += 34.00
        aux++
    } else{
        aux_3++
        document.getElementById("pedido-3").textContent = `Tasty Turbo 3 Carnes    ${aux_3}xUn    R$ ${(aux_3*43.90).toFixed(2)}`
        valor += 43.90
        aux++
    }
    console.log(valor.toFixed(2))
    document.getElementById("subtotal").textContent = `R$ ${valor.toFixed(2)}`
    document.getElementById("total").textContent = `R$ ${valor.toFixed(2)}`
    document.getElementById("qtd").textContent = aux
}
let i = 1
function resumir(){
    document.getElementById("pop").classList.add("ativo");
    document.getElementById("qtd").classList.remove("active");
}
function fechar(){
    document.getElementById("pop").classList.remove("ativo");
}
function modo(num){
    if(num == 1){
        document.getElementById("frete").textContent = "Frete: R$ 5.00"
        document.getElementById("total").textContent = `R$ ${(valor+5.00).toFixed(2)}`
        document.getElementById("entrega").classList.add("opn")
    } else{
        document.getElementById("frete").textContent = "Frete: R$ 0.00"
        document.getElementById("total").textContent = `R$ ${valor.toFixed(2)}`
        document.getElementById("entrega").classList.remove("opn")
    }
}
function continuar(){
    document.getElementById("metodo_pagamento").classList.add("on");
}


function pag(num){
    if(num == 1){
        document.getElementById("pagamento").classList.remove("able")
        document.getElementById("fim").classList.add("open")
    }else{
        document.getElementById("pagamento").classList.add("able")
        document.getElementById("fim").classList.add("open")
    }
    document.getElementById("entrega").classList.add("opn")
}

function finalizar(){
    console.log(document.getElementById("cartao").value)
    console.log(document.getElementById("cidade").value)
    console.log(document.getElementById("bairro").value)
    console.log(document.getElementById("endereco").value)
}