while(true) {
  let playerInput = prompt("Pilih batu, gunting, kertas:");
  let player = playerInput.toLowerCase(); //Convert input to lowercase
  let bot = Math.floor(Math.random()*10);

  if(bot < 3){
      bot = 'kertas';
  }else if(bot > 3 && bot <= 6){
      bot = 'batu';
  }else{
      bot = 'gunting';
  }

  let hasil;

  if(player == bot){
    hasil = 'Hasil permainan seri';
  }else if(bot == 'kertas'){
    if(player == 'gunting'){
      hasil = 'SELAMAT KAMU MENANG';
    }else if(player == 'batu'){
      hasil = 'KAMU KALAH, COBA LAGI';
    }else{
      alert("Tidak Dapat Mendeteksi!")
    }
  }else if(bot == 'batu'){
    if(player == 'kertas'){
      hasil = 'SELAMAT KAMU MENANG';
    }else if(player == 'gunting'){
      hasil = 'KAMU KALAH, COBA LAGI';
    }else{
      alert("Tidak Dapat Mendeteksi!")
    }
  }else if(bot == 'gunting'){
    if(player == 'batu'){
      hasil = 'SELAMAT KAMU MENANG';
    }else if(player == 'kertas'){
      hasil = 'KAMU KALAH, COBA LAGI';
    }else{
      alert("Tidak Dapat Mendeteksi!")
    }
  }
  alert("Ronald memilih "+bot+" sedangkan kamu memilih "+player+" hasil permainan adalah: "+hasil);
}


