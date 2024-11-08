// Buatlah function bernama reverseString yang mampu melakukan proses pembalikan string!

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
console.log(reverseString("world")); 
