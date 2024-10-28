document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const data = document.getElementById('data').value;

    if (data === '') {
        alert('Por favor, selecione uma data antes de confirmar.'); // Alerta ao usuário
    } else {
        // Redireciona para catalogo.html
        window.location.href = 'catalogo.html';
    }
});

const params = new URLSearchParams(window.location.search);
const servico = params.get('servico');
document.getElementById('servico').textContent = servico || '';