class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length
        let ans= []
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                let sum = nums[i]+nums[j];
                if(sum == target){
                        ans.push(i)
                        ans.push(j)
                }
            }
        }
        return ans
    }
}
