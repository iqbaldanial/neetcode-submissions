class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //two pointers
        // left and right
        // if sum > target
        // right--
        //if sum < target
        // left++

        // O(1) using while loop ? always true ? left < right ?
        let n = numbers.length -1
        let left = 0
        let right = n

        while(left < right){
            let sum = numbers[left] + numbers[right]

            if(sum > target){
                right --;
            }else if(sum < target){
                left++;
            }else{
                return [left + 1, right + 1]
            }
        }
    }
}
