/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
// 两种方法：1、使用map存节点，碰到已存入节点即是环；2、使用快慢指针，快慢指针相遇是环
var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  // 方法1
  // let loopMap = new Map();
  // let cur = head;
  // while (cur) {
  //   let temp = loopMap.get(cur);
  //   if (temp) {
  //     return true;
  //   }
  //   loopMap.set(cur, cur);
  //   cur = cur.next;
  // }
  // return false;

  // 方法2
  let slow = head.next;
  let fast = head.next?.next;
  while (fast) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next?.next;
  }
  return false;
};
// @lc code=end
