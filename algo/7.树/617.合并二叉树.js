/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const treeDfs = (node1, node2) => {
    if (!node1 && !node2) return null;
    if (node1 && !node2) return node1;
    if (node2 && !node1) return node2;
    let temp = new TreeNode(node1.val + node2.val);
    temp.left = treeDfs(node1.left, node2.left);
    temp.right = treeDfs(node1.right, node2.right);
    return temp;
  };
  return treeDfs(root1, root2);
};
// @lc code=end
