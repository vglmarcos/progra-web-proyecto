// Código sacado de https://gist.github.com/ger86/b94d5ba92e667bb631a745b8cf297723#file-quicksort-test-js
// por Ger86

const defaultSortingAlgorithm = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

const quickSort = (unsortedArray, sortingAlgorithm = defaultSortingAlgorithm) => {
    // immutable version
    const sortedArray = [...unsortedArray];

    const swapArrayElements = (arrayToSwap, i, j) => {
        const a = arrayToSwap[i];
        arrayToSwap[i] = arrayToSwap[j];
        arrayToSwap[j] = a;
    };

    const partition = (arrayToDivide, start, end) => {
        const pivot = arrayToDivide[end];
        let splitIndex = start;
        for (let j = start; j <= end - 1; j++) {
            const sortValue = sortingAlgorithm(arrayToDivide[j], pivot);
            if (sortValue === -1) {
                swapArrayElements(arrayToDivide, splitIndex, j);
                splitIndex++;
            }
        }
        swapArrayElements(arrayToDivide, splitIndex, end);
        return splitIndex;
    };

    // Recursively sort sub-arrays.
    const recursiveSort = (arraytoSort, start, end) => {
        // stop condition
        if (start < end) {
            const pivotPosition = partition(arraytoSort, start, end);
            recursiveSort(arraytoSort, start, pivotPosition - 1);
            recursiveSort(arraytoSort, pivotPosition + 1, end);
        }
    };

    // Sort the entire array.
    recursiveSort(sortedArray, 0, unsortedArray.length - 1);
    return sortedArray;
};

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
        arrayOrder = quickSort(array);
        if (arrayOrder.length > 1) {
            arrayOrder.forEach(element => {
                const nuevoItem = document.createElement('li');
                nuevoItem.innerHTML = `${element}`;
                listaNumerosOrdenados.appendChild(nuevoItem);
            });
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
    btnLimpiarLista.setAttribute('disabled', 'true');
    btnOrdenarLista.setAttribute('disabled', 'true');
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