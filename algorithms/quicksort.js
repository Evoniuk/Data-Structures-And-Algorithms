function quicksort(arr) {
  function sort(arr, low, high) {
    let index = partition(arr, low, high);
    if (low < index - 1) sort(arr, low, index - 1);
    if (index < high) sort(arr, index, high);
  }
  sort(arr, 0, arr.length - 1)
}

function partition(arr, low, high) {
  let pivot = arr[(low + high) >> 1];
  while (low <= high) {
    while (arr[low] < pivot) low++;
    while (pivot < arr[high]) high--;
    if (low <= high) swap(arr, low++, high--);
  }
  return low
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp
}
