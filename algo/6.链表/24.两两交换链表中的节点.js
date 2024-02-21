/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点: 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let res = new ListNode(-1),
    cur = res;
  res.next = head;
  while (cur) {
    if (cur.next?.next) {
      let next = cur.next.next.next;
      let first = cur.next;
      let second = cur.next.next;
      cur.next = second;
      second.next = first;
      first.next = next;
      cur = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return res.next;
};
// @lc code=end
