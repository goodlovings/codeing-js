/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表 :给定一个单链表 L 的头节点 head ，单链表 L 表示为
 * L0 → L1 → … → Ln - 1 → Ln 请将其重新排列后变为：
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 快慢指针
var reorderList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let res = new ListNode(-1),
    cur = head,
    slow = res,
    fast = res;
  res.next = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let after = slow.next;
  slow.next = null;

  after = reverseLink(after);

  while (cur && after) {
    let nexta = cur.next,
      nextb = after.next;
    cur.next = after;
    after.next = nexta;
    cur = nexta;
    after = nextb;
  }
  return head;
};

const reverseLink = (node) => {
  let temp = node,
    prev = null;
  while (temp) {
    let next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
  return prev;
};
// @lc code=end
