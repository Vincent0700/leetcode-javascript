/**
 * 二分查找
 * T(n): O(lgn)
 * 执行用时: 72 ms, 击败 92.50%
 */
const nextGreatestLetter = (letters, target) => {
    if (target >= letters[letters.length - 1]) return letters[0];
    let left = 0,
        right = letters.length - 1,
        mid = 0,
        val = 0;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        val = letters[mid];
        if (letters[mid - 1] <= target && target < val) return val;
        else if (target > val) left = mid + 1;
        else if (target < val) right = mid - 1;
        else left += 1;
    }
    return val;
};

const letters = ['e', 'e', 'e', 'e', 'e', 'e', 'n', 'n', 'n', 'n'];
const target = 'e';
console.time('test');
console.log(nextGreatestLetter(letters, target));
console.timeEnd('test');
