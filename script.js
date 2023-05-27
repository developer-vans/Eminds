// As discussed, here I am sharing the Code.

// through this Code test below and this code should be submitted to us through Github.

 

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.Examples:

 

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]

// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]

// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]

// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]

// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".

// The first that came is "folingtrashy" so

// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:

// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return “” (return Nothing in Elm, “nothing” in Erlang).Note:
// consecutive strings : follow one after another without an interruption Instructions for better code:

// 1.    Use an online IDE and share the link of solution

// 2.    Do not use image of the code to share your code

// 3.    Provide the time and space complexity of your solution in the code comment

// 4.    Try to find a Linear time & space or better solution

// 5.    Add more tests cases including the edge cases for the problem

// 6.    Avoid nested loop


// function longestConsecutiveStrings(strarr, k) {
//     var n = strarr.length;
    
//     // Check if the array length is less than k
//     if (n < k) {
//       return "Invalid input";
//     }
    
//     var longestString = "";
//     var maxLength = 0;
  
//     // Iterate through the array using a sliding window technique
//     for (var i = 0; i <= n - k; i++) {
//       var window = strarr.slice(i, i + k);
//       var currentString = window.join('');
  
//       // Check if the current string is longer than the previous longest string
//       if (currentString.length > maxLength) {
//         maxLength = currentString.length;
//         longestString = currentString;
//       }
//     }
    
//     return longestString;
//   }
  
//   // Example usage
//   var strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
//   var k = 2;
  
//   var result = longestConsecutiveStrings(strarr, k);
//   console.log(result);


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
  
  // Example usage
  var strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
  var k = 2;
  
  var result = longestConsecutiveStrings(strarr, k);
  console.log(result);
  



  /*In the above code, the longestConsecutiveStrings function takes the strarr array and k as inputs. It initializes longestString as an empty string and maxLength as 0.

The function then iterates through the array using a sliding window approach. For each iteration, it slices the strarr from the current index to the current index plus k. This gives us the window of k consecutive strings.

Next, it joins the strings within the window using .join('') to create a single string.

If the current string is longer than the previous longest string (currentString.length > maxLength), it updates the longestString and maxLength accordingly.

Finally, it returns the longestString as the result.*/

