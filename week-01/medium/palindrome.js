/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

let reverseStr = (str) => {
  if (str === "") return "";
  return reverseStr(str.substring(1))  +str[0];
};

function isPalindrome(str) {
  str = str.toLowerCase();
  newStr = "";

  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i);
    if (char >= "a" && char <= "z") newStr += char;
  }

  // #1
  // return newStr === newStr.split("").reverse().join("");

  // #2
  return newStr === reverseStr(newStr);
}

module.exports = isPalindrome;
