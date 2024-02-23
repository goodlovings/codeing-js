/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
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
// 时间复杂度：O(n)，空间复杂度：O(1)
var addTwoNumbers = function (l1, l2) {
  let n = 0,
    cur = l1;
  while (cur) {
    cur = cur.next;
    n++;
  }
  cur = l2;
  while (cur) {
    n--;
    cur = cur.next;
  }
  let big = n > 0 ? l1 : l2;
  let small = n <= 0 ? l1 : l2;
  let step = Math.abs(n);
  let bigHead = new ListNode(-1, big);
  let flag = nodeDp(big, small, step);
  if (flag) {
    bigHead.val = flag;
  }
  return flag == 0 ? bigHead.next : bigHead;
};
function nodeDp(big, small, step) {
  if (!big) {
    return 0;
  }
  let temp = big.val;
  if (step > 0) {
    temp += nodeDp(big.next, small, step - 1);
  } else {
    temp += small.val + nodeDp(big.next, small.next, step - 1);
  }
  big.val = temp % 10;
  return Math.floor(temp / 10);
}
// @lc code=end
