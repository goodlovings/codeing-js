/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function (root) {
  let maxLen = 0;
  const treeDfs = (node) => {
    if (!node) return [0, null];
    let l = treeDfs(node.left);
    let r = treeDfs(node.right);
    let flag = 0;
    if (l[1] === node.val) {
      flag += l[0] + 1;
    }
    if (r[1] === node.val) {
      flag += r[0] + 1;
    }
    maxLen = Math.max(maxLen, flag);
    
    if (l[1] === node.val && r[1] === node.val) {
      flag = Math.max(l[0] + 1, r[0] + 1);
    }
    return [flag, node.val];
  };
  treeDfs(root);
  return maxLen;
};
// @lc code=end
