function konversiMenit(menit) {
  // you can only write your code here!
  var jam = menit
  var counter = 0
  
  while(jam > 59){
     jam = jam - 60
   counter += 1
  }
  if(jam < 10){
    return counter + ':0' + jam
  } else {
    return counter + ':' + jam
  }
     
}

  
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00



