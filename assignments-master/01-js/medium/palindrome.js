/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toUpperCase();
  let r = true;
  let strarray = str.split('').filter(char => /[A-Z]/.test(char));

  for (let i = 0, j = strarray.length - 1; i <= j; i++, j--) {
    if (strarray[i] != strarray[j]) {
      r = false;
      break;
    }
  }

  return r;
}

module.exports = isPalindrome;
