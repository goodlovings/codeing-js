/*
 * @Author: haolian
 * @Date: 2024-02-05 16:46:34
 * @LastEditTime: 2024-02-05 19:36:02
 * @LastEditors: haolian
 * @Description: 桶排序（给定范围）
 * @FilePath: /codeing-js/algo/2.排序/bucketSort.js
 */

function sort(arr, unit) {
  let idx = unit - 1;
  while (idx >= 0) {
    let flag = [];
    for (let index = 0; index < 10; index++) {
      flag.push(new Array(10).fill(undefined));
    }
    arr.forEach((item) => {
      let str = (item + "").padStart(unit, 0);
      let index = Number(str.charAt(idx));
      flag[index][index] == undefined ? (flag[index][index] = [item]) : flag[index][index].push(item);
    });
    let count = 0;
    flag.forEach((item) => {
      item.forEach((i) => {
        if (i != undefined) {
          arr.splice(count, i.length, ...i);
          count += i.length;
        }
      });
    });
    idx--;
  }
}

let arr = [77, 8, 9, 26, 8, 0, 66, 766, 762, 88, 962, 2, 4, 6, 625, 100];
sort(arr, 3);
console.log(arr);
