/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n == 0) {
    return [];
  }
  return getAllBsts(1, n);
};
function getAllBsts(start, end) {
  if (start > end) return [null];
  if (start == end) return [new TreeNode(start)];
  let res = [];
  for (let i = start; i <= end; i++) {
    let ls = getAllBsts(start, i - 1);
    let rs = getAllBsts(i + 1, end);
    for (const left of ls) {
      for (const right of rs) {
        let root = new TreeNode(i);
        root.left = left;
        root.right = right;
        res.push(root);
      }
    }
  }
  return res;
}
// @lc code=end
