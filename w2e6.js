//1. Melakukan Looping Menggunakan While
var counter1 = 20
var counter2 = 0

console.log('LOOPING PERTAMA')
while (counter1 > 0){
    counter2 += 2
    counter1 -= 2
    console.log(counter2 + ' - I love coding')
}

console.log('LOOPING KEDUA')
var counter2 = 22
while (counter2 > 2){    
    counter2 -= 2
    console.log(counter2 + ' - I love coding')
}


//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for(var x = 1; x <= 20; x++){
    console.log(x + ' - I love coding')
}

console.log('LOOPING KEDUA')
for(var y = 20; y >= 1; y--){
    console.log(y + ' - I will become fullstack developer')
}


//3. Angka Ganjil dan Genap
for(var i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log('GENAP')
    } else {
        console.log('GANJIL')
    }
}

for(var j = 1; j <= 100; j+= 2){
    if(j % 3 == 0){
        console.log(j +' KELIPATAN 3')
    } else {
        console.log(' ')
    }
}

for(var k = 1; k <= 100; k+= 5){
    if(k % 6 == 0){
        console.log(k +' KELIPATAN 6')
    } else {
        console.log(' ')
    }
}

for(var l = 1; l <= 100; l+= 9){
    if(l % 10 == 0){
        console.log(l +' KELIPATAN 10')
    } else {
        console.log(' ')
    }
}
