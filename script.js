function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Energia Solar:</strong> Fornece eletricidade limpa para os sistemas da estufa.",
        'biologico': "🐞 <strong>Controle Biológico:</strong> A natureza trabalha conosco para proteger os tomates sem químicos.",
        'agua': "💧 <strong>Irrigação Inteligente:</strong> O gotejamento automático garante que nenhuma gota seja desperdiçada.",
        'pessoas': "👨‍🌾 <strong>Trabalho Humano:</strong> A tecnologia ajuda, mas o cuidado e o conhecimento das pessoas são essenciais para um futuro sustentável no agro!"
    };

    detalhe.innerHTML = mensagens[tipo];
    
    const box = document.getElementById('info-box');
    box.style.backgroundColor = "#e8f5e9";
    setTimeout(() => { box.style.backgroundColor = "white"; }, 300);
}