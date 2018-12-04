function balikKata(kata) {
    var contohKata = '';
    
    for(var i = kata.length-1; i >= 0; i--){
        contohKata += kata[i];
    }
    return contohKata;
}

console.log(balikKata('Hello World'));