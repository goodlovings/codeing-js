/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 反转指定范围内的链表
// 方法一：遍历中进行反转： 时间 N， 空间 1
var reverseBetween = function (head, left, right) {
  if (head == null || head.next == null || left >= right) {
    return head;
  }
  let node = new ListNode(-1);
  node.next = head;
  let pre = node;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let cur = pre.next,
    rn = pre.next,
    prev = null;
  for (let i = 0; i < right - left + 1; i++) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  rn.next = cur;
  pre.next = prev;
  return node.next;
};

// 方法二： 找出来，再反转： 时间 N，空间 1
var reverseBetween1 = function (head, left, right) {
  if (head == null || head.next == null || left >= right) {
    return head;
  }

  let tempNode = new ListNode(-1);
  tempNode.next = head;
  let pre = tempNode;

  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let last = pre;

  for (let i = 0; i < right - left + 1; i++) {
    last = last.next;
  }

  let leftNode = pre.next;
  let cur = last.next;

  pre.next = null;
  last.next = null;

  revsrseLinked(leftNode);
  pre.next = last;
  leftNode.next = cur;
  return tempNode.next;
};

function revsrseLinked(head) {
  let cur = head,
    prev = null;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
}

// @lc code=end
