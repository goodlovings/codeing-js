/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 * 给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。
插入排序 算法的步骤:
插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
重复直到所有输入数据插入完为止。
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
// 辅助链表，单独插入
var insertionSortList1 = function (head) {
  if (!head || !head.next) return head;
  let sort = new ListNode(-10000),
    cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = null;
    sort = linkedInsert(sort, cur);
    cur = next;
  }
  return sort.next;
};

function linkedInsert(head, node) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val < node.val && cur.next.val >= node.val) {
      let next = cur.next;
      cur.next = node;
      node.next = next;
      break;
    }
    cur = cur.next;
  }
  // 走完
  if (cur && !cur.next) {
    cur.next = node;
  }
  return head;
}

// 直接原链表操作
var insertionSortList = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0, head);
  let lastSorted = head,
    cur = head.next;
  while (cur) {
    if (lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = dummy;
      while (prev.next.val <= cur.val) {
        prev = prev.next;
      }
      lastSorted.next = cur.next;
      cur.next = prev.next;
      prev.next = cur;
    }
    cur = lastSorted.next;
  }
  return dummy.next;
};

// @lc code=end
