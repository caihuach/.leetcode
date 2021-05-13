#
# @lc app=leetcode.cn id=155 lang=python3
#
# [155] 最小栈
#

# @lc code=start
from typing import List
import math


class MinStack:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self._arr: List[int] = []
        self._minArr: List[int] = [math.inf]

    def push(self, val: int) -> None:
        self._arr.append(val)
        self._minArr.append(min(self.getMin(), val))

    def pop(self) -> None:
        self._arr.pop()
        self._minArr.pop()

    def top(self) -> int:
        return self._arr[-1]

    def getMin(self) -> int:
        return self._minArr[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
# @lc code=end
