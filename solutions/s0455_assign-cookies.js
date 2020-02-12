/**
 * 贪心算法，优先给最小的孩子分配最小的饼干
 * T(n): O(nlgn)
 * 执行用时: 100 ms, 击败 87.43%
 */
const findContentChildren = (g, s) => {
    let i = 0;
    let j = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j++]) ++i;
    }
    return i;
};

const g = [10, 9, 8, 7];
const s = [5, 6, 7, 8];
console.time('test');
console.log(findContentChildren(g, s));
console.timeEnd('test');
