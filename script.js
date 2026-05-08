function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Energia Solar:</strong> Fornece energia limpa para controlar o clima dentro da estufa.",
        'biologico': "🐞 <strong>Controle Biológico:</strong> Usamos joaninhas para manter os tomates livres de pragas e venenos.",
        'agua': "💧 <strong>Irrigação:</strong> Gotejamento de precisão que economiza água e nutre a planta.",
        'pessoas': "👨‍🌾 <strong>Cuidado Humano:</strong> O uso de chapéu e boné simboliza a segurança no trabalho e o carinho das pessoas com o campo!"
    };

    detalhe.innerHTML = mensagens[tipo];
    
    const box = document.getElementById('info-box');
    box.style.backgroundColor = "#e8f5e9";
    setTimeout(() => { box.style.backgroundColor = "white"; }, 300);
}