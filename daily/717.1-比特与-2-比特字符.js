/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  if (bits.length === 1) return true;
  let i = 0;
  while (i < bits.length) {
    bits[i] ? (i += 2) : i++;
    if (i === bits.length - 1) return true;
  }
  return false;
};
// @lc code=end

console.log(isOneBitCharacter([1, 1, 1, 0]));
