// Buatlah function yang mereturn array berisi angka prima. 
// Function tersebut menerima input angka Pertama dan angka Kedua, 
// dan mencari semua angka prima yang ada di antara angka Pertama dan angka Kedua.

function bilanganPrima(num) {
    if (num <= 1) return false; 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }

    return true; 
}

function findPrimasInRange(angkaPertama, angkaKedua) {
    let prima = [];

    for (let i = angkaPertama; i <= angkaKedua; i++) {
        if (bilanganPrima(i)) { 
            prima.push(i);
        }
    }

    return prima;
}

console.log(findPrimasInRange(10, 20)); 
console.log(findPrimasInRange(1, 10));  
console.log(findPrimasInRange(20, 30)); 
console.log(findPrimasInRange(50, 60)); 

