/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };
  const arr = date.split(' ');
  const year = arr[2];
  const month = monthMap[arr[1]];
  const day = arr[0].slice(0, arr[0].length - 2).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
// @lc code=end

console.log(reformatDate('26th May 1960'));
