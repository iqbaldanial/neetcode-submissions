class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        //iterate from i to n to see if there is warmer temp
        // also track the counter

        // let n = temp.length
        // let result =[];
        // let counter =0;
        // let curr,next;
        // for(let i =0;i < n; i++){
        //      curr = temp[i]; 
        //     for(let j = i +1; j < n-1; j++){
        //          next = temp[j]
        //         if(next > curr){
        //             result.push(++counter);
        //             counter =0;
        //             break;
        //         }else{
        //             counter++;
        //         }
        //     }
        //     console.log(`curr: ${curr}, next: ${next} , result ${result}`)
            
        // }
        // return result

        // if has warmer, push in the stack 
        // if the stack is empty . push 0

        let stack = [];
        let result = [];
        let n = temp.length;
        
        for(let i =0; i< n; i++){
            while(stack.length >0 && temp[i] > temp[stack[stack.length -1]]){
                let prevIndex = stack.pop();

                let count = i - prevIndex;
                result[prevIndex] = count;
            }
            stack.push(i);
        }
        // add leading zero
        while(stack.length > 0){
            let prevIndex = stack.pop();
            result[prevIndex] = 0;
        }
        return result;
    }
}
