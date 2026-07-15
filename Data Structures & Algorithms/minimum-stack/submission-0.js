class MinStack {
    constructor() {
        this.s = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.s.length === 0) {
            this.s.push([val, val]);
        } else {
            const minVal = Math.min(val, this.s[this.s.length - 1][1]);
            this.s.push([val, minVal]);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.s.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.s[this.s.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.s[this.s.length - 1][1];
    }
}
