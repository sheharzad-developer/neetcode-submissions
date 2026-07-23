class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
         const rows = matrix.length;
    const cols = matrix[0].length;

    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        const cur = matrix[row][col];

        if (cur === target) return true;

        if (target > cur) {
            row++;
        } else {
            col--;
        }
    }

    return false;
    }
}
