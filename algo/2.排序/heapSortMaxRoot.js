/*
 * @Author: haolian
 * @Date: 2024-02-05 14:31:59
 * @LastEditTime: 2024-02-05 16:01:36
 * @LastEditors: haolian
 * @Description: 堆排序(最大根)
 * @FilePath: /codeing-js/algo/2.排序/heapSortMaxRoot.js
 */

function sort(arr) {
  if (!arr || arr.length < 2) {
    return;
  }
  for (let index = arr.length - 1; index >= 0; index--) {
    heapify(arr, index, arr.length);
  }

  let size = arr.length;
  size--;
  while (size > 0) {
    [arr[0], arr[size]] = [arr[size], arr[0]];
    heapify(arr, 0, size);
    size--;
  }
}

function heapify(arr, index, size) {
  let l = index * 2 + 1;
  while (l < size) {
    let max = l + 1 < size && arr[l + 1] > arr[l] ? l + 1 : l;
    max = arr[max] > arr[index] ? max : index;
    if (max == index) {
      break;
    }
    [arr[index], arr[max]] = [arr[max], arr[index]];
    index = max;
    l = index * 2 + 1;
  }
}

let arr = [3, 7, 9, 1, 4, 6, 10, 6, 48, 7, 0];
sort(arr);
console.log(arr);
