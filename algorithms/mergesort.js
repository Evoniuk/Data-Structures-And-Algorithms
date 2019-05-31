function mergesort(arr) {
  function sort(arr, helper, low, high) {
    if (low < high) {
      let middle = (low + high) >> 1;
      sort(arr, helper, low, middle);
      sort(arr, helper, middle + 1, high);
      merge(arr, helper, low, middle, high)
    }
  }
  sort(arr, [], 0, arr.length - 1)
}

function merge(arr, helper, low, middle, high) {
  for (let i = low; i <= high; i++) helper[i] = arr[i];
  let helperLeft = low, helperRight = middle + 1;
  let current = low;
  while (helperLeft <= middle && helperRight <= high) {
    if (helper[helperLeft] % 7 <= helper[helperRight] % 7) arr[current++] = helper[helperLeft++];
    else arr[current++] = helper[helperRight++];
  }
  let remaining = middle - helperLeft;
  for (let i = 0; i <= remaining; i++) arr[current + i] = helper[helperLeft + i]
}
