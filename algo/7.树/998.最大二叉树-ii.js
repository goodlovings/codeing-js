/*
 * @lc app=leetcode.cn id=998 lang=javascript
 *
 * [998] 最大二叉树 II
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  if (!root) return null;
  if (root.val < val) return new TreeNode(val, root);
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (!node.left && !node.right && node.val > val) {
      node.right = new TreeNode(val);
      break;
    }
    if (!node.right && node.val > val) {
      node.right = new TreeNode(val);
      break;
    }
    if (node.right && node.right.val < val) {
      node.right = new TreeNode(val, node.right);
      break;
    }
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return root;
};
// @lc code=end
