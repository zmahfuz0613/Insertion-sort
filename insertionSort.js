function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var k = i - 1; k >= 0 && arr[k] > currentVal; k--) {
      arr[k + 1] = arr[k];
    }
    arr[k + 1] = currentVal;
  }
}

let arr = [2, 1, 5, 3];
insertionSort(arr);

console.log(arr);
