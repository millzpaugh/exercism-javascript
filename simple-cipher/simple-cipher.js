const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

class Cipher {
  constructor(key) {
    this.key = key || this.generateKey();
    this.encodedMessage = '';
    this.decodedMessage = '';

    if (/\d/.test(key) || key === '') throw new Error('Bad key');
  }

  encode(src) {
    this.encodedMessage = '';
    src.split('').forEach((letter) => {
      let idx = alpha.indexOf(letter) + 3; 
      if (idx > alpha.length-1){
        idx = alpha.length - (1 + idx); 
      }
      let codeLetter = alpha[alpha.indexOf(letter) + 3]; 
      this.encodedMessage += codeLetter;
    }); 

    this.key = this.encodedMessage; 

    return this.key;
  }

  decode(src){
    this.decodedMessage = '';
    src.split('').forEach((letter) => {
      let idx = alpha.indexOf(letter) - 3; 
      if (idx < 0){
        idx = alpha.length - (Math.abs(idx) +1); 
      }
      let codeLetter = alpha[idx]; 
      this.decodedMessage += codeLetter;
    }); 

    this.key = this.decodedMessage; 

    return this.key;
  }

  generateKey() {
    let code = '';
    for(let i=0; i <=100; i++){
      // change to randomly selected letter
      code += alpha[Math.floor(Math.random() * Math.floor(alpha.length-1))];
    }
    return code; 
  }
};


module.exports = Cipher;