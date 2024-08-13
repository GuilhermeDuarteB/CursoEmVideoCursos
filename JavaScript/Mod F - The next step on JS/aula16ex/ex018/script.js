let number = document.getElementById("numero")
let lista = document.getElementById("lista")
let res = document.getElementById("resultado")

let numeros = []

function isNumero(n){
if(Number(n) >= 1 && Number(n) <= 100){
    return true
} else{
    return false
}
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function addList(){

        if (isNumero(number.value) && !inLista(number.value, numeros)){
           
            numeros.push(Number(number.value))

            let item = document.createElement(`option`)
            for (let c in numeros){
                item.text = `${numeros[c]} Adicionado a Lista!`
                lista.appendChild(item)
                res.innerHTML = ""
            }
          
        }else {
            window.alert("Valor inválido ou já existente na lista!")
        }
        number.value = ""
        number.focus()
    }

function finalizar(){
    if (lista.length == 0){
        window.alert("Sem dados na lista, por favor insere e volta a tentar!")
    }else{

        let tot = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for(let pos in numeros){
            soma += numeros[pos]
         media = soma/numeros.length
            if(numeros[pos] > maior){
                maior = numeros[pos]
            }

            if (numeros[pos] < menor){
                menor = numeros[pos]
            }
        }

        res.innerHTML = ""
        res.innerHTML += `No total foram adicionados ${tot} á lista <br>`
        res.innerHTML += `O Maior Número da listá é ${maior} <br>`
        res.innerHTML += `O Menor Número da listá é ${menor} <br>`
        res.innerHTML += `A Soma de Todos os Números da Lista é ${soma} <br>`
        res.innerHTML += `A Média de Todos os Números da Lista é ${media}`



    }

}
