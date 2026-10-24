class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map ={}
        //loop through each
        for(let i=0; i< strs.length; i++){
            let split = strs[i].split('').sort().join('');
            if(!map[split]){
                map[split] = [];
            }
            map[split].push(strs[i]);
        }

        return Object.values(map);
    }
}
