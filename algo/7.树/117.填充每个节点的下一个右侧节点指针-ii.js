/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let dummy = new Node();
  let cur = root;
  while (cur) {
    dummy.next = null;
    let nx = dummy; // 下层链表
    while (cur) {
      if (cur.left) {
        nx.next = cur.left;
        nx = nx.next;
      }
      if (cur.right) {
        nx.next = cur.right;
        nx = nx.next;
      }
      cur = cur.next;
    }
    cur = dummy.next;
  }
  return root;
};
// @lc code=end
