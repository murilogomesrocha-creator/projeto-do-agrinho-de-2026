function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const textos = {
        'energia': "<strong>☀️ Energia Solar:</strong> O topo da nossa estufa capta a luz do sol para gerar eletricidade. Isso mantém os sistemas de ventilação ligados sem gastar energia da rede elétrica pública!",
        'biologico': "<strong>🐞 Equilíbrio Vivo:</strong> Dentro desta estufa, os tomates crescem protegidos. Usamos controle biológico (insetos predadores) para que não seja necessário o uso de agrotóxicos.",
        'agua': "<strong>💧 Ciclo da Água:</strong> Aqui embaixo, a água da chuva é filtrada e levada diretamente às raízes por gotejamento inteligente, economizando até 90% de água."
    };

    detalhe.innerHTML = textos[tipo];
    
    // Efeito de destaque no texto
    const box = document.getElementById('info-box');
    box.style.transform = "scale(1.02)";
    setTimeout(() => { box.style.transform = "scale(1)"; }, 200);
}