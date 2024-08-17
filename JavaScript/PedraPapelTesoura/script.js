let pedraImg = document.getElementById("pedra");
let papelImg = document.getElementById("papel");
let tesouraImg = document.getElementById("tesoura");
let resultadoMsg = document.getElementById("mensagem");
let imagem = document.getElementById("img");

// 0 = Pedra, 1 = Papel, 2 = Tesoura

function pedraF() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) { // Empate
        imagem.setAttribute("src", "imgs/pedra.png");
        resultadoMsg.innerHTML = "O Computador Jogou Pedra <br> Empate";
    } else if (randomNumber == 1) { // Computador vence com Papel
        imagem.setAttribute("src", "imgs/papel.png");
        resultadoMsg.innerHTML = "O Computador Jogou Papel <br> O Computador Venceu";
    } else { // Você vence com Pedra
        imagem.setAttribute("src", "imgs/tesoura.png");
        resultadoMsg.innerHTML = "O Computador Jogou Tesoura <br> Venceste";
    }
}

function papelF() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) { // Você vence com Papel
        imagem.setAttribute("src", "imgs/pedra.png");
        resultadoMsg.innerHTML = "O Computador Jogou Pedra <br> Venceste";
    } else if (randomNumber == 1) { // Empate
        imagem.setAttribute("src", "imgs/papel.png");
        resultadoMsg.innerHTML = "O Computador Jogou Papel <br> Empate";
    } else { // Computador vence com Tesoura
        imagem.setAttribute("src", "imgs/tesoura.png");
        resultadoMsg.innerHTML = "O Computador Jogou Tesoura <br> O Computador Venceu";
    }
}

function tesouraF() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) { // Computador vence com Pedra
        imagem.setAttribute("src", "imgs/pedra.png");
        resultadoMsg.innerHTML = "O Computador Jogou Pedra <br> O Computador Venceu";
    } else if (randomNumber == 1) { // Você vence com Tesoura
        imagem.setAttribute("src", "imgs/papel.png");
        resultadoMsg.innerHTML = "O Computador Jogou Papel <br> Venceste";
    } else { // Empate
        imagem.setAttribute("src", "imgs/tesoura.png");
        resultadoMsg.innerHTML = "O Computador Jogou Tesoura <br> Empate";
    }
}
