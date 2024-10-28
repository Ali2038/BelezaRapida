document.getElementById('formulariofeed').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const feedback = document.getElementById('feedback').value;

    if (feedback === '') {
         event.preventDefault();
    } else {
        // Redireciona para catalogo.html
        window.location.href = 'catalogo.html';
    }
});