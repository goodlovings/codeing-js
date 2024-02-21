/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  return lists.reduce((result, cur) => {
    let temp = new ListNode(-1),
      p = temp;
    while (result && cur) {
      if (result.val <= cur.val) {
        p.next = result;
        result = result.next;
      } else {
        p.next = cur;
        cur = cur.next;
      }
      p = p.next;
    }
    if (result) {
      p.next = result;
    }
    if (cur) {
      p.next = cur;
    }
    return temp.next;
  });
};
// @lc code=end
