const botao = document.querySelector('#botaoimc');
botao.addEventListener('click', () => {
    let pesoinput = document.querySelector('#peso').value;
    let alturainput = document.querySelector('#altura').value;

    let peso = parseInt(pesoinput);
    let altura = parseInt(alturainput);

    let calculo = peso / (altura * altura);

    if(calculo <= '20'){
        document.querySelector('#resultado').innerHTML = 'estás no peso ideal';
    }else{
        document.querySelector('#resultado').innerHTML = ''
    }
});










