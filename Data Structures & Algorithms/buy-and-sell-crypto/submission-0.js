class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++){
            if(prices[i] - min > maxProfit){
                maxProfit = prices[i]-min;
            }
            if(prices[i]< min){
                min = prices[i];
            }
        }
        return maxProfit;
    }
}
