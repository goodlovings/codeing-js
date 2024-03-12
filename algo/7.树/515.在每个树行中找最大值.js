/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let arr = [],
    res = [];
  const treeDfs = (node, deep) => {
    if (!node) return;
    if (!arr[deep]) {
      arr[deep] = [node.val];
    } else {
      arr[deep].push(node.val);
    }
    node.left && treeDfs(node.left, deep + 1);
    node.right && treeDfs(node.right, deep + 1);
  };
  treeDfs(root, 0);

  while (arr.length) {
    res.push(Math.max(...arr.shift()));
  }

  return res;
};
// @lc code=end
