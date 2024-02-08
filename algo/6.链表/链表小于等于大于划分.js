/*
 * @Author: haolian
 * @Date: 2024-02-08 14:49:22
 * @LastEditTime: 2024-02-08 15:48:49
 * @LastEditors: haolian
 * @Description: 给定单链表head和固定值x，要求调整链表使得小于x的节点都在左边，大于x的节点都在右边，等于x的节点在中间
 * @FilePath: /codeing-js/algo/6.链表/链表小于等于大于划分.js
 */

// 无稳定性
function separateLinked(head, x) {
  if (head === null || head.next === null) {
    return head;
  }
  let cur = head;
  let left = new ListNode(-1),
    middle = new ListNode(-1),
    right = new ListNode(-1);

  let leftHead = left,
    middleHead = middle,
    rightHead = right;

  if (cur) {
    if (cur.val < x) {
      left.next = cur;
      left = left.next;
    } else if (cur.val === x) {
      middle.next = cur;
      middle = middle.next;
    } else {
      right.next = cur;
      right = right.next;
    }
    cur = cur.next;
  }

  right.next = null;
  middle.next = rightHead.next;
  left.next = middleHead.next;
  return leftHead.next;
}
