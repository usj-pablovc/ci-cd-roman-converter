const romanNumerals = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function onConvertToRoman() {
  const decimal = document.getElementById("decimal").value;
  const result = document.getElementById("romanResult");

  try {
    const roman = convertToRoman(decimal);

    result.style.color = "#2ecc71";
    result.textContent = `Result: ${roman}`;
  } catch (error) {
    result.textContent = error;
  }
}

function onConvertToDecimal() {
  const roman = document.getElementById("roman").value.toUpperCase();
  const result = document.getElementById("decimalResult");

  try {
    const decimal = convertToDecimal(roman);

    result.style.color = "#2ecc71";
    result.textContent = `Result: ${decimal}`;
  } catch (error) {
    result.textContent = error;
  }

  convertToDecimal(roman);
}

function convertToRoman(decimal) {
  if (isNaN(decimal) || decimal < 1 || decimal > 3999) {
    throw "Please enter a number between 1 and 3999";
  }

  let num = decimal;
  let roman = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return roman;
}

function convertToDecimal(roman) {
  // Validation for invalid characters
  const validRoman = /^[IVXLCDM]+$/;
  if (!validRoman.test(roman)) {
    throw "Please enter valid Roman numerals (I, V, X, L, C, D, M)";
  }

  let decimal = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (next > current) {
      decimal += next - current;
      i++;
    } else {
      decimal += current;
    }
  }

  // Additional validation for correct Roman numeral format
  if (decimal < 1 || decimal > 3999 || !isValidRomanNumeral(roman)) {
    throw "Invalid Roman numeral format";
  }

  return decimal;
}

function isValidRomanNumeral(roman) {
  // Check for invalid repeating characters
  if (/IIII|XXX{2,}|CC{2,}|MM{2,}|VV|LL|DD/.test(roman)) return false;

  // Check for invalid combinations
  if (/I[LCDM]|X[DM]|V[XLCDM]|L[CDM]|D[M]/.test(roman)) return false;

  return true;
}
