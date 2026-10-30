class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // two pointer , left and right
        // since sorted
        // if left + right > target right-- 
        // if left + right < target left ++
        // to get O(n) 
        let n = numbers.length-1
        let left = 0;
        let right = n

        while(left < right ){
            let sum = numbers[left] + numbers[right]
            if(sum > target){
                right--;
            }else if (sum < target){
                left++;
            }else{
                return [left+1,right+1]
            }
        }
    }
}
