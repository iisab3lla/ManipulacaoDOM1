const contador = document.getElementById('contador');
let cont = 0

function incrementar(){
    cont++
    contador.innerHTML = `<p>O contador está com ${cont} cliques</p>`
}

function zerar(){
    cont = 0
    contador.innerHTML = ""
}