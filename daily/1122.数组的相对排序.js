/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const map = new Map()
  const right = []
  for (let n of arr2) map.set(n, 0)
  for (let n of arr1)
    if (map.has(n)) map.set(n, map.get(n) + 1)
    else right.push(n)
  const arr = []
  for (let n of arr2) {
    let count = map.get(n)
    while(count--) arr.push(n)
  }
  arr.push(...right.sort((a, b) => a - b))
  return arr
}
// @lc code=end

