class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length-1;
        let maxWater = 0;

        while(i < j){
            let area = Math.min(heights[i], heights[j]) * (j - i);
            maxWater = Math.max(maxWater, area);

        if (heights[i] <= heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return maxWater
    }
}
