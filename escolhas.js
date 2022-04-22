function escolhaABC(escolha1) {

    while (escolha1 !== 'a' || escolha1 !== 'A' || escolha1 !== 'b' || escolha1 !== 'B' || escolha1 !== 'C' || escolha1 !== 'c') {

        escolha1 = prompt('Qual opção você escolhe?')

        if (escolha1 === 'c' || escolha1 === 'C') {
            window.location.href = '../Rick/fase2.html'
            break
        } else if (escolha1 !== 'a' || escolha1 !== 'A' || escolha1 !== 'b' || escolha1 !== 'B') {
            window.location.href = '../GameOver/gameover.html'
            break
        } else {
            alert('Escolha inválida')
        }
    }
}

function escolhaABC2(escolha2) {

    while (escolha2 !== 'a' || escolha2 !== 'A' || escolha2 !== 'b' || escolha2 !== 'B' || escolha2 !== 'C' || escolha2 !== 'c') {

        escolha2 = prompt('Qual opção você escolhe?')

        if (escolha2 === 'A' || escolha2 === 'a') {
            window.location.href = '../Rick/fase3.html'
            break
        } else if (escolha2 !== 'c' || escolha2 !== 'C' || escolha2 !== 'b' || escolha2 !== 'B') {
            window.location.href = '../GameOver/gameover.html'
            break
        } else {
            alert('Escolha inválida')
        }
    }
}

function escolhaABC3(escolha3) {

    while (escolha3 !== 'a' || escolha3 !== 'A' || escolha3 !== 'b' || escolha3 !== 'B' || escolha3 !== 'C' || escolha3 !== 'c') {

        escolha3 = prompt('Qual opção você escolhe?')

        if (escolha3 === 'b' || escolha3 === 'B') {
            window.location.href = '../Morty/fase2.html'
            break
        } else if (escolha3 !== 'c' || escolha3 !== 'C' || escolha3 !== 'a' || escolha3 !== 'A') {
            window.location.href = '../GameOver/gameover.html'
            break
        } else {
            alert('Escolha inválida')
        }
    }
}



function escolhaABC4(escolha4) {

    while (escolha4 !== 'a' || escolha4 !== 'A' || escolha4 !== 'b' || escolha4 !== 'B' || escolha4 !== 'C' || escolha4 !== 'c') {

        escolha4 = prompt('Qual opção você escolhe?')

        if (escolha4 === 'c' || escolha4 === 'C') {
            window.location.href = '../Morty/fase3.html'
            break
        } else if (escolha4 !== 'a' || escolha4 !== 'A' || escolha4 !== 'b' || escolha4 !== 'B') {
            window.location.href = '../GameOver/gameover.html'
            break
        } else {
            alert('Escolha inválida')
        }
    }
}




function escolhaABC5(escolha5) {

    while (escolha5 !== 'a' || escolha5 !== 'A' || escolha5 !== 'b' || escolha5 !== 'B' || escolha5 !== 'C' || escolha5 !== 'c') {

        escolha5 = prompt('Qual opção você escolhe?')

        if (escolha5 === 'c' || escolha5 === 'C') {
            window.location.href = '../BP/fase2.html'
            break
        } else if (escolha5 !== 'a' || escolha5 !== 'A' || escolha5 !== 'b' || escolha5 !== 'B') {
            window.location.href = '../GameOver/gameover.html'
            break
        } else {
            alert('Escolha inválida')
        }
    }
}


function escolhaABC6(escolha6) {

    while (escolha6 !== 'a' || escolha6 !== 'A' || escolha6 !== 'b' || escolha6 !== 'B' || escolha6 !== 'C' || escolha6 !== 'c') {

        escolha6 = prompt('Qual opção você escolhe?')

        if (escolha6 === 'a' || escolha6 === 'A') {
            window.location.href = '../BP/fase3.html'
            break
        } else if (escolha6 !== 'c' || escolha6 !== 'C' || escolha6 !== 'b' || escolha6 !== 'B') {
            window.location.href = '../GameOver/gameover.html'
            break
        } else {
            alert('Escolha inválida')
        }
    }
} 