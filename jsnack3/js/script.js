let n = "";
do {
    n = parseInt(prompt("Fino a che numero vuoi fare l'operazione cubo?"));
}while (n <= 0 || isNaN(n));
for (let i = 1 ; i <= n ; i++ ) {
    console.log("Il cubo di ", i , " è " , i*i*i , " Moltiplicazione diretta");
    console.log("Il cubo di ", i , " è " , Math.pow(i, 3) , " funzione Math.pow()");
}