/*
 * @Author: haolian
 * @Date: 2024-01-31 10:54:29
 * @LastEditTime: 2024-01-31 12:10:20
 * @LastEditors: haolian
 * @Description: 给定一个数组和数组范围，找出数组范围内组大的数，要求时间复杂度最低
 * @FilePath: /codeing-js/algo/5.堆和树/maxRootHeap.js
 */

function getMaxRoot(arr, l, r) {
  if (l >= r) {
    return;
  }
  let index = l;
  while (index <= r) {
    let cl = index * 2 + 1;
    let cr = index * 2 + 2;
    if (cl <= r) {
      let largest = cr <= r ? (arr[cl] < arr[cr] ? cr : cl) : cl;
      largest = arr[largest] > arr[index] ? largest : index;
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

function heapfy(arr, index, l) {
  if (index <= l) {
    return;
  }
  let lastRoot = (index - 1) >> 1;
  if (arr[lastRoot] < arr[index]) {
    [arr[lastRoot], arr[index]] = [arr[index], arr[lastRoot]];
    heapfy(arr, lastRoot, l);
  }
}

let arr = [1, 4, 5, 2, 3, 8, 7, 9, 3, 10];
getMaxRoot(arr, 0, arr.length - 1);
console.log(arr);
