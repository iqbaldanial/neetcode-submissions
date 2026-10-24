class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1 = s.split("").sort() //b,b,c,c
        const s2 = t.split("").sort() // cccb
        if(s.length != t.length) return false


        for(let i =0;i<s1.length;i++){
            if(s1[i] != s2[i]) return false
        }
        return true
    }

    // AscSort(s){
    //     for(let i =0;i<s.length-1;i++){
    //         for(let j=i+1;j<s.length;j++){
    //             if(s[i]> s[j]){
    //                 let temp = s[i]
    //                 s[i] = s[j]
    //                 s[j] = temp
    //             }
    //         }
    //     }
    // }
}
