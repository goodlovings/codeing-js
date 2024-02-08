/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// map进行存储
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let tempMap = new Map();
  let cur = head;
  while (cur) {
    tempMap.set(cur, new Node(cur.val, null, null));
    cur = cur.next;
  }
  let cur1 = head;
  while (cur1) {
    let flag = tempMap.get(cur1);
    flag.next = cur1.next == null ? null : tempMap.get(cur1.next);
    flag.random = cur1.random == null ? null : tempMap.get(cur1.random);
    cur1 = cur1.next;
  }
  return tempMap.get(head);
};

// 链表中相对位置进行处理
// var copyRandomList = function (head) {
//   let cur = head;
//   let next = null;
//   while (cur) {
//     next = cur.next;
//     cur.next = new Node(cur.val, null, null);
//     cur.next.next = next;
//     cur = next;
//   }
//   cur = head;
//   let flag = null;
//   while (cur) {
//     next = cur.next.next;
//     flag = cur.next;
//     flag.random = cur.random == null ? null : cur.random.next;
//     cur = next;
//   }

//   let res = head.next;
//   cur = head;
//   while (cur) {
//     next = cur.next.next;
//     flag = cur.next;
//     cur.next = next;
//     flag.next = next !== null ? next.next : null;
//   }

//   return res;
// };
// @lc code=end
