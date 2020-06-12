const contador = () => {
    let n = 1;
    if(localStorage.getItem('count') === null) {
        localStorage.setItem('count', '1');
    } else {
        n = parseInt(localStorage.getItem('count')) + 1;
        localStorage.setItem('count', '' + n);
    }
    return n;
};

document.getElementById("contador").innerHTML = "<h3>Visitante número: " + contador() + "</h3>";