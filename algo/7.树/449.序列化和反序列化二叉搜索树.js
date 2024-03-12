/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];
  const treeDfs = (node) => {
    if (!node) {
      return;
    }
    treeDfs(node.left);
    treeDfs(node.right);
    res.push(node.val);
  };
  treeDfs(root);
  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  let arr = data.split(",").map((item) => Number(item));
  const contructTree = (l, r) => {
    let len = arr.length;
    if (len == 0 || arr[len - 1] < l || arr[len - 1] > r) return null;
    const val = arr.pop();
    let root = new TreeNode(val);
    root.right = contructTree(val, r);
    root.left = contructTree(l, val);
    return root;
  };

  return contructTree(-Infinity, Infinity);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
