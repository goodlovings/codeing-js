/*
 * @Author: haolian
 * @Date: 2024-01-29 15:35:59
 * @LastEditTime: 2024-01-30 19:57:59
 * @LastEditors: haolian
 * @Description: 快速排序
 * @FilePath: /codeing-js/algo/2.排序/qickSort.js
 */

function qickSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  // 随机位置
  let rd = Math.floor(Math.random() * (r - l + 1)) + l;
  // 与最后一个数交换
  [arr[rd], arr[r]] = [arr[r], arr[rd]];

  let [s, e] = separate(arr, l, r);
  s > l && qickSort(arr, l, s);
  r > e && qickSort(arr, e, r);
}

function separate(arr, l, r) {
  let flag = arr[r];
  let start = l - 1,
    end = r + 1,
    index = l;
  while (index < end) {
    if (arr[index] < flag) {
      [arr[start + 1], arr[index]] = [arr[index], arr[start + 1]];
      index++;
      start++;
    } else if (arr[index] === flag) {
      index++;
    } else {
      [arr[end - 1], arr[index]] = [arr[index], arr[end - 1]];
      end--;
    }
  }
  return [start, end];
}
let arr = [1, 6, 7, 8, 5, 9, 4, 7, 4, 5, 1, 6];
qickSort(arr, 0, arr.length - 1);
console.log(arr);
