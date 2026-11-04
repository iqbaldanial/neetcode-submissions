class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // check for the opening, if yes, push the closing into the stack
        // if the current is closing, pop the stack and see if it is the same

        let split = s.split("");
        const stack = [];

        for(let s of split){
            if(s === '(') stack.push(')')
            else if(s === '{') stack.push('}')
            else if(s === '[') stack.push(']')
            else if(s === ')') {
                if(s != stack.pop()) return false;
            }
            else if(s === '}') {
                if(s != stack.pop()) return false;
            }
            else if(s === ']') {
                if(s != stack.pop()) return false;
            }
        }
        return stack.length === 0
    }
}
