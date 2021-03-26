/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = []; // 入度表
  const queue = [];
  const visited = [];
  let count = 0;
  for (let i = 0; i < numCourses; ++i) {
    graph.push([]);
    visited[i] = false;
  }
  prerequisites.forEach(([p0, p1]) => {
    if (!graph[p1].includes(p0)) graph[p1].push(p0);
  });
  // 入度为 0 的进队
  for (let i = 0; i < numCourses; ++i) {
    if (!graph[i].length) queue.push(i);
  }
  while (queue.length) {
    const v = queue.shift();
    visited[v] = true;
    count++;
    // 剔除队列中入度为0的节点
    for (let a of graph) {
      const i = a.indexOf(v);
      if (~i) a.splice(i, 1);
    }
    // 从新计算入度为0的节点再进队
    for (let i = 0; i < numCourses; ++i) {
      if (!graph[i].length && !visited[i] && !queue.includes(i)) queue.push(i);
    }
  }
  return count === numCourses;
};
// @lc code=end

const numCourses = 2;
const prerequisites = [];
console.log(canFinish(numCourses, prerequisites));
