function verificaValor() {
    const numero = +chute

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'

    }

    /*if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }*/

    if(numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Você precisa
        chutar um número entre ${menorValor} e ${maiorValor}</div>`

        return
    }


    if(numero === numeroSecreto) {
        
        document.body.innerHTML = `
        <div class="voce-acertou"><h2>Você acertou. Parabéns!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button></div>
        `
        startConfetti()
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor 
            <i class="fa-solid fa-arrow-down-long fa-beat"></i></div>
    </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior 
            <i class="fa-solid fa-arrow-up-long fa-beat"></i></div>
    </div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})