const numFibonacci = document.getElementById('numFibonacci'); // input
const btnGenerar = document.getElementById('btnGenerar'); // botón
const dibujarFibonacci = document.getElementById('dibujarFibonacci'); // Espacio donde agregara la serie
const formFibo = document.getElementById('form-fibo'); // Formulario que envía el submit

const fibonacci = (x) => {
    if (x === 0 || x === 1) {
        return (x);
    }
    return (fibonacci(x - 1) + fibonacci(x - 2));
}

const ejecutarFibonacci = () => {
    dibujarFibonacci.innerHTML = '';
    const isNumber = !isNaN(parseInt(numFibonacci.value));
    if (isNumber) {
        const n = parseInt(numFibonacci.value);
        if (n < 0) {
            confirm('Solo se admiten valores positivos.');
        } else if (n === 0) {
            confirm('0 números fibonacci para ti. :)');
        } else if (n > 30) {
            confirm('Cantidad enorme, al ser recursivo gasta más memoria cuando se generan cantidades grandes.');
        } else {
            for (let i = 0; i < n; i++) {
                if (i + 1 === n) {
                    dibujarFibonacci.innerHTML += `
                        ${fibonacci(i)}.
                    `
                } else {
                    dibujarFibonacci.innerHTML += `
                        ${fibonacci(i)}, 
                    `
                }
            }
        }
    } else {
        confirm('Solo se deben ingresar números enteros.');
    }
};

// Eventos
btnGenerar.addEventListener('click', ejecutarFibonacci);
formFibo.addEventListener('submit', (event) => {
    event.preventDefault();
})




