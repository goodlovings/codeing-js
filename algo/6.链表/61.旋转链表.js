/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表：给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
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
 * @param {number} k
 * @return {ListNode}
 */
// 快慢指针
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }
  let cur = head,
    len = 1;
  while (cur.next) {
    cur = cur.next;
    len++;
  }
  let flag = len - (k % len);
  if (k % len == 0) {
    return head;
  }
  cur.next = head; // 环
  while (flag) {
    cur = cur.next;
    flag--;
  }
  head = cur.next;
  cur.next = null;
  return head;
};
// @lc code=end
