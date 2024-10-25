let administrador = true;
let funcionario = false;

let test = document.querySelectorAll('.acoes'); // ou '#acoes' se for um ID
if (administrador) {
    test.forEach(acoes => {
        acoes.style.display = 'block'; // Altera o display de cada elemento
    });
}

// menu
const itens = document.getElementById('itens');

let menucliente = document.getElementById('cliente')
let menufuncionario = document.getElementById('funcionarios');
let menuadm = document.getElementById('adm');

    menu.addEventListener('click', () => {
        const style = window.getComputedStyle(itens);
        
        if (style.display === 'none' || style.display === '') {
            itens.style.display = 'block';
            itens.style.position = 'absolute'; // Verifique se o pai tem posição relativa
        } else {
            itens.style.display = 'none';
        }

        if (funcionario)
            {
                menufuncionario.style.display = 'block'
                menucliente.style.display = 'none';
                menuadm.style.display = 'none'
            }

        else 
        {
            if (administrador) 
                {
                menufuncionario.style.display = 'none';
                menucliente.style.display = 'none';
                menuadm.style.display = 'block';
                }
        }
    });
    

    let imagem = document.getElementById('imgmenu')
    imagem.addEventListener('click', () => {
            if (imagem.src.includes('img/menu.png')) {
                imagem.src = 'img/menuaberto.png'; // Substitua pelo caminho da segunda imagem
            } else {
                imagem.src = 'img/menu.png'; // Substitua pelo caminho da primeira imagem
            }
        });


        let addCatalogo = document.getElementById('adicionarcat')
        addCatalogo.addEventListener('click' , () => {
            window.location.href = 'adicionarcatalogo.html'

        });






        let alteracoes = false;
        let confirmarAlt = document.getElementById('confirmaralteracoes');
        let msgconfirmar = document.getElementById('msgconfirmar');
        confirmarAlt.addEventListener('click', () => {

            alteracoes = true;
            msgconfirmar.textContent = 'Alterações salvas com sucesso.';
            msgconfirmar.style.color = 'red'
            msgconfirmar.style.textAlign = 'left';
            msgconfirmar.style.fontWeight = 'bold';
            msgconfirmar.style.textDecoration = 'underline';


              // Limpa a mensagem após 4 segundos
    setTimeout(() => {
        msgconfirmar.textContent = '';
    }, 4000);

        })

        // deletar catalogo
        let excluirCat = document.querySelectorAll('.delete');
        let confirmacao = false;

        excluirCat.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault(); // Evita o comportamento padrão do link
                element.closest('.catalogo').querySelector('.click').getAttribute('data-servico');

                // Remover o elemento do DOM
                element.closest('.catalogo').remove();
                
            });
        });
        
        // Editar catálogo
        let editarCat = document.querySelectorAll('.editar');
        editarCat.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault(); // Evita o comportamento padrão do link
                const servico = element.closest('.catalogo').querySelector('.click').getAttribute('data-servico');
                // Aqui você pode redirecionar para a página de edição
                window.location.href = `editarcatalogo.html?servico=${encodeURIComponent(servico)}`;
            });
        });
        
     