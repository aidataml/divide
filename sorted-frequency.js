function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    let lastIdx = findLast(arr, num);
  
    if (firstIdx == -1) return firstIdx;
    return lastIdx - firstIdx + 1;
  }
  
  function findFirst(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
      let mid = Math.floor((leftIdx + rightIdx) / 2)
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, rightIdx)
      } else {
        return findFirst(arr, num, leftIdx, mid - 1)
      }
    }
    return -1
  }
  
  function findLast(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
      let mid = Math.floor((leftIdx + rightIdx) / 2)
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        return findLast(arr, num, leftIdx, mid - 1)
      } else {
        return findLast(arr, num, mid + 1, rightIdx)
      }
    }
    return -1
  }
  
  module.exports = sortedFrequency
  
  console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
  console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
  console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
  console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1