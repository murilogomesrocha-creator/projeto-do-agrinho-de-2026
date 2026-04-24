function mostrarInfo(tipo) {
    const detalhe = document.getElementById('detalhe');
    
    const info = {
        'energia': "☀️ <strong>Energia Solar:</strong> Painéis no topo geram energia limpa para sensores que controlam a temperatura, garantindo que o tomate cresça no clima perfeito.",
        'biologico': "🐞 <strong>Controle Biológico:</strong> Usamos a natureza a nosso favor! As joaninhas ajudam a combater pragas sem a necessidade de venenos químicos.",
        'agua': "💧 <strong>Irrigação por Gotejamento:</strong> A água vai direto na raiz, gota a gota. Isso economiza 90% de água e evita o desperdício no solo."
    };

    detalhe.innerHTML = info[tipo];
    
    // Pequena vibração visual no box de informação
    const box = document.getElementById('info-box');
    box.style.transform = "translateY(-5px)";
    setTimeout(() => { box.style.transform = "translateY(0)"; }, 150);
}