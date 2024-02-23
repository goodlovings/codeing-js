/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表：
 * 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。
 * 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。
 * 这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。
 * 返回一个由上述 k 部分组成的数组。
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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  if (k == 1) return [head];
  let dummy = new ListNode(-1, head),
    cur = dummy.next;
  let len = 0;
  while (cur) {
    len++;
    cur = cur.next;
  }
  let flag = Math.floor(len / k);
  let m = len % k;
  let res = [];
  cur = dummy;
  for (let i = 0; i < k; i++) {
    let n = flag;
    if (cur.next) {
      let temp = cur;
      while (n) {
        cur = cur.next;
        n--;
      }
      if (m > 0) {
        cur = cur.next;
        m--;
      }

      let next = cur?.next || null;
      if (cur) {
        cur.next = null;
      }
      res.push(temp.next);
      cur = new ListNode(-1, next);
    } else {
      res.push(null);
    }
  }
  return res;
};
var splitListToParts1 = function (head, k) {
  if (k == 1) return [head];
  let len = 0,
    cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  let m = Math.floor(len / k);
  let n = len % k;
  cur = head;
  const res = new Array(k).fill(null);
  for (let i = 0; i < k && cur; i++) {
    res[i] = cur;
    for (let j = 1; j < m + (n > i ? 1 : 0); j++) {
      cur = cur.next;
    }
    const next = cur.next;
    cur.next = null;
    cur = next;
  }
  return res;
};
// @lc code=end
