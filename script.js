function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const mensagens = {
        'energia': "☀️ <strong>Energia Solar:</strong> Sustenta os sistemas que garantem a qualidade dos frutos colhidos.",
        'biologico': "🐞 <strong>Equilíbrio:</strong> A joaninha protege a plantação, permitindo que os cestos fiquem cheios de tomates saudáveis.",
        'agua': "💧 <strong>Irrigação:</strong> Eficiência hídrica para que cada pé produza o máximo com o mínimo de água.",
        'pessoas': "🧺 <strong>A Colheita:</strong> Os cestos (sextos) cheios mostram o sucesso do manejo sustentável. É a recompensa do trabalho em harmonia com o meio ambiente!"
    };

    detalhe.innerHTML = mensagens[tipo];
    
    const box = document.getElementById('info-box');
    box.style.backgroundColor = "#e8f5e9";
    setTimeout(() => { box.style.backgroundColor = "white"; }, 300);
}