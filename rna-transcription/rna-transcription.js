const conversiontoRna = {
  'G' : 'C',
  'C' : 'G',
  'T' : 'A',
  'A' : 'U'
}; 

const DnaTranscriber = function () {
}; 

DnaTranscriber.prototype.toRna = (dna) => {
  let output = '';
  dna.split('').forEach((dnaStrain) => {
    const conversion = conversiontoRna[dnaStrain]; 
    if (!conversion) throw new Error('Invalid input'); 
    output += conversion; 
  });
  return output 
};

module.exports = DnaTranscriber;
