/*
 * @lc app=leetcode.cn id=922 lang=c
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sortArrayByParityII(int* A, int ASize, int* returnSize){
  int i = 0, j = 0;
  int* arr = calloc(ASize, sizeof(int));
  *returnSize = ASize;
  for (int t = 0; t < ASize; ++t) {
    int n = A[t];
    n % 2 ? (arr[i++ * 2 + 1] = n) : (arr[j++ * 2] = n);
  }
  return arr;
}
// @lc code=end

