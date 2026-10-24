class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        let result = [];
        for( const num of nums){
            count.set(num,(count.get(num) || 0) +1)
        }

        // convert int array because map cannot be sort directly
        const array = [...count.entries()]; 

        // sort
        array.sort((a,b) => b[1] - a[1]);


        for(let i=0; i<k; i++){
            result.push(array[i][0]);
        }

        return result;
    }
}
