function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Energia Solar:</strong> Sustenta toda a nossa produção de forma limpa.",
        'biologico': "🐞 <strong>Cachos de Tomate:</strong> Manejo sustentável gera plantas carregadas de frutos saudáveis.",
        'agua': "💧 <strong>Irrigação:</strong> Gotejamento de precisão para economizar água.",
        'pessoas': "🧺 <strong>Novo Cesto de Colheita:</strong> Mudamos para o modelo 'Balaio Arredondado', um tipo tradicional de vime marrom claro que protege melhor os tomates durante a colheita manual."
    };

    detalhe.innerHTML = mensagens[tipo];
    
    const box = document.getElementById('info-box');
    box.style.backgroundColor = "#e8f5e9";
    setTimeout(() => { box.style.backgroundColor = "white"; }, 300);
}