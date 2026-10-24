class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n = nums.length;
        //sort the array first
        // array : 4,2,1,3
        // nums.sort();
        for(let i = 0;i<n-1;i++){ //0,1,2,3
            for(let j=i+1;j<n;j++){ // 1,2
                if(nums[i] > nums[j]){
                    let temp = nums[j];
                    nums[j] = nums[i]
                    nums[i] = temp
                }
            }
        }
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
