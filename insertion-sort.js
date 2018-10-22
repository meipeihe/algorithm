
const InsertionSort =(data)=> {
    for(let i =1; i < data.length; i++){
        let val = data[i]
        let j
        for(j = i ; j > 0 && data[j-1] > val; j--){
                data[j] = data[j-1]
        }
        data[j] = val

    }
    return data
}

module.exports = InsertionSort

//var data = [1,2,3,10,5,7,4,22,33,7]
//console.log(InsertionSort(data))

//testSort("InsertionSort", InsertionSort, data)
