/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  let sum = 0;
  const treeDfs = (node, arr, pre) => {
    if (!node) return;
    const cur = pre + node.val;
    let left = [],
      right = [];
    arr.forEach((item) => {
      left.push(item);
      right.push(item);
      if (cur - targetSum == item) {
        sum++;
      }
    });
    if (cur == targetSum) {
      sum++;
    }
    left.push(cur);
    right.push(cur);
    treeDfs(node.left, left, cur);
    treeDfs(node.right, right, cur);
  };
  treeDfs(root, [], 0);
  return sum;
};
// @lc code=end
