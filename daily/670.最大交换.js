/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const digits = String(num).split('');
  const { maxIndices } = digits.reduceRight(
    (acc, value, i) => {
      acc.maxIndex = value > digits[acc.maxIndex] ? i : acc.maxIndex;
      acc.maxIndices.unshift(acc.maxIndex);
      return acc;
    },
    { maxIndex: digits.length - 1, maxIndices: [] }
  );
  digits.some((value, i) => {
    const j = maxIndices[i];
    if (value < digits[j]) {
      [digits[i], digits[j]] = [digits[j], digits[i]];
      return true;
    }
  });
  return parseInt(digits.join(''));
};
// @lc code=end
