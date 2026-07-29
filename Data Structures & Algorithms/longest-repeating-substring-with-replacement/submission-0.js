class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let left = 0;
        let maxFreq = 0;
        let ans = 0;

        for (let right = 0; right < s.length; right++) {

            map.set(s[right], (map.get(s[right]) || 0) + 1);

            maxFreq = Math.max(maxFreq, map.get(s[right]));

            let windowSize = right - left + 1;

            while (windowSize - maxFreq > k) {

                map.set(s[left], map.get(s[left]) - 1);
                left++;

                windowSize = right - left + 1;
            }

            ans = Math.max(ans, windowSize);
        }

        return ans;
        }
}
