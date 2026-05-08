function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Energia Solar:</strong> Sustenta os sensores de umidade para todos os 8 setores da plantação.",
        'biologico': "🐞 <strong>Super Produção:</strong> Com 8 pés de tomate, mostramos que é possível produzir muito alimento em pouco espaço usando controle biológico (sem venenos).",
        'agua': "💧 <strong>Irrigação Coletiva:</strong> O sistema distribui água de forma igual para cada pé de tomate, economizando recursos hídricos.",
        'pessoas': "👨‍🌾 <strong>Trabalhadores Protegidos:</strong> O uso de chapéu garante a saúde da nossa equipe enquanto eles cuidam dessa grande colheita!"
    };

    detalhe.innerHTML = mensagens[tipo];
    
    const box = document.getElementById('info-box');
    box.style.backgroundColor = "#f1f8e9";
    setTimeout(() => { box.style.backgroundColor = "white"; }, 300);
}