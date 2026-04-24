function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    const box = document.getElementById('info-box');
    
    const textos = {
        'energia': "🚀 **ENERGIA LIMPA:** O teto é inclinado para captar o máximo de sol. Essa energia mantém os sensores funcionando sem gastar eletricidade da rede!",
        'agua': "💧 **GOTA A GOTA:** No chão, tubos inteligentes liberam água direto na raiz. O sensor verde avisa se a terra estiver seca, economizando 90% de água.",
        'biologico': "🐞 **EQUILÍBRIO VIVO:** Dentro da estufa, joaninhas controlam as pragas. Sem veneno, o tomate é mais saudável e o solo continua fértil para o futuro."
    };

    detalhe.style.opacity = 0;
    setTimeout(() => {
        detalhe.innerHTML = textos[tipo];
        detalhe.style.opacity = 1;
    }, 200);

    // Feedback visual de clique
    box.style.transform = "scale(1.02)";
    setTimeout(() => box.style.transform = "scale(1)", 200);
}