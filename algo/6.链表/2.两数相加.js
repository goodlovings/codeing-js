/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode(-1),
    pre = res,
    carry = 0;
  while (l1 || l2 || carry) {
    let temp = carry;
    if (l1) {
      temp += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      temp += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(temp / 10);
    temp = temp % 10;
    pre.next = new ListNode(temp);
    pre = pre.next;
  }
  return res.next;
};
// @lc code=end
