/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  const arr = s.split("");

  let tempArr = [];
  let counter = 0;
  let map = new Map();
  map.set("R", 0).set("L", 0);

  for (item in arr) {
    tempArr.push(arr[item]);

    map.set(arr[item], map.get(arr[item]) + 1);
    let iterator = map.values();
    if (iterator.next().value === iterator.next().value) {
      console.log(tempArr.join(""));
      counter += 1;
      tempArr = [];
    }
  }

  // console.log(counter);
  return counter;
};

balancedStringSplit("LLLLRRRR");

/*
Approach: The approach to solving this problem is to loop through the string and keep incrementing the count of L and R whenever encountered. Any instant when the respective counts of L and R become equal, a balanced parenthesis is formed. Thus the count of such instances gives the desired maximum possible partitions.
Below is the implementation of the above approach:


Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
*/
