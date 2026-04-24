function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Energia Solar:</strong> Captamos a luz solar para manter a temperatura ideal, reduzindo custos e a pegada de carbono do cultivo.",
        'biologico': "🐞 <strong>Controle Biológico:</strong> Plantas saudáveis com folhas verdes indicam um ambiente equilibrado, onde usamos a própria natureza para controlar pragas.",
        'agua': "💧 <strong>Irrigação Inteligente:</strong> O sistema de gotejamento entrega a umidade exata para as raízes, preservando nossos recursos hídricos preciosos."
    };

    detalhe.innerHTML = mensagens[tipo];
    
    const box = document.getElementById('info-box');
    box.style.backgroundColor = "#e8f5e9";
    setTimeout(() => { box.style.backgroundColor = "white"; }, 300);
}