function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const informacoes = {
        'energia': "☀️ **Energia Solar:** Utilizamos painéis fotovoltaicos para alimentar os sensores e as bombas de água, tornando a estufa autossuficiente em energia limpa.",
        'agua': "💧 **Irrigação por Gotejamento:** Sensores de umidade no solo dizem exatamente quanta água a planta precisa, evitando desperdícios e usando água da chuva captada.",
        'biologico': "🐞 **Controle Biológico:** Em vez de agrotóxicos, usamos 'insetos do bem' (como joaninhas) para combater pragas naturalmente, mantendo o equilíbrio ambiental."
    };

    detalhe.innerHTML = informacoes[tipo];
    
    // Pequeno efeito visual ao clicar
    const box = document.getElementById('info-box');
    box.style.borderColor = "#ef4444";
    setTimeout(() => { box.style.borderColor = "#22c55e"; }, 500);
}
