/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let maxDeep = 0,
    res = 0;
  const treeDfs = (node, n, falg) => {
    if (!node) return;
    if (!node.left && !node.right && falg) {
      if (n + 1 > maxDeep) {
        maxDeep = n + 1;
        res = node.val;
      }
    }
    treeDfs(node.left, n + 1, true);
    node.left
      ? treeDfs(node.right, n + 1, false)
      : treeDfs(node.right, n + 1, true);
  };
  treeDfs(root, 0, true);
  return res;
};
// @lc code=end
