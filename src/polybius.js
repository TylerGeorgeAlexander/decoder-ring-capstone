// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // ignore uppercase
    input = input.toLowerCase();
    // declare our encode alphabet
    const encodeAlpha = {
      a: "11", b: "21", c: "31",
      d: "41", e: "51", f: "12",
      g: "22", h: "32", i: "42",
      j: "42", k: "52", l: "13",
      m: "23", n: "33", o: "43",
      p: "53", q: "14", r: "24",
      s: "34", t: "44", u: "54",
      v: "15", w: "25", x: "35",
      y: "45", z: "55",
  };
    const decodeAlpha = {
      '11':'a', '21':'b', '31':'c', '41':'d', '51':'e',
      '12':'f', '22':'g', '32':'h', '42':'(i/j)', '52':'k',
      '13':'l', '23':'m', '33':'n', '43':'o', '53':'p',
      '14':'q', '24':'r', '34':'s', '44':'t', '54':'u',
      '15':'v', '25':'w', '35':'x', '45':'y', '55':'z'
    }
// declare an empty array
const strArr = []
// iterate through the characters and decode if encode is true
if(encode){
  for(let i = 0; i < input.length; i++){
  // find the character at the proper index
  const currentChar = input.charAt(i);
  // if our alphabet doesn't include the character, such as punctuation or spaces, push it as is
  if (currentChar.charCodeAt() < 97 || currentChar.charCodeAt() > 122){
    strArr.push(currentChar)
    } else {
      // push the current key value to the array
      strArr.push(encodeAlpha[currentChar])
    }
  }
} else {
  // test if the number of characters are even, excluding the spaces
  if(input.replace(" ", "").length % 2 == 1) return false;
  // iterate through the pair of numbers, check if there are spaces or pairs of integers
  for(let i = 0; i < input.length; i+=2){
    const charOne = input.charAt(i);
    const charTwo = input.charAt(i + 1)
    // if there is a space, push it and reduce the increment
    if(charOne == " "){
      strArr.push(" ")
      i--
    } else {
      // push the pair of numbers through the decoder object bank
      strArr.push(decodeAlpha[`${charOne}${charTwo}`])
    }
  }
}
  // join the array and return the string after it was transformed
  return strArr.join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
