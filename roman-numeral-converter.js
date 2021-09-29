function convertToRoman(num) {
  let romanStr = '';
  let thousands = Math.floor(num/1000 % 10),
  hundreds = Math.floor(num/100 % 10),
  tens = Math.floor(num/10 % 10),
  ones = Math.floor(num % 10);
  console.log(hundreds)
  console.log(tens)
  console.log(ones);

  // 13. case: 1-3 in tens place
  // 14. case: 4 in tens place
  // 15. case: 5 in tens place
  // 16. case 6-9 in tens place
  
  // thousands
  if (thousands >= 1 && thousands <= 3) {
    romanStr += 'M'.repeat(thousands)
  }
  else if (thousands == 4) {
    romanStr += 'CD';
  }
  else if (thousands == 5) {
    romanStr += 'D';
  }
  else if (thousands > 5 && thousands <= 8) {
    romanStr += 'D' + 'M'.repeat(thousands - 5);
  }
  else if (thousands == 9) {
    romanStr += 'CM';
  }


  // hundreds:
  if (hundreds >= 1 && hundreds <= 3) {
    romanStr += 'C'.repeat(tens)
  }
  else if (hundreds == 4) {
    romanStr += 'CD';
  }
  else if (hundreds == 5) {
    romanStr += 'D';
  }
  else if (hundreds > 5 && hundreds <= 8) {
    romanStr += 'D' + 'C'.repeat(hundreds - 5);
  }
  else if (hundreds == 9) {
    romanStr += 'CM'
  }
  
  // tens: 
  if (tens >= 1 && tens <= 3) {
    romanStr += 'X'.repeat(tens)
  }
  else if (tens == 4) {
    romanStr += 'XL';
  }
  else if (tens == 5) {
    romanStr += 'L';
  }
  else if (tens > 5 && tens <= 8) {
    romanStr += 'L' + 'X'.repeat(tens - 5);
  }
  else if (tens == 9) {
    romanStr += 'XC'
  }

  // ones:
  if (ones >= 1 && ones <= 3) {
    romanStr += 'I'.repeat(ones);
  }
  else if (ones == 4) {
    romanStr += 'IV';
  }
  else if (ones == 5) {
    romanStr += 'V';
  }
  else if (ones > 5 && ones <= 8) {
    romanStr += 'V' + 'I'.repeat(ones - 5);
  }
  else if (ones == 9) {
    romanStr += 'IX';
  }
  console.log(romanStr)
  return romanStr;
}

convertToRoman(649);