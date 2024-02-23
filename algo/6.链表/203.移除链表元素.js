/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素：
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;
  let dummy = new ListNode(-1, head),
    cur = dummy;
  while (cur) {
    if (cur.next && cur.next.val == val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
// @lc code=end
