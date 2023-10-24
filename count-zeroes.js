function countZeroes() {
    let firstZero = findFirstZero(arr)
    if (firstZero === -1) return 0;
    return arr.length - firstZero
}

function findFirstZero(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
            // First zero is at the middle index.
            return middleIdx;
        } else if (arr[middleIdx] === 1) {
            // Search the right side.
            return findFirstZero(arr, middleIdx + 1, rightIdx)
        }
        // Search left side.
        return findFirstZero(arr, leftIdx, middleIdx - 1)
    }
    return -1;
}

module.exports = countZeroes

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0

