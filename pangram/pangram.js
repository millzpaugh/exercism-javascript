const alpha = 'abcdefghijklmnopqrstuvwxyz';

class Pangram{
  constructor(input) {
    this.input = input;
  }

  isPangram(){
    let arr = this.input.split('');
    let filtered = arr.filter((x, idx, self) => idx == self.indexOf(x))
    let filteredNoNumbers = filtered.filter((x) => isFinite(x) === false)
    const letters = filteredNoNumbers.join('').replace(' ', '').replace('_', '');
    const pangram = letters.length === alpha.length ? true : false;
    return pangram;
  }
}

module.exports = Pangram;