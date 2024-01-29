// 冒泡排序
class BubbleSort {
  constructor(arr) {
    this.sort(arr);
    return arr;
  }

  sort(arr) {
    if (!arr || arr.length < 2) {
      return;
    }
    let len = arr.length;
    for (let i = len - 1; i >= 1; i--) {
      for (let j = 0; j <= i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
}

console.log(new BubbleSort([1, 4, 2, 6, 9, 2, 3, 4, 0]));
