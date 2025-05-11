// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe("convertToRoman", function () {
  it("should convert 10 to X", function () {
    expect(convertToRoman(10)).to.equal("X");
  });

  it("should convert 1 to I", function () {
    expect(convertToRoman(1)).to.equal("I");
  });

  it("should convert 7 to VII", function () {
    expect(convertToRoman(7)).to.equal("VII");
  });

  it("should convert 9 to IX", function () {
    expect(convertToRoman(9)).to.equal("IX");
  });

  it("should convert 3999 to MMMCMXCIX", function () {
    expect(convertToRoman(3999)).to.equal("MMMCMXCIX");
  });

  it("should throw an error for numbers less than 1", function () {
    expect(() => convertToRoman(0)).to.throw("Please enter a number between 1 and 3999");
  });

  it("should throw an error for numbers less than 1", function () {
    expect(() => convertToRoman(-10)).to.throw("Please enter a number between 1 and 3999");
  });

  it("should throw an error for numbers greater than 3999", function () {
    expect(() => convertToRoman(4000)).to.throw("Please enter a number between 1 and 3999");
  });

  it("should throw an error for numbers greater than 3999", function () {
    expect(() => convertToRoman(1000000000000000000000000000)).to.throw("Please enter a number between 1 and 3999");
  });

  it("should throw an error for floating point numbers", function () {
    expect(() => convertToRoman(0.5)).to.throw("Please enter a number between 1 and 3999");
  });
 
  it("should throw an error if you try to pass anything that's not a number", function () {
    expect(() => convertToRoman("X")).to.throw("Please enter a number between 1 and 3999");
  });

});

describe("romanToInteger", function () {
  it('should convert "I" to 1', function () {
    expect(convertToDecimal("I")).to.equal(1);
  });

  it('should convert "X" to 10', function () {
    expect(convertToDecimal("X")).to.equal(10);
  });

  it('should convert "VII" to 7', function () {
    expect(convertToDecimal("VII")).to.equal(7);
  });

  it('should convert "IX" to 9', function () {
    expect(convertToDecimal("IX")).to.equal(9);
  });
  
  it("should throw an error for empty input", function () {
    expect(() => convertToDecimal("")).to.throw("Please enter valid Roman numerals (I, V, X, L, C, D, M)");
  });

  it("should throw an error for invalid roman numerals", function () {
    expect(() => convertToDecimal("AB")).to.throw("Please enter valid Roman numerals (I, V, X, L, C, D, M)");
  });

  it("should throw an error if you try passing a number", function () {
    expect(() => convertToDecimal("100")).to.throw("Please enter valid Roman numerals (I, V, X, L, C, D, M)");
  });

  it("should throw an error if for invalid formats", function () {
    expect(() => convertToDecimal("MMMM")).to.throw("Invalid Roman numeral format");
  });
});
