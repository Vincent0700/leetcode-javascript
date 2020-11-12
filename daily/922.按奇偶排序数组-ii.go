/*
 * @lc app=leetcode.cn id=922 lang=golang
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
func sortArrayByParityII(A []int) []int {
	j := 1;
	for i := 0; i < len(A) - 1; i+=2 {
		if A[i] & 1 == 1 {
			for A[j] & 1 == 1 { j += 2 }
			reflect.Swapper(A)(i, j)
		}
	}
	return A
}

// @lc code=end

