class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result=[]
        // sort the array
        nums.sort((a, b) => b-a);

        const map = new Map();

        for(const num of nums){
            map.set(num, (map.get(num) || 0 ) +1);
        }
        const sortedByFreq = [...map.entries()].sort((a,b) => b[1] - a[1]);

        return sortedByFreq.slice(0,k).map(x => x[0])
    }
}
