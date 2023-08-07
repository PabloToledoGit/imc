const botao = document.querySelector('#botaoimc');
botao.addEventListener('click', () => {
    let pesoinput = document.querySelector('#peso').value;
    let alturainput = document.querySelector('#altura').value;

    let peso = parseFloat(pesoinput);
    let altura = parseFloat(alturainput) / 100;  

    let calculo = peso / (altura * altura);

    let resultadoimc = document.querySelector('#resultado');



    if (calculo < 18.5) {
        resultadoimc.innerHTML = 'Abaixo do peso';
    } else if (calculo < 24.9) {
        resultadoimc.innerHTML = 'Peso ideal';
    } else if (calculo < 29.9) {
        resultadoimc.innerHTML = 'Acima do peso';
    } else {
        resultadoimc.innerHTML = 'Obeso';
    }
});
