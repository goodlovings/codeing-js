/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  let res = [],
    queue = [root];
  // const iterateTree = (root, deep) => {
  //   if (!root) return;
  //   if (res[deep]) {
  //     res[deep].push(root.val);
  //   } else {
  //     res[deep] = [root.val];
  //   }
  //   iterateTree(root.left, deep + 1);
  //   iterateTree(root.right, deep + 1);
  // };
  // iterateTree(root, 0);
  // return res.reverse();
  while (queue.length) {
    let len = queue.length,
      sunRes = [];
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      sunRes.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    res.unshift(sunRes);
  }
  return res;
};
// @lc code=end
