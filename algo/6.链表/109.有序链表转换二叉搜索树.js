/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树：给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 中序遍历,辅助数组 时间：n，空间：n
var sortedListToBST1 = function (head) {
  if (!head) {
    return head;
  }
  let arr = [],
    cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return buildTree(arr);
};

function buildTree(arr) {
  let len = arr.length;
  let mid = len >> 1;
  let leftTree = mid > 0 ? buildTree(arr.slice(0, mid)) : null;
  let rightTree = mid + 1 < len ? buildTree(arr.slice(mid + 1)) : null;
  return new TreeNode(arr[mid], leftTree, rightTree);
}

// 直接链表操作： 时间n， 空间：logn
var sortedListToBST = function (head) {
  if (!head) {
    return head;
  }
  let len = 0,
    h = head;
  while (head) {
    head = head.next;
    len++;
  }
  const buildTree = (start, end) => {
    if (start > end) {
      return null;
    }
    let mid = (start + end) >> 1;
    let leftTree = buildTree(start, mid - 1);

    let root = new TreeNode(h.val);
    h = h.next;
    root.left = leftTree;

    root.right = buildTree(mid + 1, end);
    return root;
  };
  return buildTree(0, len - 1);
};
// @lc code=end
