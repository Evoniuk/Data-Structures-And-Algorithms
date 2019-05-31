function binarySearch(arr, x) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let middle = (low + high) >> 1;
    if (arr[middle] < x) low = middle + 1;
    else if (arr[middle] > x) high = middle - 1;
    else return middle;
  }
  return -1
}
