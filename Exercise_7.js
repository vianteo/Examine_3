// Diberikan sebuah function yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angka tersebut adalah bilangan prima. 
// Jika tidak, return false.

function bilanganPrima(num) {
    if (num <= 1) {
        return false; 
    }

       for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}


console.log(bilanganPrima(2));   
console.log(bilanganPrima(3));    
console.log(bilanganPrima(4));    
console.log(bilanganPrima(17));  
console.log(bilanganPrima(20));   
console.log(bilanganPrima(29));   
