/*
 * @Author: haolian
 * @Date: 2024-02-05 16:17:22
 * @LastEditTime: 2024-02-05 16:46:00
 * @LastEditors: haolian
 * @Description: 计数排序（区间内进行排序）
 * @FilePath: /codeing-js/algo/2.排序/countingSort.js
 */

function sort(arr, start, end) {
  let temp = new Array(end - start + 1).fill(0);
  arr.forEach((item) => {
    temp[item] ? (temp[item] += 1) : (temp[item] = 1);
  });
  let count = 0;
  temp.forEach((item, index) => {
    if (item > 0) {
      arr.fill(index, count, count + item);
      count += item;
    }
  });
}

let arr = [3, 29, 2, 3, 4, 99, 82, 62, 77, 82, 88, 8, 5, 4, 0];

sort(arr, 0, 100);
console.log(arr);
