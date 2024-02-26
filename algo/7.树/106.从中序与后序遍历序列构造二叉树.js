/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * 输出：[3,9,20,null,null,15,7]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const bt = ([istart, iend], [pstart, pend]) => {
    if (istart > iend || pstart > pend) return null;
    let root = postorder[pend];
    let mid = inorder.indexOf(root);
    let ln = mid - istart;
    return new TreeNode(
      root,
      bt([istart, mid - 1], [pstart, pstart + ln - 1]),
      bt([mid + 1, iend], [pstart + ln, pend - 1])
    );
  };
  return bt([0, inorder.length - 1], [0, postorder.length - 1]);
};
// @lc code=end
