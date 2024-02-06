/*
 * @Author: haolian
 * @Date: 2024-02-06 11:29:55
 * @LastEditTime: 2024-02-06 15:59:14
 * @LastEditors: haolian
 * @Description: 将一个数组中 奇数全部放在左边，偶数全部放在右边
 * @FilePath: /codeing-js/algo/0.其他/separateMergeByOddEven.js
 */

// 归并排序方式
function mergeSeparate(arr, l, r) {
  if (!arr || l >= r) {
    return;
  }
  let mid = (l + r) >> 1;
  mergeSeparate(arr, l, mid);
  mergeSeparate(arr, mid + 1, r);
  mergeSort(arr, l, mid, r);
}
function mergeSort(arr, l, mid, r) {
  let li = l,
    ri = mid + 1,
    afalg = [],
    efalg = [];
  while (li <= mid && ri <= r) {
    if (arr[li] <= arr[ri]) {
      arr[li] % 2 == 0 ? efalg.push(arr[li]) : afalg.push(arr[li]);
      li++;
    } else {
      arr[ri] % 2 == 0 ? efalg.push(arr[ri]) : afalg.push(arr[ri]);
      ri++;
    }
  }
  if (ri <= r) {
    for (let index = ri; index <= r; index++) {
      arr[index] % 2 == 0 ? efalg.push(arr[index]) : afalg.push(arr[index]);
    }
  }
  if (li <= mid) {
    for (let index = li; index <= mid; index++) {
      arr[index] % 2 == 0 ? efalg.push(arr[index]) : afalg.push(arr[index]);
    }
  }
  afalg.concat(efalg).forEach((item, index) => {
    arr[l + index] = item;
  });
}

let arr = [0, 3, 2, 4, 7, 4, 8, 4, 9, 77, 0, 3, 66, 13];
mergeSeparate(arr, 0, arr.length - 1);
console.log(arr);
