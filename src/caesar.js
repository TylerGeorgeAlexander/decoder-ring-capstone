// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    const alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  
    const strArr = []
    
    // if the input from shift is 0, greater than 25, or less than -25 return false
    if(shift === 0 || shift > 25 || shift < -25 || shift === undefined) return false;
    // if encode has a false input, swap the shift from decode to encode
    if(encode == false){
      shift = -shift;
    }
    // iterate through the input and sort the letters out
    for(let i = 0; i < input.length; i++){
      // find the character at the proper index
      let shiftIndex = input.charAt(i)
      // if our alphabet doesn't include the character, such as punctuation or spaces, push it
        if(!alpha.includes(shiftIndex)){
          strArr.push(shiftIndex)
        } else {
          // iterate through the alphabet and push the character to the shifted spot in the array
          for(let j = 0; j < alpha.length; j++){
            let newShift = j + 26 + shift;
            if(alpha.charAt(j) === shiftIndex){
              strArr.push(alpha.charAt(newShift))
              break;
            }
          }
        }
    }
    // join the array and return the string after it was transformed
      return strArr.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
