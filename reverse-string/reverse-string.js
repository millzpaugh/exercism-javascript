module.exports = function reverseString(input){
  const reverse = input.split(''); 
  let output = '';

  for(let count=reverse.length -1;count>=0;count--){
    output += reverse[count]
  } 

  return output;
}; 