const botao = document.querySelector('#botaoimc');
botao.addEventListener('click', () => {
    let pesoinput = document.querySelector('#peso').value;
    let alturainput = document.querySelector('#altura').value;

    let peso = parseFloat(pesoinput);
    let altura = parseFloat(alturainput) / 100;  

    let calculo = peso / (altura * altura);

    let resultadoimc = document.querySelector('#resultado');
    
    if (calculo < 18.5) {
        resultadoimc.innerHTML = 'Você está abaixo do peso';
    } else if (calculo < 24.9) {
        resultadoimc.innerHTML = 'Você está no peso ideal';
    } else if (calculo < 29.9) {
        resultadoimc.innerHTML = 'Você está acima do peso';
    } else {
        resultadoimc.innerHTML = 'Você está em estádo de obesidade';
    }
});
