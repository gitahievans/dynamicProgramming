// given a target number and an array of numbers, you are needed to determine if it is possible to use any two numbers
// from in the array to come up with the target number

// for example": casnSum(7, [5, 3, 4, 7]) -> true
//              casnSum(7, [2, 4]) -> false

// function canSum(target, nums) {
//   if (target < 0) return false;
//   if (target === 0) return true;

//   for (let num of nums) {
//     const remainder = target - num;
//     if (canSum(remainder, nums) === true) {
//       return true;
//     }
//   }

//   return false;
// }


// Let us memoize the canSum to optimize it

// we first add a memo object as a param to the function
function canSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target < 0) return false;
  if (target === 0) return true;

  for (let num of nums) {
    const remainder = target - num;
    if (canSum(remainder, nums, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  
  memo[target] = false;
  return false;
}

console.log(canSum(300, [7, 14]));

