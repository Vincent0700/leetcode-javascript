/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const arr = senate.split('');
  let a = 0,
    b = 0,
    i = 0,
    aa = 0,
    bb = 0;
  arr.forEach((c) => (c === 'R' ? a++ : b++));
  while (a && b) {
    if (arr[i] === 'R') {
      if (aa) aa--, (arr[i] = '');
      else b--, bb++;
    } else if (arr[i] === 'D') {
      if (bb) bb--, (arr[i] = '');
      else a--, aa++;
    }
    i = (i + 1) % arr.length;
  }
  if (a === 0) return 'Dire';
  if (b === 0) return 'Radiant';
};
// @lc code=end

console.log(predictPartyVictory('RD'));
