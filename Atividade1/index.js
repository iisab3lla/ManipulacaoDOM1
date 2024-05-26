const texto = document.getElementById('texto-paragrafo')
function alterarTexto() {
    const nome = prompt('Digite seu nome')
    if(!nome){
        alert('Digite um nome válido!');
        return;
    }
    texto.textContent = `E aí, ${nome}! Você está deixando o seu site dinâmico.`
};
