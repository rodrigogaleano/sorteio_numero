function sortear() {
    let min = document.getElementById('minimo').value;
    let max = document.getElementById('maximo').value;
    min = Math.ceil(min);
    max = Math.floor(max);
    let numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('resultado').innerText = 'Resultado: ' + numSorteado;
}