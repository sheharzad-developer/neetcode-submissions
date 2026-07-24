class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

        const m = nums1.length, n = nums2.length;
        let left = 0, right = m;

        while (left <= right) {
            const i = (left + right) >> 1;
            const j = ((m + n + 1) >> 1) - i;

            const leftA  = i > 0 ? nums1[i - 1] : -Infinity;
            const rightA = i < m ? nums1[i] : Infinity;
            const leftB  = j > 0 ? nums2[j - 1] : -Infinity;
            const rightB = j < n ? nums2[j] : Infinity;

            if (leftA <= rightB && leftB <= rightA) {
                return ((m + n) % 2 === 0)
                ? (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2
                : Math.max(leftA, leftB);
            }

            leftA > rightB ? (right = i - 1) : (left = i + 1);
        }
    }
}
