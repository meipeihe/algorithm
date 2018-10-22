const {swap} = require('./util')

function partition(data, l, r){
    let k = data[l]
    let j = l
    for(let i = l + 1; i <= r; i ++){
        if(data[i] < k){
            swap(data,i,j + 1)
            j ++
        }
    }
    swap(data,l,j)
    return j
}

function __QuickSort(data, l, r){
    if(l >= r) return
    let p = partition(data, l, r)
    __QuickSort(data, l, p -1)
    __QuickSort(data, p + 1, r)
    return data
}

function QuickSort(data){
    return __QuickSort(data, 0 , data.length - 1)
}

module.exports = QuickSort
