class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //sort the array 
        nums.sort((a,b) => a-b);

        const list = {};
        let counter =1;
        for(const num of nums){
            if(!list[num]){
                counter = 1;
                list[num] = [];
                list[num][0] = counter;
            }else{
                counter++;
                list[num][0] = counter;
            }
        }

        const result = (Object.keys(list).sort((a,b) => list[b][0] - list[a][0])).map(Number)
        return result.slice(0,k)
    }
}
