/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// 不考虑空间复杂度为 N
var isPalindrome1 = function (head) {
  if (!head || head.next == null) {
    return head;
  }
  let cur = head;
  let arr = [];
  while (cur) {
    arr.push(cur.val);
  }
  let res = true;
  cur = head;
  while (cur) {
    if (cur.val !== arr.pop()) {
      res = false;
      break;
    }
  }
  return res;
};

// 空间复杂度1 双指针（快慢指针，不知链表长度情况下）
var isPalindrome = function (head) {
  if (!head || head.next == null) {
    return head;
  }
  let firstHalf = getLeftHalf(head);
  let rihtReves = reverseLinked(firstHalf.next);

  let p0 = rihtReves,
    p1 = head;

  let res = true;
  while (p0) {
    if (p0.val !== p1.val) {
      res = false;
      break;
    }
    p0 = p0.next;
    p1 = p1.next;
  }
  firstHalf.next = reverseLinked(rihtReves);
  return res;
};

function getLeftHalf(head) {
  let slow = head,
    fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverseLinked(head) {
  let cur = head,
    prev = null;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
// @lc code=end
