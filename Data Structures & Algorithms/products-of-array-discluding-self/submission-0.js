class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(arr) {
        const n = arr.length;
        const res = new Array(n).fill(1);

        let prod = 1;
        for (let i = 0; i < n; i++) {
            res[i] = prod;
            prod *= arr[i];
        }

        let suff = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= suff;
            suff *= arr[i];
        }
        return res;
    }
}
