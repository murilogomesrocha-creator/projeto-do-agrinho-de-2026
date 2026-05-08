function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Energia Solar:</strong> Alimenta todo o sistema automatizado dos 5 setores da estufa.",
        'biologico': "🐞 <strong>Alta Produtividade:</strong> Com 5 pés de tomate bem cuidados e controle biológico, garantimos uma colheita farta e livre de venenos.",
        'agua': "💧 <strong>Irrigação de Precisão:</strong> Cada pé de tomate recebe a quantidade exata de água captada da chuva.",
        'pessoas': "👨‍🌾 <strong>Equipe do Campo:</strong> O agricultor e a técnica monitoram a saúde de cada planta para garantir o melhor alimento."
    };

    detalhe.innerHTML = mensagens[tipo];
    
    const box = document.getElementById('info-box');
    box.style.borderColor = "#d32f2f";
    setTimeout(() => { box.style.borderColor = "#4caf50"; }, 400);
}