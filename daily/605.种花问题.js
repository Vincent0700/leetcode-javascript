/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (!n) return true;
  for (let i = 0; i < flowerbed.length; ++i) {
    if (
      !flowerbed[i] &&
      (i - 1 < 0 || !flowerbed[i - 1]) &&
      (i + 1 >= flowerbed.length || !flowerbed[i + 1])
    ) {
      flowerbed[i] = 1;
      if (!--n) return true;
    }
  }
  return false;
};
// @lc code=end
