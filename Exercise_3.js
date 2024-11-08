// Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).
// Note: Jika sudah berhasil menyelesaikan masalah ini menggunakan built-in function .sort(), 
// coba juga menggunakan algoritma sortingmu sendiri

function sortStringAsc(text) {
    return text.split('').sort().join('');
}

console.log(sortStringAsc("hello"));
console.log(sortStringAsc("world"));
