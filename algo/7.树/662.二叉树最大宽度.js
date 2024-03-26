/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  // let w = 0,
  //   stack = [root];
  // while (stack.length) {
  //   let len = stack.length;
  //   w = Math.max(len, w);
  //   for (let i = 0; i < len; i++) {
  //     let node = stack.shift();
  //     stack.push(node ? node.left : null);
  //     stack.push(node ? node.right : null);
  //   }
  //   while (stack[0] === null) {
  //     stack.shift();
  //   }
  //   while (stack[stack.length - 1] === null) {
  //     stack.pop();
  //   }
  // }
  // return w;

  const queue = [[root, 0]];
  let res = 0; // 全局维护最大值
  let left = 0; // 记录当前层最左边节点的计数值
  let right = 0; // 记录当前层最右边节点的计数值
  while (queue.length) {
    left = queue[0][1];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let [h, pos] = queue.shift();
      right = pos;
      if (h.left) queue.push([h.left, 2 * (pos - left)]); // 重点，优化掉左边不需要计数的部分
      if (h.right) queue.push([h.right, 2 * (pos - left) + 1]);
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};
// @lc code=end
