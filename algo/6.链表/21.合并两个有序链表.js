/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  let first = list1,
    second = list2;
  let res = new ListNode(-1),
    temp = res;
  while (first && second) {
    if (first.val > second.val) {
      temp.next = new ListNode(second.val);
      second = second.next;
    } else {
      temp.next = new ListNode(first.val);
      first = first.next;
    }
    temp = temp.next;
  }

  let flag = first ? first : second;
  if (flag) {
    temp.next = flag;
  }
  return res.next;
};
// @lc code=end
