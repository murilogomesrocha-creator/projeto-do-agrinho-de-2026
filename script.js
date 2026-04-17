// Função para rolar até a seção de texto
function irParaTexto() {
    const elemento = document.getElementById('secao-texto');
    elemento.scrollIntoView({ behavior: 'smooth' });
    
    // Pequeno efeito visual para destacar o texto ao chegar
    elemento.style.backgroundColor = "#e8f5e9";
    setTimeout(() => {
        elemento.style.backgroundColor = "#ffffff";
    }, 1000);
}