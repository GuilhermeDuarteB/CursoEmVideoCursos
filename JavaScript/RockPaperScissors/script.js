let pedraImg = document.getElementById("pedra");
let papelImg = document.getElementById("papel");
let tesouraImg = document.getElementById("tesoura");
let resultadoMsg = document.getElementById("mensagem");
let imagem = document.getElementById("img");
let contadorC = document.getElementById("contadorCPont");
let contadorP = document.getElementById("contadorPPont");
let resultadoC = 0; // Contador para o computador
let resultadoP = 0; // Contador para o jogador

// 0 = Pedra, 1 = Papel, 2 = Tesoura

function jogar(escolhaUsuario) {
    let randomNumber = Math.floor(Math.random() * 3);


    if (escolhaUsuario === "pedra") {
        pedraF(randomNumber);
    } else if (escolhaUsuario === "papel") {
        papelF(randomNumber);
    } else if (escolhaUsuario === "tesoura") {
        tesouraF(randomNumber);
    }
}

function atualizarContadores() {
    contadorC.innerHTML = `${resultadoC}`;
    contadorP.innerHTML = `${resultadoP}`;
}


function pedraF(randomNumber) {
    if (randomNumber == 0) { // Empate
        imagem.setAttribute("src", "imgs/pedra.png");
        resultadoMsg.innerHTML = "O Computador Jogou Pedra <br> Empate";
    } else if (randomNumber == 1) { // Computador vence com Papel
        resultadoC++
        imagem.setAttribute("src", "imgs/papel.png");
        resultadoMsg.innerHTML = "O Computador Jogou Papel <br> O Computador Venceu";
    } else { //  vence com Pedra
        resultadoP++
        imagem.setAttribute("src", "imgs/tesoura.png");
        resultadoMsg.innerHTML = "O Computador Jogou Tesoura <br> Venceste";
    }
    atualizarContadores()
}

function papelF(randomNumber) {
    if (randomNumber == 0) { // vence com Papel
        resultadoP++
        imagem.setAttribute("src", "imgs/pedra.png");
        resultadoMsg.innerHTML = "O Computador Jogou Pedra <br> Venceste";
    } else if (randomNumber == 1) { // Empate
        imagem.setAttribute("src", "imgs/papel.png");
        resultadoMsg.innerHTML = "O Computador Jogou Papel <br> Empate";
    } else { // Computador vence com Tesoura
        resultadoC++
        imagem.setAttribute("src", "imgs/tesoura.png");
        resultadoMsg.innerHTML = "O Computador Jogou Tesoura <br> O Computador Venceu";
    }
    atualizarContadores()
}

function tesouraF(randomNumber) {
    if (randomNumber == 0) { // Computador vence com Pedra
        resultadoC++
        imagem.setAttribute("src", "imgs/pedra.png");
        resultadoMsg.innerHTML = "O Computador Jogou Pedra <br> O Computador Venceu";
    } else if (randomNumber == 1) { //  vence com Tesoura
        resultadoP++
        imagem.setAttribute("src", "imgs/papel.png");
        resultadoMsg.innerHTML = "O Computador Jogou Papel <br> Venceste";
    } else { // Empate
        imagem.setAttribute("src", "imgs/tesoura.png");
        resultadoMsg.innerHTML = "O Computador Jogou Tesoura <br> Empate";
    }
    atualizarContadores()
}


// event listeners para as imagens
pedraImg.addEventListener("click", function() {
    jogar("pedra");
});

papelImg.addEventListener("click", function() {
    jogar("papel");
});

tesouraImg.addEventListener("click", function() {
    jogar("tesoura");
});
