/*
 * @Author: haolian
 * @Date: 2024-01-28 14:33:37
 * @LastEditTime: 2024-01-28 14:46:54
 * @LastEditors: haolian
 * @Descriptio 插入排序
 * @FilePath: /codeing-js/algo/2.排序/insertSort.js
 */

class InsertSort {
  constructor(arr) {
    this.sort(arr);
    return arr;
  }
  sort(arr) {
    if (!arr || arr.length === 0) {
      return;
    }
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j >= 1; j--) {
        if (arr[j] < arr[j - 1]) {
          [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        } else {
          break;
        }
      }
    }
  }
}

console.log(new InsertSort([9,8]));
