function longestConsecutiveStrings(strarr, k) {
  var n = strarr.length;

  // Check if the array length is less than k
  if (n < k) {
    return "Invalid input";
  }

  var longestString = "";
  var maxLength = 0;

  // Calculate the initial length of the first window
  var currentLength = 0;
  for (var i = 0; i < k; i++) {
    currentLength += strarr[i].length;
  }

  maxLength = currentLength;
  longestString = strarr.slice(0, k).join('');

  // Slide the window and update the longest string
  for (var j = k; j < n; j++) {
    currentLength = currentLength - strarr[j - k].length + strarr[j].length;

    if (currentLength > maxLength) {
      maxLength = currentLength;
      longestString = strarr.slice(j - k + 1, j + 1).join('');
    }
  }

  return longestString;
}

var strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
var strarr2 = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]
var k = 2;

var result = longestConsecutiveStrings(strarr, k);
var result2 = longestConsecutiveStrings(strarr2, k);
console.log(result, result2);

//Time complexity is O(n) Linear and space complexity is O(1) constant
