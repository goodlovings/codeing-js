/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let res = false;
  const isSubTree = (father, son) => {
    if (father && son) {
      if (father.val === son.val) {
        return (
          isSubTree(father.left, son.left) && isSubTree(father.right, son.right)
        );
      } else {
        return false;
      }
    }
    if (!father && !son) {
      return true;
    }
    return false;
  };
  const treeDfs = (node) => {
    if (!node) return;
    if (node.val === subRoot.val) {
      let flag =
        isSubTree(node.left, subRoot.left) &&
        isSubTree(node.right, subRoot.right);
      if (flag) {
        res = true;
        return;
      }
    }
    treeDfs(node.left);
    treeDfs(node.right);
  };
  treeDfs(root);
  return res;
};
// @lc code=end
