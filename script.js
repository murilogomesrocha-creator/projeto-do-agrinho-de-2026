function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Energia Solar:</strong> Captamos a luz solar para manter a temperatura ideal, reduzindo custos e pegada de carbono.",
        'biologico': "🐞 <strong>Controle Biológico:</strong> Os tomates crescem saudáveis com a ajuda de predadores naturais de pragas, eliminando defensivos químicos.",
        'agua': "💧 <strong>Irrigação Inteligente:</strong> O sistema de gotejamento entrega a umidade exata para as raízes, preservando nossos recursos hídricos."
    };

    detalhe.innerHTML = mensagens[tipo];
    
    // Pequeno efeito de feedback
    const box = document.getElementById('info-box');
    box.style.backgroundColor = "#e8f5e9";
    setTimeout(() => { box.style.backgroundColor = "white"; }, 300);
}