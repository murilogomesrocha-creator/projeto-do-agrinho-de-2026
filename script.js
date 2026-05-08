function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Eficiência Energética:</strong> Painéis ampliados para sustentar uma estufa maior e mais tecnológica.",
        'biologico': "🐞 <strong>Super Safra:</strong> Graças ao manejo sustentável, nossos galhos estão carregados com cachos de tomates saudáveis!",
        'agua': "💧 <strong>Hidratação Total:</strong> Sistema de irrigação que cobre toda a extensão da estufa, garantindo água para todos os frutos.",
        'pessoas': "🧺 <strong>Colheita Recorde:</strong> Com mais tomates por galho, nossos cestos ficam cheios rapidamente. É o agro forte em ação!"
    };

    detalhe.innerHTML = mensagens[tipo];
    
    const box = document.getElementById('info-box');
    box.style.backgroundColor = "#e8f5e9";
    setTimeout(() => { box.style.backgroundColor = "white"; }, 300);
}