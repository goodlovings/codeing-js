/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表： 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
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
// 辅助数组方法：时间辅助度o(n^2), 空间复杂度o(n);

// 归并排序方式：时间辅助度o(n*logn), 空间复杂度o(1)
var sortList = function (head) {
  return twoSort(head, null);
};

function twoSort(head, tail) {
  if (!head) return head;
  if (head.next == tail) {
    head.next = null;
    return head;
  }
  let slow = head,
    fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  let mid = slow;
  return mergeLinked(twoSort(head, mid), twoSort(mid, tail));
}

function mergeLinked(head1, head2) {
  let dummy = new ListNode(-1),
    tmp = dummy,
    tmp1 = head1,
    tmp2 = head2;
  while (tmp1 && tmp2) {
    if (tmp1.val <= tmp2.val) {
      tmp.next = tmp1;
      tmp1 = tmp1.next;
    } else {
      tmp.next = tmp2;
      tmp2 = tmp2.next;
    }
    tmp = tmp.next;
  }
  if (tmp1) {
    tmp.next = tmp1;
  }
  if (tmp2) {
    tmp.next = tmp2;
  }
  return dummy.next;
}
// @lc code=end
