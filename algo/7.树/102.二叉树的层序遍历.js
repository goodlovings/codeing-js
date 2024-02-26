/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
// 辅助栈
var levelOrder = function (root) {
  let res = [],
    helper = [[root, 0]];

  while (helper.length) {
    let [cur, index] = helper.shift();
    if (!cur) {
      continue;
    }
    if (!res[index]) {
      res[index] = [cur.val];
    } else {
      res[index].push(cur.val);
    }
    helper.push([cur.left, index + 1]);
    helper.push([cur.right, index + 1]);
  }
  return res;
};
// @lc code=end
