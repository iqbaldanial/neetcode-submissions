class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   counter = [];
    encode(strs) {
        //can design the string like (num of length string)#(string list)
        // exp : 5#Hello5#World
        let encodedStr = ""
        for(let str of strs){
            let n = str.length;
            encodedStr +=`${n}#${str}`
        }

        return encodedStr

    }
    

    /**
     * @param {string} str
     * @returns {string[]}
     */

    decode(str) {
        //iterate each char to find the # ?
        //look at the prev to get the length ?
        // move the pointer to the next str ?
        // exp : 5#Hello5#World
        let n = str.length;
        let pointer ;
        let result = [];
        let i=0
        while(i<n){
            pointer = i;
            while (str[pointer] !== '#') {
                pointer++;
            }
                let l = parseInt(str.substring(i,pointer)); // 5
                let temp = str.substring(pointer+1 ,l + pointer +1);
                result.push(temp);
                i = l + pointer + 1;
        }
        return result;
    }
}
