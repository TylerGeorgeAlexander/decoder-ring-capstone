// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe(("substitution"), () => {
    it("When an input and a substitution are given, the output should be a string", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });


    it("Spaces should be maintained throughout. Capital letters can be ignored.", () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });
    
    it("When encode is set to false, the output should be decoded.", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
    });
    
    it("Encode Test - The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
    });
    
    it("Decode Test - The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.equal(expected);
    });

    it("Too Short Alphabet Test - The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
    });
    
    it("All the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
    });

});