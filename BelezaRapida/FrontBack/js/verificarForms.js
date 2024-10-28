
function validarSenhas(formId, senhaId, confirmarSenhaId, mensagemErroId) {
    document.getElementById(formId).addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const campo1 = document.getElementById(senhaId).value;
        const campo2 = document.getElementById(confirmarSenhaId).value;
        const mensagemErro = document.getElementById(mensagemErroId);

        // Limpa mensagem de erro anterior
        mensagemErro.textContent = '';

        // Verifica se os campos são iguais
        if (campo1 !== campo2) {
            mensagemErro.textContent = 'As senhas devem ser iguais.';
            mensagemErro.style.color = 'red';
            mensagemErro.style.textAlign = 'left';
            mensagemErro.style.fontWeight = 'bold';
            mensagemErro.style.textDecoration = 'underline';
        } 
        else {
            // Se os campos são iguais, envia o formulário
            mensagemErro.textContent = '';
            // Aqui você pode enviar o formulário, se desejar
            // document.getElementById(formId).submit();
        }
    });
}
