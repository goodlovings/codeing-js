/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 非空判断
  if (!root) return root;
  let getMin = (node) => {
    // BST 最左边的就是最小的
    while (node.left) {
      node = node.left;
    }
    return node;
  };
  if (root.val == key) {
    // 这两个 if 把情况 1 和 2 都处理了
    if (root.left == null) return root.right;
    if (root.right == null) return root.left;
    // 处理情况 3
    let minNode = getMin(root.right);
    root.val = minNode.val;
    // 找到最小的顶替它之后还要删除这个最小的节点
    root.right = deleteNode(root.right, minNode.val);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    root.left = deleteNode(root.left, key);
  }
  return root;
};
// @lc code=end
