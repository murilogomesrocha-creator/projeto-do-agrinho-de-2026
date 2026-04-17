// Simulação de sensores
function atualizarSensores() {
    // Gera uma temperatura aleatória entre 20 e 30 graus
    const tempAleatoria = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
    document.getElementById('temp').innerText = tempAleatoria + "°C";

    const statusClima = document.getElementById('status-clima');
    if (tempAleatoria > 28) {
        statusClima.innerText = "Status: Abrindo Janelas Zenitais";
        statusClima.style.color = "orange";
    } else {
        statusClima.innerText = "Status: Ideal";
        statusClima.style.color = "green";
    }
}

function irrigar() {
    const umidadeDisplay = document.getElementById('umidade');
    const statusAgua = document.getElementById('status-agua');
    
    umidadeDisplay.innerText = "80%";
    statusAgua.innerText = "Status: Irrigação Concluída (Reuso)";
    statusAgua.style.color = "blue";

    alert("Irrigação por gotejamento ativada com água da chuva captada!");
}

// Atualiza os sensores a cada 3 segundos
setInterval(atualizarSensores, 3000);