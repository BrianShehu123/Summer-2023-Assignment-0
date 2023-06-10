function isPalindrome(word) {
  // Insert code here;
  temp = word.split("").reverse().join("");
  if(word === temp)
    return true;
  return false;
}

// Do not edit this line;
module.exports = isPalindrome;
