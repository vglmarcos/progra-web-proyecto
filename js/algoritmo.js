const btnAgregarElemento = document.getElementById('agregarElemento');
const btnLimpiarLista = document.getElementById('limpiarLista');
const btnOrdenarLista = document.getElementById('ordenarLista');
const listaNumeros = document.getElementById('lista-numeros');
const listaNumerosOrdenados = document.getElementById('lista-numeros-ordenados');
var array = [];
var arrayOrder = [];

const agregarElemento = () => {
    let isNumber = !isNaN(parseInt(document.getElementById('campoElemento').value));
    if (isNumber) {
        array.push(parseInt(document.getElementById('campoElemento').value));
        const nuevoItem = document.createElement('li');
        nuevoItem.innerHTML = `${document.getElementById('campoElemento').value}`;
        listaNumeros.appendChild(nuevoItem);
        btnOrdenarLista.removeAttribute('disabled');
        btnLimpiarLista.removeAttribute('disabled');
    } else {
        confirm("Solo se deben ingresar números enteros.");
    }
    document.getElementById('campoElemento').value = '';
};

const ordenarLista = () => {
    if (array.length !== 0) {
        while (listaNumerosOrdenados.firstChild) {
            listaNumerosOrdenados.removeChild(listaNumerosOrdenados.firstChild);
        }
        arrayOrder = array;
        if (arrayOrder.length > 1) {
            var temp;
            const isNon = arrayOrder.length % 2 === 0 ? false : true;
            for (var i = 0; i < arrayOrder.length; i++) {
                if (i + 1 === arrayOrder.length) {
                    if (!isNon) {
                        temp = arrayOrder[i]
                        arrayOrder[i] = arrayOrder[i + 1];
                        arrayOrder[i + 1] = temp;
                    }
                } else {
                    temp = arrayOrder[i]
                    arrayOrder[i] = arrayOrder[i + 1];
                    arrayOrder[i + 1] = temp;
                }
                i = i + 1;
            }
            for (var i = 0; i < arrayOrder.length; i++) {
                const nuevoItem = document.createElement('li');
                nuevoItem.innerHTML = `${arrayOrder[i]}`;
                listaNumerosOrdenados.appendChild(nuevoItem);
            }
        } else {
            arrayOrder.push(array[0]);
            const nuevoItem = document.createElement('li');
            nuevoItem.innerHTML = `${arrayOrder[0]}`;
            listaNumerosOrdenados.appendChild(nuevoItem);
        }
        btnOrdenarLista.setAttribute('disabled', 'true');
        btnAgregarElemento.setAttribute('disabled', 'true');
    }
    document.getElementById('campoElemento').value = '';
};

const limpiarLista = () => {
    if (array.length !== 0) {
        array = [];
        arrayOrder = [];
        while (listaNumeros.firstChild) {
            listaNumeros.removeChild(listaNumeros.firstChild);
        }
        while (listaNumerosOrdenados.firstChild) {
            listaNumerosOrdenados.removeChild(listaNumerosOrdenados.firstChild);
        }
    }
    btnAgregarElemento.removeAttribute('disabled');
    document.getElementById('campoElemento').value = '';
};

const prevenirCarga = (event) => {
    event.preventDefault();
};

// Detalles al iniciar la página
btnOrdenarLista.setAttribute('disabled', 'true');
btnLimpiarLista.setAttribute('disabled', 'true');
document.getElementById('campoElemento').value = '';

// Eventos
document.addEventListener('submit', prevenirCarga);
btnAgregarElemento.addEventListener('click', agregarElemento);
btnOrdenarLista.addEventListener('click', ordenarLista);
btnLimpiarLista.addEventListener('click', limpiarLista);