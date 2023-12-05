/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Convert strings to arrays of characters
  let arraystr1 = Array.from(str1);
  let arraystr2 = Array.from(str2);

  // Sort the arrays
  arraystr1.sort();
  arraystr2.sort();

  /*arraystr1.join(''): This converts the sorted array arraystr1 into
  a string by joining its elements with an empty string as the separator.
  For example, if arraystr1 is ['a', 'b', 'c'], then arraystr1.join('')
  would result in the string 'abc'*/
  // Compare the sorted arrays directly
  return arraystr1.join('') == arraystr2.join('');
}



module.exports = isAnagram;
