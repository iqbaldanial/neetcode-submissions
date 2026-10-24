class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   counter = [];
    encode(strs) {
        let ss = "";
        // how do i combine them as a string but a pattern where i can split them?
        // [Hello Test, World] -> Hello Test World -> [Hello Test, World]
        // [Hello Test, World] -> 10#Hello Test5#World -> [Hello Test, World]
        // put like header so that it detects ?
        for(let i=0;i<strs.length;i++){
            ss +=`${strs[i].length}#${strs[i]}`;
        }
        return ss;
    }
    

    /**
     * @param {string} str
     * @returns {string[]}
     */

    decode(str) {
        // str = 5#Hello5#World
        // iterate through the str to look for #
        let i=0;
        const result =[];
        while(i < str.length){
            let next =i;
            while(str[next] != '#'){
                next++;
            }
            let counter = parseInt(str.slice(i,next));
            i = next + 1;
            let temp = str.slice(i,i + counter);
            result.push(temp)
            i+=counter;
            
        }
        return result
        


        // const l = str.length;
        // let startIndex =0;
        // let tempStr ;
        // const temp = []
        // for(let i=0;i<this.counter.length;i++){
        //     let len = this.counter[i];
        //     let chunck = str.slice(startIndex, startIndex + len) ;
        //     temp.push(chunck)
        //     startIndex += len;

        //     if (startIndex >= str.length) {
        //     break;
        //     }
        // }

        // return temp
        // const result = str.split(" ");
        // const finalResult = result.slice(0,result.length-1);
        // return finalResult
    }
}
