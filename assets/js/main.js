function meuEscopo() {
    const form = document.querySelector("#form");
    const resultado = document.querySelector("#resultado");

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = document.querySelector('#peso');
        const altura = document.querySelector('#altura');

        const imc = peso.value / (altura.value * altura.value);

        if (!Number(peso.value) || peso.value == " ") {
            resultado.innerHTML = `<p> Peso Inválido</p>`;
            resultado.style.background = "#FD7388";
        } else if (!Number(altura.value) || altura.value == " ") {
            resultado.innerHTML = `<p>Altura Inválida</p>`;
            resultado.style.background = "#FD7388";
        } else {
            if (imc < 18, 5) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`;
                resultado.style.background = "#00fec2";
            } else if (imc > 18, 5 && imc < 24, 9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`;
                resultado.style.background = "#00fec2";
            } else if (imc > 25 && imc < 29, 9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Entre Sobrepeso)</p>`;
                resultado.style.background = "#00fec2";
            } else if (imc > 30 && imc < 34, 9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`;
                resultado.style.background = "#00fec2";
            } else if (imc > 35 && imc < 39, 9) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`;
                resultado.style.background = "#00fec2";
            } else if (imc > 40) {
                resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`;
                resultado.style.background = "#00fec2";
            }
        }

    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();