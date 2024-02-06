/*
 * @Author: haolian
 * @Date: 2024-02-06 11:29:55
 * @LastEditTime: 2024-02-06 14:54:37
 * @LastEditors: haolian
 * @Description: 将一个数组中 奇数全部放在左边，偶数全部放在右边
 * @FilePath: /codeing-js/algo/0.其他/separateQickByOddEven.js
 */

// 快速排序方式 (不能保证稳定性 时间：N*logN 空间：1)
function separate(arr) {
  if (!arr || arr.length < 2) {
    return;
  }
  let start = -1,
    end = arr.length,
    index = 0;
  while (index < end) {
    // 偶数
    if (arr[index] % 2 == 0) {
      [arr[index], arr[end - 1]] = [arr[end - 1], arr[index]];
      end--;
    } else {
      [arr[index], arr[start + 1]] = [arr[start + 1], arr[index]];
      start++;
      index++;
    }
  }
  return start;
}

function qickSeparate(arr, l, r) {
  if (l == r) {
    return;
  }
  let start = l - 1,
    end = r + 1,
    index = l,
    mid = arr[r];
  while (index < end) {
    if (mid > arr[index]) {
      [arr[index], arr[start + 1]] = [arr[start + 1], arr[index]];
      start++;
      index++;
    } else if (mid == arr[index]) {
      index++;
    } else {
      [arr[index], arr[end - 1]] = [arr[end - 1], arr[index]];
      end--;
    }
  }
  return [start, end];
}

function sort(arr, s, e) {
  let [l, r] = qickSeparate(arr, s, e);
  l > s && sort(arr, s, l);
  r < e && sort(arr, r, e);
}

let arr = [0, 3, 2, 4, 7, 4, 8, 4, 9, 77, 0, 3, 66, 13];
let s = separate(arr);
console.log(arr, s);
s > 0 && sort(arr, 0, s);
s < arr.length - 1 && sort(arr, s + 1, arr.length - 1);
console.log(arr);
