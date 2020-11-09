/**
 * 贪心算法，end小的先排
 * T(n): O(nlgn)
 * 执行用时: 68 ms, 击败 97.53%
 */
const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let prev = intervals[0];
  const isOverlap = (a, b) => !(a[0] >= b[1] || a[1] <= b[0]);
  for (let i = 1; i < intervals.length; ++i) {
    if (isOverlap(intervals[i], prev)) count++;
    else prev = intervals[i];
  }
  return count;
};

const intervals = [
  [1, 2],
  [2, 3]
];
console.time('test');
console.log(eraseOverlapIntervals(intervals));
console.timeEnd('test');
