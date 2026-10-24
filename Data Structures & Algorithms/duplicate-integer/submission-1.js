class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n = nums.length;
        //sort the array first
        nums.sort();
        if(n <=0)
        return false;
        for(let i =0;i<n-1;i++){
            //check if the arr next is the same or not
            if(nums[i] == nums[i+1]){
                return true;
            }
        }
        return false;
    }
}
