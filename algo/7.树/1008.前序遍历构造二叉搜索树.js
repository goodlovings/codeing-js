/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
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
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const treeBuild = (arr) => {
    if (!arr || arr.length === 0) return null;
    if (arr.length == 1) return new TreeNode(arr[0]);
    let val = arr.shift();
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > val) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      return new TreeNode(val, treeBuild(arr));
    }
    return new TreeNode(
      val,
      treeBuild(arr.slice(0, index)),
      treeBuild(arr.slice(index))
    );
  };
  return treeBuild(preorder);
};
// @lc code=end
