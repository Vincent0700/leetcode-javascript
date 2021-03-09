/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S, count = 0) {
  for (let i = S.length - 2; i >= 0; --i) {
    if (S[i] === S[i + 1]) S = S.slice(0, i) + S.slice(i + 2);
  }
  if (S.length === count) return S;
  else return removeDuplicates(S, S.length);
};
// @lc code=end

const str = 'alebehckjbhiceijglclcmmabclbmhjdmbekklhmcbjbcfmlbbbbmcfclabajekbbmgelljllckeigjmm';
const answer = 'alebehckjbhiceijglclcabclbmhjdmbelhmcbjbcfmlmcfclabajekmgejckeigj';
console.log(removeDuplicates(str) === answer);
