/*
 * @lc app=leetcode.cn id=922 lang=cpp
 *
 * [922] 按奇偶排序数组 II
 */

#include <vector>
using namespace std;

// @lc code=start
class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& A) {
        int i = 0, j = 0;
        vector<int> res(A.size());
        for (auto iter = A.begin(); iter != A.end(); ++iter) {
            int n = *iter;
            n % 2 ? (res[i++ * 2 + 1] = n) : (res[j++ * 2] = n);
        }
        return res;
    }
};
// @lc code=end

