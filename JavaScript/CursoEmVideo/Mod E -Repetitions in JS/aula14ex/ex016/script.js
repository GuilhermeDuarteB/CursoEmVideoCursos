function verificar(){
  var inicial = document.getElementById("nInicial").value
  var final = document.getElementById("nFinal").value
  var passos = document.getElementById("passo").value
  var res = document.getElementById("calculo")

    if (inicial.length == 0 || final.length == 0 || passos.length == 0){
        window.alert("[ERRO] Dados em falta! Verifica todos os dados inseridos")
    }
 
    res.innerHTML = "A contar:"

    let i = Number(inicial)
    let f = Number(final)
    let p= Number(passos)
    
    if(p <= 0){
        window.alert("Passo Inválido, a passar o Passo para 1")
        p = 1;
    }

    if(i < f){
        // Contagem Crescente
        for (let c = i; c <= f; c += p){    
        res.innerHTML += `${c} \u{1F449}`
        }
    }else{
        //Contagem Regressiva
        for (let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`;
        }
        }

        res.innerHTML += `\u{1F3C1}`
}