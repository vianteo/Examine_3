// Diberikan sebuah function yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (FaktorPersekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagihabis kedua bilangan tersebut.

function nilaiFPB(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(nilaiFPB(12, 18)); 
console.log(nilaiFPB(100, 80));
console.log(nilaiFPB(27, 9)); 
console.log(nilaiFPB(81, 57));
