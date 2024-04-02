const toggleBtn = document.querySelector('#toggle');
const body = document.body;
const valorInserido = document.querySelector('#valorInserido');
const buttonConversor = document.querySelector('#conversor')
const valorConvertido = document.querySelector('#valorConvertido');
const aviso = document.querySelector('.aviso')
const borda = document.querySelector('.card')

buttonConversor.addEventListener('click', () => {
    if (valorInserido.value === '') {
        aviso.innerHTML = 'Insira Um valor Válido';
        return; // Interrompe a execução do código aqui se o campo estiver vazio
    }
    aviso.innerHTML = ''
    const valueValor = valorInserido.value; // Obtenha o valor do input quando o botão é clicado
    const valorEmDolar = (valueValor / 5.06).toFixed(2);
    valorConvertido.innerHTML = `$ ${valorEmDolar}`;
});



toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    borda.classList.toggle('dark')
    buttonConversor.classList.toggle('dark-mode')
});

function alteraIcone(params) {
    let confere = 0; 
    toggleBtn.addEventListener('click', () => {
        const href = document.querySelector('#href');
        if (confere % 2 === 0) { 
            href.setAttribute('src', 'img/logoClaro-removebg-preview (5).png');
        } else {
            href.setAttribute('src', 'img/logoEscuro-removebg-preview (1).png');
        }
        confere++; 
    });
}

alteraIcone();