/**
 * 双指针
 * T(n): O(n)
 * 执行用时: 72 ms, 击败 100%
 */
const validPalindrome = (s, errCount = 1) => {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else if (errCount > 0) {
      return (
        validPalindrome(s.substring(i + 1, j + 1), errCount - 1) ||
        validPalindrome(s.substring(i, j), errCount - 1)
      );
    } else return false;
  }
  return true;
};

console.time('test');
console.log(validPalindrome('abc'));
console.timeEnd('test');
