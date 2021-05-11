#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] 买卖股票的最佳时机
#

# @lc code=start
from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = prices[0]
        profit = 0
        for price in prices[1:]:
            profit = max(profit, price - minPrice)
            minPrice = min(minPrice, price)
        return profit


# @lc code=end
