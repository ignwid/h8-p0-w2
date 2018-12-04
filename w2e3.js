var nama = prompt("Nama harus diisi!");
var peran = prompt("Hallo "+ nama +", Pilih peranmu untuk memulai game!");
	
	if (peran === 'Tabib'){
	  console.log("Hallo " + peran +" " + nama + ", kamu akan membantu temanmu yang terluka.");
	} else if (peran === 'Ksatria'){
	  console.log("Hallo " + peran +" "+ nama + ", kamu dapat menyerang dengan senjatamu!");
	} else if (peran === 'Penyihir'){
	  console.log("Hallo " + peran +" "+ nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
	} else {
		var peran = prompt(" Pilih peranmu untuk memulai game!");
		if (peran === 'Tabib'){
		  console.log("Hallo " + peran +" " + nama + ", kamu akan membantu temanmu yang terluka.");
	      } else if (peran === 'Ksatria'){
		  console.log("Hallo " + peran +" "+ nama + ", kamu dapat menyerang dengan senjatamu!");
	      } else if (peran === 'Penyihir'){
		  console.log("Hallo " + peran +" "+ nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
	      }
	}
	
	