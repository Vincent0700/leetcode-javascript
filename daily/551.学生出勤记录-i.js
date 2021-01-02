/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let absents = 0;
  let lates = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === 'A') absents++, (lates = 0);
    else if (s[i] === 'L') lates++;
    else lates = 0;
    if (absents > 1 || lates > 2) return false;
  }
  return true;
};
// @lc code=end
