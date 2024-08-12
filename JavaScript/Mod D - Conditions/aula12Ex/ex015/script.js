function verificar(){
    var data= new Date()
    ano= data.getFullYear()
    var fAno = document.getElementById("ano").value
    var res = document.getElementById("resultado")
    var img = document.getElementById("foto")
   //adicionar foto no HTML atraves do JS
    var img = document.createElement("img")
    img.setAttribute(`ìd`, `foto`) 

    if (fAno.lenght == 0 || fAno > ano){
            window.alert("[ERRO] Verifica os dados e tenta novamente")
    }else{
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fAno)
        var genero = ""
        if (fsex[0].checked){ //checkar se e homem
            genero = "Masculino"

            if (idade >=0 && idade  <10){
                //Criança MASCULINO
                img.setAttribute(`src`, `imgs/criancaH.png`) 
            } else if( idade < 20 ){
                //Adolescente MASCULINO
                img.setAttribute(`src`, `imgs/adolescenteH.png`) 

            }else if ( idade < 60){
                //Adulto MASCULINO
                img.setAttribute(`src`, `imgs/adultoH.png`) 

            }else{
                //Velho MASCULINO
                img.setAttribute(`src`, `imgs/velhoH.png`) 

            }

        }else if (fsex[1].checked){ //checkar se é mulher
            genero = "Feminino"
            if (idade >=0 && idade  <10){
                //Criança FEMININO
                img.setAttribute(`src`, `imgs/criancaF.png`) 

            } else if( idade < 20 ){
                //Adolescente FEMININO
                img.setAttribute(`src`, `imgs/adolescenteF.png`) 

            }else if ( idade < 60){
                //Adulto FEMININO
                img.setAttribute(`src`, `imgs/adultaF.png`) 

            }else{
                //Velho FEMININO
                img.setAttribute(`src`, `imgs/velhaF.png`) 

            }
        }
        res.innerHTML = `O gênero detectado foi ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}