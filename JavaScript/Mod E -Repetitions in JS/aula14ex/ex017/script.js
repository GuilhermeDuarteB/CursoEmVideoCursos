function calcular(){

    var numero = document.getElementById("num").value
    let res = document.getElementById("tabuada")

    if (numero.length == 0){
        window.alert("[ERRO] Por favor insere um número!")
    }
        let n = Number(numero) 
        res.innerHTML = ""
     for(var c = 0; c<= 10; c++){

        let item = document.createElement(`option`)
        item.text = `${numero} x ${c} = ${n * c}`
        item.value = `tab${c}`
        res.appendChild(item)
        
    }
}