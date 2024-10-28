let catalogos = document.querySelectorAll('.click');
        catalogos.forEach(catalogo => {
            catalogo.addEventListener('click', () => {
                const servico = catalogo.getAttribute('data-servico');
                window.location.href = `agendamento.html?servico=${encodeURIComponent(servico)}`;
            });
        });