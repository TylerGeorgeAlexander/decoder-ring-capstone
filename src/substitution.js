// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    // should return false if the substitution alphabet is missing
    if(alphabet == undefined || alphabet.length !== 26) return false;
    const strAlphabet = "abcdefghijklmnopqrstuvwxyz";
    // console.log(strAlphabet.charCodeAt(0)) iirc "a" = 97

    // Testing different way to spot duplicate characters
    //let uniqueCheck = alphabet.split("").some((currentValue, currentIndex) => strAlphabet.split("").indexOf(currentValue) !== currentIndex)
    //if (uniqueCheck) return false;

    // create an alphabet encode or decode object
    const codeAlpha = {};
    // Since encode is true, we are merging our strAlphabet as a key value pair with the inputted alphabet
    if (encode) {
      for (let i = 0; i < 26; i++) {
        if (!Object.values(codeAlpha).includes(alphabet[i])) {
          codeAlpha[strAlphabet.charAt(i)] = alphabet.charAt(i);
        } else {
          return false;
        }
      }
    } else {
      // This part encode is false, so we swap the key : value pair to decode
      for (let i = 0; i < 26; i++) {
        codeAlpha[alphabet.charAt(i)] = strAlphabet.charAt(i);
      }
    }

    // encode or decode using the new alphabet

    // declare an empty array
    const strArr = [];

    // iterate through everything if encode is false AKA decode
    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        let currentChar = input.charAt(i);
        if (currentChar === " "){
          strArr.push(" ");
        } else {
          strArr.push(codeAlpha[currentChar]);         
        }
      }
      return strArr.join("");
    }
    // iterate through the characters and encode
    for (let i = 0; i < input.length; i++) {
      // find the character at the proper index
      let currentChar = input.charAt(i);
      // if our alphabet doesn't include the character, such as punctuation or spaces, push it as is
      if (currentChar.charCodeAt() < 97 || currentChar.charCodeAt() > 122) {
        strArr.push(currentChar);
      } else {
        // push the current key value to the array
        strArr.push(codeAlpha[currentChar]);
      }
    }
    return strArr.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
