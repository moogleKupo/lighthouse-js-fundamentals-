function lastIndexOf(arr, val) {
  let lastIndex = -1;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === val) {
      lastIndex = i;
    }
  }
  return lastIndex;
}