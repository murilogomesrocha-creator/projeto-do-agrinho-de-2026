function atualizarDados() {
    const tempElement = document.getElementById('temp');
    const statusClima = document.getElementById('status-clima');
    
    // Simulação térmica inteligente da estufa
    let novaTemp = Math.floor(Math.random() * (29 - 21 + 1)) + 21;
    tempElement.innerText = novaTemp + "°C";

    if (novaTemp > 26) {
        statusClima.innerText = "Status: Ventilação Ativa";
        statusClima.style.color = "#ef6c00";
    } else {
        statusClima.innerText = "Status: Ideal";
        statusClima.style.color = "#2e7d32";
    }
}

function irrigar() {
    const chuva = document.getElementById('chuva-animada');
    const umidade = document.getElementById('umidade');
    const statusAgua = document.getElementById('status-agua');
    const tomates = document.querySelectorAll('.tomate.realista');

    chuva.style.display = "block";
    statusAgua.innerText = "Irrigando...";
    statusAgua.style.color = "#0288d1";

    setTimeout(() => {
        chuva.style.display = "none";
        umidade.innerText = "78%";
        statusAgua.innerText = "Solo Hidratado";
        statusAgua.style.color = "#2e7d32";
        
        // Pulsação sutil nos tomates simulando absorção e viço
        tomates.forEach(tomate => {
            tomate.style.transform = "scale(1.15)";
            setTimeout(() => tomate.style.transform = "scale(1)", 400);
        });

        alert("Irrigação Eco-Gotejamento concluída utilizando água coletada da chuva!");
    }, 2500);
}

function irParaTexto() {
    const secao = document.getElementById('secao-texto');
    secao.scrollIntoView({ behavior: 'smooth' });
    
    secao.style.backgroundColor = "#f1f8e9";
    setTimeout(() => {
        secao.style.backgroundColor = "#ffffff";
    }, 1200);
}

// Inicializa o monitoramento automático a cada 4 segundos
setInterval(atualizarDados, 4000);