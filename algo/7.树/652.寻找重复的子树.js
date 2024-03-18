/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  if (!root) return [];
  let res = [],
    helper = new Map();
  const treeDfs = (node) => {
    if (!node) {
      return "#";
    }
    let l = treeDfs(node.left);
    let r = treeDfs(node.right);
    let sub = `${node.val}_${l}_${r}`;
    let temp = helper.get(sub);
    if (temp) {
      if (temp === 1) {
        res.push(node);
      }
      helper.set(sub, temp + 1);
    } else {
      helper.set(sub, 1);
    }
    return sub;
  };
  treeDfs(root);
  return res;
};
// @lc code=end
