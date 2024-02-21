/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II : 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表
 *
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
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
// 辅助栈
var deleteDuplicates1 = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let hashMap = new Map();
  let cur = head;
  while (cur) {
    if (hashMap.get(cur.val)) {
      hashMap.set(cur.val, 2);
    } else {
      hashMap.set(cur.val, 1);
    }
    cur = cur.next;
  }
  let res = new ListNode(-1);
  cur = res;
  for (const [key, val] of hashMap) {
    if (val == 1) {
      cur.next = new ListNode(key);
      cur = cur.next;
    }
  }
  return res.next;
};
// 原链上改
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const dummy = new ListNode(-1, head);

  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val;
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
// @lc code=end
