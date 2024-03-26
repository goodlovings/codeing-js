/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * @return {string[][]}
 */
var printTree = function (root) {
  let depth = 0;
  const treeDfs = (node, deep) => {
    if (!node) {
      depth = Math.max(deep, depth);
      return;
    }
    treeDfs(node.left, deep + 1);
    treeDfs(node.right, deep + 1);
  };
  treeDfs(root, 0);
  depth -= 1;
  let m = depth + 1;
  let n = Math.pow(2, depth + 1) - 1;
  let arr = new Array(m).fill([]).map((item) => new Array(n).fill(""));

  const fillArr = (node, r, c) => {
    if (!node) return;

    arr[r][c] = node.val + "";
    fillArr(node.left, r + 1, c - Math.pow(2, depth - r - 1));
    fillArr(node.right, r + 1, c + Math.pow(2, depth - r - 1));
  };
  fillArr(root, 0, (n - 1) >> 1);
  return arr;
};
// @lc code=end
