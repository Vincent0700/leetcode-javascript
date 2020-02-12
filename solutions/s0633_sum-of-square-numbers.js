/**
 * @date 2020/01/25 12:03
 * @link https://leetcode-cn.com/problems/sum-of-square-numbers/
 */

/**
 * 双指针
 * T(n): O(n)
 * 执行用时: 60 ms, 击败 98.06%
 */
const judgeSquareSum = (c) => {
    let i = 0,
        j = Math.floor(Math.sqrt(c));
    while (i <= j) {
        const t = i * i + j * j;
        if (t < c) i++;
        else if (t > c) j--;
        else return true;
    }
    return false;
};

console.time('test');
console.log(judgeSquareSum(4));
console.timeEnd('test');
