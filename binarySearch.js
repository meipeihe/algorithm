function binarySearch(arr, target){
    let l = 0
    let r = arr.length - 1
    while(r >= l){
        let mid = l + ((r - l) / 2) | 0
        if(target === arr[mid]) return mid
        if(target > arr[mid]){
            l = mid + 1
        }
        if(target < arr[mid]){
            r = mid - 1
        }
    }
    return -1
}


const testArr = []

for(let i = 0; i < 10000; i ++){
    testArr.push(i)
}

console.log(binarySearch(testArr,555))
