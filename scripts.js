const videoww = document.getElementById("videoww")
const videodm = document.getElementById("videodm")
const videosn = document.getElementById("videosn")
const botaoenviar = document.getElementById("botaoenviar")
var ServidorRecebeu = false;
videoww.addEventListener('mouseover', function () {
    return videoww.play();
})
videoww.addEventListener('mouseout', function () {
    return videoww.load();
})
videodm.addEventListener('mouseover', function () {
    return videodm.play(), videodm.volume = 0.03;
})
videodm.addEventListener('mouseout', function () {
    return videodm.load();
})
videosn.addEventListener('mouseover', function () {
    return videosn.play();
})
videosn.addEventListener('mouseout', function () {
    return videosn.load();
})

const form = document.getElementById('form')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    enviarDados(formData);
    this.reset();
});

function enviarDados(formData) {
    fetch('https://script.google.com/macros/s/AKfycby2W5FEtbzhkNy5CviSJmLXQ93JeTlYciLQ4BiqLgIJtVFPqqszZ5puCLHwWGN_IaSGbw/exec', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            ServidorRecebeu = true;
            console.log('Sucesso:', data);

        })
        .catch((error) => {
            ServidorRecebeu = false;
            console.error('Erro:', error);
        });
}

function DadosEnviados() {
    const container = document.getElementById('container-spans');
    const novoSpan = document.createElement('span');
    novoSpan.textContent = 'Dados enviados!';
    novoSpan.classList.add('span-animado');

    container.appendChild(novoSpan);

    void novoSpan.offsetWidth;

    novoSpan.classList.add('span-visivel');

    setTimeout(() => {
        novoSpan.classList.remove('span-visivel');
        setTimeout(() => {
            if (container.contains(novoSpan)) {
                container.removeChild(novoSpan);
            }
        }, 500);
    }, 1500);
}
function InfosEmFalta() {
    const container = document.getElementById('container-spans');
    const novoSpan = document.createElement('span');
    novoSpan.textContent = 'Complete as informações em falta!';
    novoSpan.classList.add('span-animado');

    container.appendChild(novoSpan);

    void novoSpan.offsetWidth;

    novoSpan.classList.add('span-visivel');

    setTimeout(() => {
        novoSpan.classList.remove('span-visivel');
        setTimeout(() => {
            if (container.contains(novoSpan)) {
                container.removeChild(novoSpan);
            }
        }, 500);
    }, 1500);
};

botaoenviar.addEventListener('click', function () {
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")

    if (nome.value == "" && email.value == "") {
        return InfosEmFalta();
    }
    else if (ServidorRecebeu = true) {
        return DadosEnviados();
    } else {
        return console.log("Servidor não recebeu!")
    }

});
