const binarySearch = (nums, val) => {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (val < nums[mid]) right = mid - 1;
        else if (val > nums[mid]) left = mid + 1;
        else return mid;
    }
    return -1;
};

const nums = [1, 2, 3, 4, 5];
const val = 3;
console.time('test');
console.log(binarySearch(nums, val));
console.timeEnd('test');
