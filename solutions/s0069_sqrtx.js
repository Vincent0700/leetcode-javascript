/**
 * 解法一: 直接粗暴
 * 执行用时: 84 ms, 击败 74.43%
 */
// const mySqrt = (x) => Math.sqrt(x) >> 0;

/**
 * 解法一: 二分查找
 * T(n): O(lgn)
 * 执行用时: 76 ms, 击败 92.90%
 */
const mySqrt = (x) => {
    let left = 0,
        right = x;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const square = mid * mid;
        if (square <= x && (mid + 1) * (mid + 1) > x) return mid;
        else if (square > x) right = mid - 1;
        else if (square < x) left = mid + 1;
    }
};

console.time('test');
console.log(mySqrt(8));
console.timeEnd('test');
