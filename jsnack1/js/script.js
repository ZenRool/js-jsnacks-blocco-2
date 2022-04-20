// con il for 
let sum = 0;
for (let i=0 ; i < 5 ; i++) {
    sum += parseInt(prompt("mi dia un numero da sommare"));
}
console.log(sum);

// con il while 
let sum2 = 0;
let j = 0
while (j < 5) {
    const input = prompt ("Dammi un numero while");
    if (!isNaN(parseInt(input))) {
        sum2 += parseInt(input);
        j++;
    }
    else {
        alert ("Ho bisogno di un numero");
    }
}
console.log(sum2);