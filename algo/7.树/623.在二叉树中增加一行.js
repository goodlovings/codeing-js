/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-03-15 10:41:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-03-16 09:31:41
 * @FilePath: /codeing-js/algo/7.树/623.在二叉树中增加一行.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) return new TreeNode(val, root);
  let stack = [root],
    deep = 1;
  while (stack.length && deep < depth - 1) {
    deep++;
    let len = stack.length;
    let temp = [];
    for (let i = 0; i < len; i++) {
      let node = stack.pop();
      node.left && temp.push(node.left);
      node.right && temp.push(node.right);
    }
    stack = temp;
  }
  for (const node of stack) {
    node.left = new TreeNode(val, node.left);
    node.right = new TreeNode(val, null, node.right);
  }
  return root;
};
// @lc code=end
