/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
var isTri = ([a, b, c]) => {
  return a && b && c && a + b > c && a + c > b && b + c > a;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => b - a);
  let maxLen = 0;
  for (let i = 0; i < A.length; ++i) {
    for (let j = i + 1; j < A.length; ++j) {
      for (let k = j + 1; k < A.length; ++k) {
        const len = A[i] + A[j] + A[k];
        if (len > maxLen && A[k] + A[j] > A[i]) maxLen = len;
        else break;
      }
    }
  }
  return maxLen;
};
// @lc code=end

console.log(largestPerimeter([3, 2, 3, 4]));
