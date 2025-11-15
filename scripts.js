const videoww = document.getElementById("videoww")
const videodm = document.getElementById("videodm")
const videosn = document.getElementById("videosn")
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
});

function enviarDados(formData) {
    fetch('https://script.google.com/macros/s/AKfycby2W5FEtbzhkNy5CviSJmLXQ93JeTlYciLQ4BiqLgIJtVFPqqszZ5puCLHwWGN_IaSGbw/exec', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}
