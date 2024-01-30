/*
 * @Author: haolian
 * @Date: 2024-01-30 22:06:34
 * @LastEditTime: 2024-01-30 22:35:17
 * @LastEditors: haolian
 * @Description: 将一个无序数组根据给定的一个数num分成左右两部分，左边的数都比num小，右边的数逗比num大
 * @FilePath: /codeing-js/algo/0.其他/separateByNums.js
 */
// 只从左边计算
function separateByNums1(arr, num) {
  if (!arr || arr.length < 2) {
    return;
  }
  let l = -1,
    len = arr.length - 1,
    index = 0;
  while (index <= len) {
    if (arr[index] <= num) {
      [arr[index], arr[l + 1]] = [arr[l + 1], arr[index]];
      l++;
      index++;
    } else {
      index++;
    }
  }
  return l;
}

// 左右两边计算
function separateByNums2(arr, num) {
  if (!arr || arr.length < 2) {
    return;
  }
  let l = -1,
    len = arr.length - 1,
    index = 0;
  let r = len + 1;
  while (index < r) {
    if (arr[index] <= num) {
      [arr[index], arr[l + 1]] = [arr[l + 1], arr[index]];
      l++;
      index++;
    }  else {
      [arr[index], arr[r-1]] = [arr[r-1], arr[index]];
      r--
    }
  }
  return [l, r];
}

// 左中右同时计算
function separateByNums(arr, num) {
  if (!arr || arr.length < 2) {
    return;
  }
  let l = -1,
    len = arr.length - 1,
    index = 0;
  let r = len + 1;
  while (index < r) {
    if (arr[index] < num) {
      [arr[index], arr[l + 1]] = [arr[l + 1], arr[index]];
      l++;
      index++;
    } else if(arr[index] === num) {
      index++;
    } else {
      [arr[index], arr[r-1]] = [arr[r-1], arr[index]];
      r--
    }
  }
  return [l, r];
}


let arr = [5, 8, 3, 5, 9, 1, 0, 6, 7];
console.log(separateByNums(arr, 7));
console.log(arr);
