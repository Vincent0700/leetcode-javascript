/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (!this.arr.length || num >= this.arr[this.arr.length - 1]) return this.arr.push(num);
  for (let i = 0; i < this.arr.length; ++i) {
    if (num <= this.arr[i]) return this.arr.splice(i, 0, num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const len = this.arr.length;
  const mid = len >> 1;
  if (len & 1) return this.arr[mid];
  else return (this.arr[mid - 1] + this.arr[mid]) / 2.0;
};
// @lc code=end

var obj = new MedianFinder();
obj.addNum(-1);
console.log(obj.findMedian());
obj.addNum(-2);
console.log(obj.findMedian());
obj.addNum(-3);
console.log(obj.findMedian());
obj.addNum(-4);
console.log(obj.findMedian());
obj.addNum(-5);
console.log(obj.findMedian());
