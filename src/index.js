// complete the function
function palindrom(str) {
  
  
  var rExp = /[\W_]/g;   // Using the RegExp to remove unwanted characters from it
  var lowerStr = str.toLowerCase().replace(rExp, ''); // Changing the string to lowercase, and replacing
  var reverseStr = lowerStr.split('').reverse().join(''); // .split() is used to split each string, .reverse() is used to reverse the split words, .join() adds the reversed words together
  return reverseStr === lowerStr;
}

// code goes here






function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
