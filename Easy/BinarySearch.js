/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

// TODO: Binary search is something like this, could be done with recursion
// split array in middle
// see if number to left is <= target
//   if yes discard right side
//   if not discard left side
// do it again
// while nums has no more numbers
// if target is found return it
// else return -1







let binaryNumFinder = function (arr, x, start, end) {
  // If starting index is greater than ending index return false.
  if (start > end) return -1;

  // Compute the middle index.
  let middle = Math.round((start + end) / 2);

  // Compare the middle element with number x. If equal return true.
  if (arr[middle] === x) return middle;

  // If greater, call the same function with ending index = middle-1 and repeat step 1.
  if (arr[middle] > x) return binaryNumFinder(arr, x, start, middle - 1);

  // If smaller, call the same function with starting index = middle+1 and repeat step 1.
  if (arr[middle] < x) return binaryNumFinder(arr, x, middle + 1, end);
}

var search = function(nums, target) {
    binaryNumFinder(nums, target, 0, nums.length - 1);
};

search([-1,0,3,5,9,12], 9);
search([-1,0,3,5,9,12], 2);
