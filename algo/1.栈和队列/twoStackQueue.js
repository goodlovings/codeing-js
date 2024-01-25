/*
 * @Author: haolian
 * @Date: 2024-01-23 15:50:57
 * @LastEditTime: 2024-01-23 17:08:32
 * @LastEditors: haolian
 * @Description: 
 * @FilePath: /codeing-js/algo/1.栈和队列/twoStackQueue.js
 */
/**
 * 由两个栈组成的队列
  【题目】
  编写一个类，用两个栈实现队列，支持队列的基本操作（add、poll、peek）。
  【难度】
  尉 ★★☆☆
 */

class MyQueue {
   stackIn = [];
   stackOut = [];

   // add: 添加元素
   add(val) {
    this.stackIn.push(val);
   }

   // poll：弹出第一个元素
   poll() {
    if(this.stackOut.length === 0) {
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop());
      }
    }
    return this.stackOut.pop();
   }

   // peek：查看第一个元素
   peek() {
    let temp = this.poll()
    this.stackOut.push(temp);
    return temp;
   }
}

let mq = new MyQueue();
mq.add(9)
mq.add(6)
mq.add(4)
console.log(mq.poll(), mq.peek(), mq.poll(),  mq);