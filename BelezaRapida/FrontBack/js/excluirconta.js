document.getElementById('formexcluir').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    let campoexcluir = document.querySelector('.campoexcluir').value;
    let msgerror = document.getElementById('error');

    if (campoexcluir !== 'Concordo') {
        msgerror.textContent = 'Digitado de forma incorreta.';
        msgerror.style.color = 'red';
        msgerror.style.textAlign = 'left';
        msgerror.style.fontWeight = 'bold';
        msgerror.style.textDecoration = 'underline';
    } else {
        msgerror.style.display = 'none'; // Oculta a mensagem de erro
        window.location.href = 'index.html';
    }
});
