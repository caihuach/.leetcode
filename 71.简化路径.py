#
# @lc app=leetcode.cn id=71 lang=python3
#
# [71] 简化路径
#

# @lc code=start
from typing import List


class Solution:
    def simplifyPath(self, path: str) -> str:
        arr: List[str] = []
        entries = path.split("/")
        for entry in entries:
            if not entry or entry == ".":
                continue
            if entry == "..":
                if len(arr) > 0:
                    arr.pop()
                continue
            arr.append(entry)
        return f"/{'/'.join(arr)}"


# @lc code=end
