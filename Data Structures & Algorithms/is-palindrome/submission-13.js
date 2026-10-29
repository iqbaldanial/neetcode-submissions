class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const pattern = /[^a-z0-9]/g;
        let result = s.toLowerCase().replace(pattern,"")
        let n = result.length-1;
        let check = true
        
        //palindrome check half only
        for(let i =0 ;i < n/2; i++){
            if(result[i] != result[n-i])
            
            return false;
        }
        return check;
    }
}
