class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //sorted the array first
        // like two sum but this time using 3 pointer i,j,k ? 3 loop ?
        // left + outer + [iterate in the middle]
        // if sum > 0 right --
        // if sum < 0 left ++

        const sorted = nums.sort((a,b) => a-b);
        let n = sorted.length -1
        let left,right;
        let result = [];
            
        for(let i=0; i < n-1 ;i++){
         left = i+1
         right = n

            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            while(left < right){
                let sum = sorted[left] + sorted[right] + sorted[i];
                if(sum === 0){
                    result.push([sorted[left],sorted[i],sorted[right]])
                    right--;
                    left++;
                    //skip duplicate >> iterate until next item not same
                    while (left < right && sorted[left] === sorted[left - 1]) left++;
                    while (left < right && sorted[right] === sorted[right + 1]) right--;
                }else if(sum < 0){
                    left++;
                }else if(sum >0){
                    right--;
                }
            }    
        }
        return [...result]
        
    }
}
