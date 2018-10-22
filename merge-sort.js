
const MergeSort = (data)=>{
    if(data.length === 1) return data

    let left = data.splice(0,data.length/2)
    let right = data

    let leftM = MergeSort(left)
    let rightM = MergeSort(right)

    let arr = []
    let lIndex = 0
    let rIndex = 0
    while(leftM.length>lIndex || rightM.length> rIndex){
        if(lIndex === leftM.length){
            arr.push(rightM[rIndex])
            rIndex++
        }else if(rIndex === rightM.length){
            arr.push(leftM[lIndex])
            lIndex++
        }else if(leftM[lIndex] < rightM[rIndex]){
            arr.push(leftM[lIndex])
            lIndex++
        }else{
            arr.push(rightM[rIndex])
            rIndex++
        }
    }
    return arr
}

module.exports = MergeSort
