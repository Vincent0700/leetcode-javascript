#
# @lc app=leetcode.cn id=402 lang=python3
#
# [402] 移掉K位数字
#

# @lc code=start
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        for _ in range(k):
            minN = num;
            for i in range(10):
                newNum = num.replace(str(i), '', 1)
                minN = newNum if len(newNum) < len(minN) or newNum < minN else minN
            num = minN.lstrip('0')
        return num if num else '0'
        
# @lc code=end