/**
 * 动态规划
 * dp[i] = dp[i-1] + dp[i-2]
 * T(n): Θ(n)
 * 执行用时: 60 ms, 击败 78.90%
 */
let len = 3;
const data = [0, 1, 2];
const climbStairs = (n) => {
    if (n < len) return data[n];
    while (n >= len) {
        data[len] = data[len - 1] + data[len - 2];
        len++;
    }
    return data[n];
};

const n = 45;

console.time('test');
console.log(climbStairs(n));
console.timeEnd('test');
