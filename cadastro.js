//Data do Evento
var diaEvento = 10
var mesEvento = 03
var anoEvento = 2022

//Data Atual
let anoAtual = 2022
let diaAtual = 05
let mesAtual = 03

//Validação da data
if(anoEvento >= anoAtual){
    if(mesEvento >= mesAtual){
        if(diaEvento >= diaAtual){
            console.log("Data cadastrada com sucesso!")
        }else{
            console.log("Data inválida")
        }
    }else {
        console.log("Data inválida")
    }
}else{
    console.log("Data inválida")
}

//Validação da idade
let idade = 18

if (idade < 18){
    console.log("Cadastro não permitido pela idade")
}else{
    console.log("Cadastro realizado com sucesso!")
}

//Número de participantes
var listaDeParticipantes = ["João", "Pedro", "Lucas","Paulo"]

if(listaDeParticipantes.length < 100){
    console.log("Evento com espaço suficiente")
}else{
    console.log("Evento sem vagas")
}

