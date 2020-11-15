/*
 * @lc app=leetcode.cn id=514 lang=javascript
 *
 * [514] 自由之路
 */

// @lc code=start

const dfs = (ring, key, rIndex, kIndex, cache) => {
  if (kIndex === key.length) return 0;

  const k = key[kIndex];
  const nk = key[kIndex + 1];
  
  if (ring[rIndex] === k) {
    const step = dfs(ring, key, rIndex, kIndex + 1, cache);
    if(!cache.has(k + rIndex)) cache.set(k + rIndex, step);
    return step;
  }

  let a = rIndex, b = rIndex;
  let sa = 0, sb = 0;

  while (ring[a] !== k && ++sa) a = (a + 1) % ring.length;
  while (ring[b] !== k && ++sb) b = b > 0 ? b - 1 : ring.length - 1;
  
  const da = dfs(ring, key, a, kIndex + 1, cache);
  const db = dfs(ring, key, b, kIndex + 1, cache)

  console.log(cache.get(nk + a), da)
  console.log(cache.get(nk + b), db)

  sa += cache.has(nk + a) ? cache.get(nk + a) : da;
  sb += cache.has(nk + b) ? cache.get(nk + b) : db;
  return Math.min(sa, sb);
};

/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  return dfs(ring, key, 0, 0, new Map()) + key.length;
};
// @lc code=end

console.log(findRotateSteps('xkzuu', 'zxkzuuzkkxuuuux'));
