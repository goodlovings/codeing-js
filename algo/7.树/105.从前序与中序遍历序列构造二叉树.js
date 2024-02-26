/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 动态规划
var buildTree = function (preorder, inorder) {
  const btree = ([pstart, pend], [istart, iend]) => {
    if (pstart > pend) return null;
    let root = preorder[pstart];
    let index = inorder.indexOf(root);
    let ln = index - istart;
    return new TreeNode(
      root,
      btree([pstart + 1, pstart + ln], [istart, index - 1]),
      btree([pstart + ln + 1, pend], [index + 1, iend])
    );
  };
  return btree([0, preorder.length - 1], [0, inorder.length - 1]);
};

// @lc code=end
