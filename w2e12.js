function konversiMenit(menit) {
    if(menit >= 60 && menit < 120){
      var jam = 1;
      var menit2 = menit - 60;
      if(menit2 < 10){
        menit2 = "0" + menit2
      }
      var tampilanJam = jam + ":" + menit2;
       //console.log(jam + " : " + menit2);
      return tampilanJam;
    }
  
    else if(menit >= 120 ){
      var jam = 2;
      var menit2 = menit - 120;
      if(menit2 < 10){
        menit2 = "0" + menit2
      }
      var tampilanJam = jam + ":" + menit2;
      //console.log(jam + " : " + menit2);
      return tampilanJam;
    }
  
    else if(menit < 60 ){
      var menit2 = 0 + menit;
      var tampilanJam = "0:" + menit2 ;
      //console.log(" 0 : " + menit2);
      return tampilanJam;
    }
  
  
  }

  
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00