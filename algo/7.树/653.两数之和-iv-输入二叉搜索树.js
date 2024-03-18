/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let helper = new Map(),
    stack = [root],
    res = false;
  while (stack.length) {
    let node = stack.pop();
    let temp = k - node.val;
    if (helper.get(temp)) {
      res = true;
      break;
    }
    if (!helper.get(node.val)) {
      helper.set(node.val, 1);
    }
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return res;
};
// @lc code=end
