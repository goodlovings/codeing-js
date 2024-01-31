/*
 * @Author: haolian
 * @Date: 2024-01-31 12:12:36
 * @LastEditTime: 2024-01-31 13:02:37
 * @LastEditors: haolian
 * @Description: 堆排序
 * @FilePath: /codeing-js/algo/2.排序/heapSort.js
 */

function getMax(arr, l, r) {
  if (l >= r) {
    return;
  }
  let index = l;
  while (index < r) {
    let lc = index * 2 + 1;
    let rc = lc + 1;
    if (lc <= r) {
      let largest = rc <= r ? (arr[lc] > arr[rc] ? lc : rc) : lc;
      largest = arr[index] > arr[largest] ? index : largest;
      if (largest != index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapfy(arr, index, l);
      }
      index++;
    } else {
      break;
    }
  }
}

function heapfy(arr, cur, l) {
  if (cur <= l) {
    return;
  }
  let root = (cur - 1) >> 1;
  if (arr[root] < arr[cur]) {
    [arr[root], arr[cur]] = [arr[cur], arr[root]];
    heapfy(arr, root, l);
  }
}

function sort(arr) {
  let len = arr.length - 1;
  while (len > 0) {
    getMax(arr, 0, len);
    [arr[0], arr[len]] = [arr[len], arr[0]];
    len--;
  }
}

let arr = [1, 4, 5, 2, 3, 8, 7, 9, 3, 10, 0, 10];
sort(arr);
console.log(arr);
