class MinStack {
    constructor() {
        this.minValue = [];
        this.items = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        
        if(this.items.length === 0 || val <= this.getMin()){
            this.minValue.push(val);
        }
        this.items.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const temp = this.items.pop();
        if(temp === this.getMin()){
            this.minValue.pop();
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
        return this.minValue[this.minValue.length -1]
    }
}
