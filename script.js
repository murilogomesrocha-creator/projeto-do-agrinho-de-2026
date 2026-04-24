function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const textos = {
        'energia': "<strong>☀️ Energia Solar:</strong> Utilizamos painéis fotovoltaicos para alimentar os sensores e as bombas de água, tornando a estufa autossuficiente em energia limpa.",
        'biologico': "<strong>🐞 Controle Biológico:</strong> Em vez de agrotóxicos, usamos 'insetos do bem' (como joaninhas) para combater pragas naturalmente, mantendo o equilíbrio ambiental.",
        'agua': "<strong>💧 Ciclo da Água:</strong> Sensores de umidade no solo dizem exatamente quanta água a planta precisa, evitando desperdícios e usando água da chuva captada."
    };

    detalhe.innerHTML = textos[tipo];
    
    // Pequeno efeito visual ao clicar
    const box = document.getElementById('info-box');
    box.style.borderColor = "#ef4444";
    setTimeout(() => { box.style.borderColor = "#22c55e"; }, 500);
}