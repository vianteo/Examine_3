// Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
// Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika 
// dan false jika sebaliknya.
// Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
// Contoh,2, 4,6, 8adalah deret aritmatika dengan pertambahan nilai sebesar 2, 
// dan 2, 4, 6, 9 bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten

function isArithmeticSequence(arr) {
    if (arr.length < 2) {
        return true;
    }
    
    const difference = arr[1] - arr[0];
    
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== difference) {
            return false;
        }
    }
    
    return true;
}

console.log(isArithmeticSequence([2, 4, 6, 8])); 
console.log(isArithmeticSequence([2, 4, 6, 9])); 
console.log(isArithmeticSequence([5, 10, 15, 20])); 
console.log(isArithmeticSequence([1, 3, 6, 9])); 
