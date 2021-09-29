// Convert any arabic numerial to roman numerial with 1 to 1000's place

// For each X place, up to thousand's
// Case A: 0 in X place
// do nothing; do not record
// Case B: 1-3 in X place
// tally I's
// Case C. 4 in X place
// subtract I from 5'S roman numerial
// Case D. 5 in X place
// place 5's roman numerial
// Case E: 6-9 in X place
// Add 5's roman numerial and tally I's

convertToRoman = (num) => {
  let romanStr = '';
  let thousands = Math.floor(num/1000 % 10),
  hundreds = Math.floor(num/100 % 10),
  tens = Math.floor(num/10 % 10),
  ones = Math.floor(num % 10);
  
  // convert thousands place
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


  // convert hundreds place
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
  
  // convert tens place
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

  // convert ones place
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
  return romanStr;
}

let num = 649;
console.log("num: " + num);
console.log(convertToRoman(num));