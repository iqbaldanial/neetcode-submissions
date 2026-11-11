class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        //if number, push into the stack
        // if meet operand, pop 2 from the top and do the calculation.
        //push back the answer
        let n = tokens.length;
        let result = [];
        for(let i =0 ;i < n; i++ ){
            if(tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/"){
                let top = parseInt(result.pop())
                let prev = parseInt(result.pop())

                switch (tokens[i]){
                    case "+":
                        result.push((prev + top));
                        break;
                    case "-":
                        result.push((prev - top));
                        break;
                    case "*":
                        result.push((prev * top));
                        break;
                    case "/":
                        result.push(Math.trunc(prev / top));
                        break;
                    default:
                        break;
                }
            }else{
                result.push(tokens[i]);
            }
        }

        return Math.trunc(result[0]);
    }

}
