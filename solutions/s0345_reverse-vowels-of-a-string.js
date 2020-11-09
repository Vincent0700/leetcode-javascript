/**
 * 双指针
 * T(n): O(n)
 * 执行用时: 72 ms, 击败 99.73%
 */
const reverseVowels = (s) => {
  const arr = 'aeiouAEIOU'.split('');
  const res = s.split('');
  let i = 0,
    j = res.length - 1;
  while (i < j) {
    if (!arr.includes(res[i])) i++;
    else if (!arr.includes(res[j])) j--;
    else {
      [res[i], res[j]] = [res[j], res[i]];
      i++;
      j--;
    }
  }
  return res.join('');
};

console.time('test');
console.log(reverseVowels('leetcode'));
console.timeEnd('test');
