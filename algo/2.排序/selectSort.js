/*
 * @Author: haolian
 * @Date: 2024-01-28 15:06:42
 * @LastEditTime: 2024-01-28 15:13:24
 * @LastEditors: haolian
 * @Description: 选择排序
 * @FilePath: /codeing-js/algo/2.排序/selectSort.js
 */

class SelectSort {
  constructor(arr) {
    this.sort(arr);
    return arr;
  }

  sort(arr) {
    if (!arr || arr.length < 2) {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }
}
console.log(new SelectSort([6, 7, 1, 3, 4, 9, 0, 5]));
