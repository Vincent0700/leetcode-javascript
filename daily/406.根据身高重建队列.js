/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
  return people.reduce((acc, cur) => (acc.splice(cur[1], 0, cur), acc), [])
};
// @lc code=end

const people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
const result = reconstructQueue(people)
console.log(result)