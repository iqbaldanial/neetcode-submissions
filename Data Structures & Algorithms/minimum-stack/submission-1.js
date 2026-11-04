class MinStack {
    constructor() {
         this.items = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.items.length === 0) return null;
        else{
            return this.items.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length -1]
    }

    /**
     * @return {number}
     */
    getMin() {
        let n = this.items.length;
        let min = Number.MAX_VALUE;
        if(n === 0) return null;

        for(let i =0; i <n; i++){
            if(this.items[i] < min){
                min = this.items[i];
            }
        }

        return min;
    }
}
