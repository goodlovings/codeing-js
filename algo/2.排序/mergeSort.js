/*
 * @Author: haolian
 * @Date: 2024-01-28 16:22:15
 * @LastEditTime: 2024-01-28 18:01:36
 * @LastEditors: haolian
 * @Description: 归并排序 && 小和问题
 * @FilePath: /codeing-js/algo/2.排序/mergeSort.js
 */

class MergeSort {
  sum = 0;
  constructor(arr) {
    let res = this.sort(arr);
    console.log("sum", this.sum);
    return res;
  }

  sort(arr) {
    if (!arr || arr.length < 2) {
      return arr;
    }
    let mid = (arr.length - 1) >> 1;
    let leftArr = this.sort(arr.slice(0, mid + 1));
    let rightArr = this.sort(arr.slice(mid + 1, arr.length));
    return this.merge(leftArr, rightArr);
  }
  merge(leftArr, rightArr) {
    let temp = [];
    let li = 0,
      ri = 0;
    while (leftArr.length > li && rightArr.length > ri) {
      if (leftArr[li] > rightArr[ri]) {
        temp.push(rightArr[ri++]);
      } else {
        this.sum += (rightArr.length - ri) * leftArr[li];
        temp.push(leftArr[li++]);
      }
    }
    if (leftArr.length <= li) {
      temp = temp.concat(rightArr.slice(ri, rightArr.length));
    }
    if (rightArr.length <= ri) {
      temp = temp.concat(leftArr.slice(li, leftArr.length));
    }
    return temp;
  }
}

console.log(new MergeSort([1, 3, 4, 7, 2, 5, 6]));
