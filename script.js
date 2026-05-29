function atualizarDados() {
    const tempElement = document.getElementById('temp');
    const statusClima = document.getElementById('status-clima');
    
    let novaTemp = Math.floor(Math.random() * (28 - 21 + 1)) + 21;
    tempElement.innerText = novaTemp + "°C";

    if (novaTemp > 25) {
        statusClima.innerText = "Status: Janelas Abertas";
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
        umidade.innerText = "80%";
        statusAgua.innerText = "Solo Hidratado";
        statusAgua.style.color = "#2e7d32";
        
        tomates.forEach(tomate => {
            tomate.style.transform = "scale(1.2)";
            setTimeout(() => tomate.style.transform = "scale(1)", 400);
        });

        alert("Gotejamento sustentável ativado pela dupla responsável!");
    }, 2000);
}

function irParaTexto() {
    document.getElementById('secao-texto').scrollIntoView({ behavior: 'smooth' });
}

setInterval(atualizarDados, 4000);