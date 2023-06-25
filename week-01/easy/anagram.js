/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

let compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) return false;

  for (let [key, val] of map1) {
    let testVal = map2.get(key);
    if (testVal !== val || (testVal === undefined && !map2.has(key)))
      return false;
  }
  return true;
};

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // #1
  // if (str1.length != str2.length) return false;
  // return (
  //   str1.split("").sort().join("") ===
  //   str2.split("").sort().join("")
  // );

  // #2 | Using Maps
  if (str1.length != str2.length) return false;
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (map1.has(char)) map1.set(char, map1.get(char) + 1);
    else map1.set(char, 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (map2.has(char)) map2.set(char, map2.get(char) + 1);
    else map2.set(char, 1);
  }
  console.log(map1);
  return compareMaps(map1, map2);
}

console.log(isAnagram("hjjj", "jhjj"));

module.exports = isAnagram;
