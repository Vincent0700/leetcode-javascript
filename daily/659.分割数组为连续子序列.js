/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const map = new Map();
  nums.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });
  const keys = [...map.keys()];
  if (!keys.length) return true;
  else if (keys.length < 3) return false;
  let count = 1,
    flag = 0;
  map.set(keys[0], map.get(keys[0]) - 1);
  for (let i = 1; i < keys.length; ++i) {
    const v = map.get(keys[i]);
    if (keys[i] - keys[i - 1] !== 1 || !v) break;
    if ((!flag && v === 1) || count < 3) {
      flag = v;
      map.set(keys[i], v - 1);
      count++;
    } else {
      if (!flag || v >= flag) flag = v;
      else break;
      map.set(keys[i], v - 1);
      count++;
    }
  }
  if (count < 3) return false;
  const newNums = keys.reduce((acc, cur) => {
    const count = map.get(cur);
    acc.push(...Array(count).fill(cur));
    return acc;
  }, []);
  return isPossible(newNums);
};
// @lc code=end

const nums = [1, 2, 3, 3, 4, 5];
console.log(isPossible(nums));
