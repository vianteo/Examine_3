// Diberikan sebuah function yang menerima satu parameter berupa string. 
// Function tersebut mengembalikan nilai true 
// jika di dalam string tersebut terdapat karakter a dan b 
// yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function AB(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
                if (str[i + 4] === 'b') {
                return true;
            }
        }
        
        if (str[i] === 'b') {
            if (str[i + 4] === 'a') {
                return true;
            }
        }
    }
    return false;
}

console.log(AB("aku bawa banana")); 
console.log(AB("apple")); 
console.log(AB("annabanana")); 
console.log(AB("kebab baba abi")); 
