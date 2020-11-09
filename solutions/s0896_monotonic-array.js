/**
 * T(n): O(n)
 * 执行用时: 76 ms, 击败 95.15%
 */
const isMonotonic = (A) => {
  const len = A.length;
  let monotonicity = 0;
  if (len < 2) return true;
  for (let i = 1; i < len; ++i) {
    const diff = A[i] - A[i - 1];
    const flag = diff ? diff / Math.abs(diff) : 0;
    if (monotonicity !== 0 && flag * monotonicity < 0) return false;
    if (monotonicity === 0 && flag !== 0) monotonicity = flag;
  }
  return true;
};

const A = [2, 2, 2, 1, 4, 5];
console.time('test');
console.log(isMonotonic(A));
console.timeEnd('test');
