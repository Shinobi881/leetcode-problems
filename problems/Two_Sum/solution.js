/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let test = [];
    const newNums = [].slice.call(nums);

  
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        const num1 = nums[i];
        const num2 = nums[j];
        
        if (i !== j) {
          if ((num1 + num2) === target) {

             return [i, j]
          }
        }
      }
  }
  
  console.log(test);
  
  return 
};