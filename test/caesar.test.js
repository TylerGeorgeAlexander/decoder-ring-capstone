/*

caesar()
The caesar() function in the src/caesar.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
shift refers to how much each letter is "shifted" by. 
A positive number means shifting to the right (i.e. "A" becomes "D") whereas a 
negative number means shifting to the left (i.e. "M" becomes "K").
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

If the shift value is not present, equal to 0, less than -25, 
or greater than 25, the function should return false.
Spaces should be maintained throughout, as should other non-alphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), 
it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
*/

const { expect } = require("chai");
const { caesar }  = require("../src/caesar");


describe(("caesar shift"), () => {
    it("should loop over the end of the alphabet", () => {
      const actual = caesar("A to Z!", 2);
      const expected = "c vq b!";
      expect(actual).to.equal(expected);
    });


    it("should ignore uppercase letters", () => {
      const actual = caesar("THINKFUL", 3);
      const expected = "wklqnixo";
      expect(actual).to.equal(expected);
    });

    it("should decode if encode is set to false, and the shift is known", () => {
      const actual = caesar("wklqnixo", 3, false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols when encoding", () => {
      const actual = caesar("This is a secret message!", 8);
      const expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols when decoding", () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      const expected = "this is a secret message!";
      expect(actual).to.equal(expected);
    });

    it("shift input equals 0 will return false", () => {
      const actual = caesar("thinkful", 0);
      expect(actual).to.be.false;
    });

    it("shift input greater than 25, should equal false", () => {
      const actual = caesar("thinkful", 26);
      expect(actual).to.be.false;
    });

    it("shift input less than -25, should equal false", () => {
      const actual = caesar("thinkful", -26);
      expect(actual).to.be.false;
    });

    it("shift input empty will return false", () => {
      const actual = caesar("thinkful");
      expect(actual).to.be.false;
    });
});
