/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */

// @lc code=start
function totalNQueens(n: number): number {
    const res: [number] = [0];
    // 临时画板
    const board: string[][] = new Array(n);
    for (let y = 0; y < n; y += 1) {
        board[y] = new Array(n).fill('.');
    }
    // 0行开始
    dfs(res, board, 0);
    return res[0];
}

function dfs(res: [number], board: string[][], row: number): void {
    // row已经越界
    if (row === board.length) {
        res[0] += 1;
        return;
    }
    // 每个col都试一试
    const len = board[row].length;
    for (let col = 0; col < len; col += 1) {
        if (!isValid(board, row, col)) {
            continue;
        }
        board[row][col] = 'Q';
        // console.dir(board);
        dfs(res, board, row + 1);
        board[row][col] = '.';
    }
}

function isValid(board: string[][], row: number, col: number): boolean {
    // 正上冲突
    for (let y = 0; y < row; y += 1) {
        if (board[y][col] === 'Q') {
            return false;
        }
    }
    // 左上冲突
    for (let y = row - 1, x = col - 1; y > -1 && x > -1; y -= 1, x -= 1) {
        if (board[y][x] === 'Q') {
            return false;
        }
    }
    // 右上冲突
    for (
        let y = row - 1, x = col + 1;
        y > -1 && x < board[y].length;
        y -= 1, x += 1
    ) {
        if (board[y][x] === 'Q') {
            return false;
        }
    }
    return true;
}
// @lc code=end
