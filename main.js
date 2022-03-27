'use strict';

//variaveis
let somaMussarela = 0
let somaCalabresa = 0
let somaPortuguesa = 0
let somaMista = 0
let vendaMussarela = 0.00
let vendaCalabresa = 0.00
let vendaPortuguesa = 0.00
let vendaMista = 0.00

let btnVendas = document.getElementById('vendas')
let btnEstorno = document.getElementById('estorno')
let btnPlanilha = document.getElementById('export')

//eventos
btnVendas.addEventListener('click', vender, false);
btnEstorno.addEventListener('click', estornar, false);
btnPlanilha.addEventListener('click',exportar, false);

//funções
function vender(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela += 1
        vendaMussarela += 25.00
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2)
        
    }else if(document.getElementById('calabresa').checked){
        somaCalabresa += 1
        vendaCalabresa += 35.00
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2)
    }else if(document.getElementById('portuguesa').checked){
        somaPortuguesa += 1
        vendaPortuguesa += 40.00
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2)
    }else{
        somaMista += 1
        vendaMista += 55.00
        document.getElementById('resultadoMista').innerHTML = somaMista
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2)
    }
}

function estornar(e){
    if(document.getElementById('mussarela').checked){
        if(somaMussarela >=1 && vendaMussarela >= 25.00){
            somaMussarela -= 1
            vendaMussarela -= 25.00
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2)
        
    }else if(document.getElementById('calabresa').checked){
        if(somaCalabresa >=1 && vendaCalabresa >= 35.00){
            somaCalabresa -= 1
            vendaCalabresa -= 35.00
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2)

    }else if(document.getElementById('portuguesa').checked){
        if(somaPortuguesa >=1 && vendaPortuguesa >= 40.00){
            somaPortuguesa -= 1
            vendaPortuguesa -= 40.00
        }
       
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2)
    }else{
        if(somaMista >=1 && vendaMista >= 40.00){
            somaMista -= 1
            vendaMista -= 55.00
        }
        document.getElementById('resultadoMista').innerHTML = somaMista
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2)
    }
}

function exportar(e){
    TableToExcel.convert(document.getElementById('table'))
}