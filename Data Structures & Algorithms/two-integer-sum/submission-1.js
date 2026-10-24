class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length;
        let n1,n2;
        for(let i=0;i<n-1;i++){
            for(let j=i+1;j<n;j++){
                if(nums[i]+ nums[j] == target){
                    n1 = i;
                    n2=j;
                }
            }
        }
        return [n1,n2]
    }
}
