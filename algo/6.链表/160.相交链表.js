/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let n = 0; //a,b相差个数
  let cur1 = headA,
    cur2 = headB;
  while (cur1) {
    n++;
    cur1 = cur1.next;
  }
  while (cur2) {
    n--;
    cur2 = cur2.next;
  }

  // 确认长短链表
  cur1 = n >= 0 ? headA : headB;
  cur2 = cur1 === headA ? headB : headA;
  n = Math.abs(n);

  while (cur1) {
    if (n <= 0) {
      if (cur1 === cur2) {
        break;
      }
      cur2 = cur2.next;
    }
    cur1 = cur1.next;
    n--;
  }
  if (cur1) {
    return cur1;
  }
  return null;
};
// @lc code=end
