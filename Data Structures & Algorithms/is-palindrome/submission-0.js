class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let s_trim = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        let n = s_trim.length -1
        let isPalin = true;
        for(let i =0; i<n/2 ;i++){
            if(s_trim[i] != s_trim[n-i]){
                return false
            }
        }
        return isPalin
    }
}
