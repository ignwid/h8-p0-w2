var tanggal = prompt("Masukkan tanggal (angka antara 1-31)");
var bulan = prompt("Masukkan bulan (angka antara 1-12)");
switch (bulan) {
    case '1':
     var bulan = 'Januari';
     break;
     
     case '2':
     var bulan = 'Februari';
     break;

     case '3':
     var bulan = 'Maret';
     break;

     case '4':
     var bulan = 'April';
     break;

     case '5':
     var bulan = 'Mei';
     break;

     case '6':
     var bulan = 'Juni';
     break;

     case '7':
     var bulan = 'Juli';
     break;

     case '8':
     var bulan = 'Agustus';
     break;
     
     case '9':
     var bulan = 'September';
     break;
     
     case '10':
     var bulan = 'Oktober';
     break;
     
     case '11':
     var bulan = 'November';
     break;
     
     case '12':
     var bulan = 'Desember';
     break;
     
     
    default:
     console.log('Invalid month');
     break;
  }
var tahun = prompt("Masukkan tahun (angka antara 1900-2200)");
console.log(tanggal + " " + bulan + " " + tahun);