/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (head === null || head.next === null) {
    return head;
  }
  let left = new ListNode(-1),
    other = new ListNode(-1);
  let leftHead = left,
    otherHead = other;
  let cur = head;
  while (cur) {
    if (cur.val < x) {
      left.next = cur;
      left = left.next;
    } else {
      other.next = cur;
      other = other.next;
    }
    cur = cur.next;
  }

  other.next = null;
  left.next = otherHead.next;
  return leftHead.next;
};
// @lc code=end
