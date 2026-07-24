class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let left = 0;
        let right = arr.length-1;

        while(left <= right){
            let m = left + Math.floor((right - left) / 2);
            if(target === arr[m]){
                return m;
            }

            if (arr[left] <= arr[m]) {
                    if (target >= arr[left] && target < arr[m]) {
                        right = m - 1;
                    } else {
                        left = m + 1;
                    }
                } else {
                    if (target > arr[m] && target <= arr[right]) {
                        left = m + 1;
                    } else {
                        right = m - 1;
                    }
                }
            }
            return -1
            }
}
