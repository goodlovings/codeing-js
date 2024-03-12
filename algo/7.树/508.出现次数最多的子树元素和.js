/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
var findFrequentTreeSum = function (root) {
  let map = new Map(),
    count = 0,
    res = [];
  const treeDfs = (node) => {
    if (!node) return null;
    let ls = treeDfs(node.left);
    let rs = treeDfs(node.right);
    let temp = node.val;
    if (ls !== null) {
      temp += ls;
    }
    if (rs !== null) {
      temp += rs;
    }
    map.set(temp, (map.get(temp) || 0) + 1);
    if (map.get(temp) > count) {
      count = map.get(temp);
      res = [temp];
    } else if (map.get(temp) == count) {
      res.push(temp);
    }
    return temp;
  };
  treeDfs(root);
  return res;
};
// @lc code=end
