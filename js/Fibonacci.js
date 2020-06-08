var num = document.getElementById("num").value; 
let isNumber = !isNaN(parseInt(document.getElementById("num").value)); 
var i, x;
/*num= prompt ("Ingresa el número de elementos de la Sucesión de Fibonacci que desee obtener"); */

function fibo(x) {
    if(x==0 || x==1){
        return x;
    }
    else{
        return (fibo(x-1)+ fibo(x-2));
    }
};

document.write("Sucesión de Fibonacci:  ");
for (i = 1; i <= num; i++){
    document.write(fibo(i)+ " , " );
}




