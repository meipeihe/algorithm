const generateRandomData = (n,left,right) =>{
    const arr = []
    for(let i = 0; i < n; i++){
        let num = (Math.random() * (right - left) + left) | 0
        arr.push(num)
    }
    return arr
}

const testSort = (name, sort, arr) => {
    if(arr.length <= 10){
        console.log(arr)
    }

    const startTime = new Date().getTime()
    arr = sort(arr)
    const endTime = new Date().getTime()
    if(arr.length <= 10){
        console.log(arr)
    }
    console.log(name + (isSorted(arr) ? ' is sorted,': 'is not sorted,'),'time' + ': ' + (endTime - startTime)/1000 + 's')
}

const isSorted = (arr) => {
    for(let i = 0; i < arr.length - 1; i ++){
        if(arr[i] > arr[i + 1]){
            return false
        }
    }
    return true
}

const swap = (arr, a, b) => {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}

const copy = (data) =>{
    return [...data]
}

module.exports =   {generateRandomData,testSort,swap,copy}
