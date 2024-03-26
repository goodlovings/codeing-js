/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const parents = new Map();
  const ans = [];

  const setParents = (node) => {
    if (!node) return;
    if (node.left) {
      parents.set(node.left.val, node);
      setParents(node.left);
    }
    if (node.right) {
      parents.set(node.right.val, node);
      setParents(node.right);
    }
  };
  setParents(root);

  const getKval = (node, from, deep) => {
    if (!node) return;
    if (deep == k) {
      ans.push(node.val);
      return;
    }
    if (node.left !== from) {
      getKval(node.left, node, deep + 1);
    }
    if (node.right !== from) {
      getKval(node.right, node, deep + 1);
    }
    if (parents.get(node.val) !== from) {
      getKval(parents.get(node.val), node, deep + 1);
    }
  };
  getKval(target, null, 0);

  return ans;
};
// @lc code=end
