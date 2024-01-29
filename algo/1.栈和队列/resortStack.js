/*
 * @Author: haolian
 * @Date: 2024-01-23 17:23:57
 * @LastEditTime: 2024-01-25 20:13:22
 * @LastEditors: haolian
 * @Description: 
 * @FilePath: /codeing-js/algo/1.栈和队列/resortStack.js
 */
/**
 * 
 【题目】
一个栈依次压入 1、2、3、4、5，那么从栈顶到栈底分别为 5、4、3、2、1。将这个栈转置
后，从栈顶到栈底为 1、2、3、4、5，也就是实现栈中元素的逆序，但是只能用递归函数来实
现，不能用其他数据结构。
【难度】
尉 ★★☆☆
 */

class resortStack {
  constructor(stack) {
    this.reverseStack(stack)
    return stack;
  }

  getAndRemoveLastEl(stack) {
    let last = stack.pop();
    if(stack.length === 0) {
      return last;
    } else {
      let back = this.getAndRemoveLastEl(stack);
      stack.push(last)
      return back;
    }
  }

  reverseStack(stack) {
    if(stack.length === 0) {
      return;
    }
    let first = this.getAndRemoveLastEl(stack);
    this.reverseStack(stack);
    stack.push(first);
  }
}

let a = new resortStack([7,8,9,5,6,4]);
console.log(a);