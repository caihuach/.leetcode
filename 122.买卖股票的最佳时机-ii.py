#
# @lc app=leetcode.cn id=122 lang=python3
#
# [122] 买卖股票的最佳时机 II
#

# @lc code=start

from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        if n < 2:
            return 0
        cash = 0
        stock = -prices[0]

        preCash = cash
        preStock = stock

        for price in prices[1:]:
            cash = max(preCash, preStock + price)
            stock = max(preCash - price, preStock)

            preCash = cash
            preStock = stock

        return cash


# @lc code=end
