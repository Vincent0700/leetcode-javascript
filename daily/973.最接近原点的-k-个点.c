/*
 * @lc app=leetcode.cn id=973 lang=c
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start

#include <stdio.h>


/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** kClosest(int** points, int pointsSize, int* pointsColSize, int K, int* returnSize, int** returnColumnSizes){
  for(int i = 0; i < pointsSize; ++i) {
    int* pos = points[i];
    int dist = pos[0] * pos[0] + pos[1] * pos[1];
  }
}


// @lc code=end

