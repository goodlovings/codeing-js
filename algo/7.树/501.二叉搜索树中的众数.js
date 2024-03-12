/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
// 方法1: 额外空间map辅助
var findMode1 = function (root) {
  let res = [],
    count = 0;
  let map = new Map();
  const treeDfs = (node) => {
    if (!node) return;
    if (map.get(node.val)) {
      map.set(node.val, map.get(node.val) + 1);
      count = Math.max(count, map.get(node.val));
    } else {
      map.set(node.val, 1);
      count = Math.max(count, 1);
    }
    treeDfs(node.left);
    treeDfs(node.right);
  };
  treeDfs(root);
  for (const [key, val] of map) {
    if (val == count) {
      res.push(key);
    }
  }
  return res;
};

var findMode = function (root) {
  let base = 0,
    count = 0,
    maxcount = 0,
    res = [];
  const treeDfs = (node) => {
    if (!node) return;
    treeDfs(node.left);

    if (node.val == base) {
      count += 1;
    } else {
      count = 1;
      base = node.val;
    }
    if (count == maxcount) {
      res.push(node.val);
    }
    if (count > maxcount) {
      maxcount = count;
      res = [base];
    }
    treeDfs(node.right);
  };
  treeDfs(root);
  return res;
};
// @lc code=end
