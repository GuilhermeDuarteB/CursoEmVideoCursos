function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
  var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h` 

    if (hora >= 6 && hora < 12){
        // bom dia
        img.src= "imgs/manha.png"
        document.body.style.background = "#b47487"
    }else if (hora >=12 && hora < 18){
        //boa tarde
        img.src= "imgs/tarde.png"
        document.body.style.background = "#70495c"
    }else if (hora >= 18){
        // boa noite
        img.src= "imgs/noite.png"
        document.body.style.background = "#a56e5a"

    } else if (hora >= 0 && hora < 6){
        // boa madrugada
        img.src= "imgs/madrugada.png"
        document.body.style.background = "#615a2e"
    }
}
