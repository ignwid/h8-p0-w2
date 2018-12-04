//1. Menyusun Barisan Bintang
var rows1 = prompt("input number of rows: ");
var i;
for(var i = 0; i < rows1; i++) {
    console.log('*');
}


//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows1 = prompt("input number of rows: ");
for(var i = 0; i < rows1; i++) {
    var star = "";
    for (var j = 0; j < rows1; j++) {
        star += "*";
    }
    console.log(star);
}


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows1 = prompt("input number of rows: ");
for(var i = 1; i <= rows1; i++) {
    var star = "";
    for (var j = 0; j < i; j++) {
        star += "*";
    }
    console.log(star);
}