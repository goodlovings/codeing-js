/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  let res = [];
  let helper = [[root, 0]];
  while (helper.length) {
    const [cur, index] = helper.shift();
    if (!cur) continue;
    if (res[index]) {
      res[index].push(cur.val);
    } else {
      res[index] = [cur.val];
    }
    helper.push([cur.left, index + 1]);
    helper.push([cur.right, index + 1]);
  }
  res.map((item, ind) => {
    if (ind % 2 != 0) {
      item.reverse();
    }
  });
  return res;
};
// @lc code=end
