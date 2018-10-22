const {swap} = require('./util.js')

//const n = 200000

//const data = generateRandomData(n,0,n)

function SelectionSort(data){
    for(let i = 0; i < data.length; i++){
        let minIndex = i
        for(let j =i+1; j < data.length; j++){
            if(data[j] < data[minIndex]){
                minIndex = j
            }
        }
        swap(data,i, minIndex)
    }
    return data
}

module.exports = SelectionSort

// console.log(data)
//
// console.log(SelectionSort(data))

//testSort("SelectionSort", SelectionSort, data)
