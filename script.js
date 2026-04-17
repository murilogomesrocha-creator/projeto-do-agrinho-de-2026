function irrigar() {
    const chuva = document.getElementById('chuva-animada');
    const umidade = document.getElementById('umidade');
    const imagem = document.querySelector('.imagem-estufa');
    
    chuva.style.display = "block";
    imagem.style.filter = "brightness(0.8) sepia(0.2)"; // Efeito de "molhado"
    
    setTimeout(() => {
        chuva.style.display = "none";
        imagem.style.filter = "none"; // Volta ao normal
        umidade.innerText = "85%";
        alert("Irrigação sustentável concluída!");
    }, 2000);
}