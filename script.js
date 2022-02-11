function sortear() {

    let min = document.getElementById('minimo').value;
    let max = document.getElementById('maximo').value;
    var res = document.querySelector('#resultado');

    if (min - max >= 0) {
        alert('Informe um intervalo de números válido');
        return;
    }

    min = Math.ceil(min);
    max = Math.floor(max);
    let numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    res.innerText = numSorteado;
}