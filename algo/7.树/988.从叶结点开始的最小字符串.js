/*
 * @lc app=leetcode.cn id=988 lang=javascript
 *
 * [988] 从叶结点开始的最小字符串
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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let res = "";
  const treeDfs = (node, str) => {
    str += String.fromCharCode(node.val + 97);
    if (!node.left && !node.right) {
      str = str.split("").reverse().join("");
      if (res === "") {
        res = str;
      } else {
        res = res > str ? str : res;
      }
      return;
    }
    node.left && treeDfs(node.left, str);
    node.right && treeDfs(node.right, str);
  };
  treeDfs(root, "");
  return res;
};
// @lc code=end
