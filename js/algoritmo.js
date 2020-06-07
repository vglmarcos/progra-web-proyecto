const btnAgregarElemento = document.getElementById('agregarElemento');
const array = new Array();
const agregarElemento = () => {
    let isNumber = !isNaN(parseInt(document.getElementById('campoElemento').value));
    if(isNumber) {
        array.push(parseInt(document.getElementById('campoElemento').value));
        const nuevoItem = document.createElement('li');
        nuevoItem.innerHTML = `${document.getElementById('campoElemento').value}`;
        document.getElementById('lista-numeros').appendChild(nuevoItem);
    } else {
        confirm("Solo se deben ingresar números enteros.");
    }
    console.log(array);
};

const prevent = (evt) => {
    evt.preventDefault();
}

document.addEventListener('submit', prevent);
btnAgregarElemento.addEventListener('click', agregarElemento);