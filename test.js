const InsertionSort = require('./insertion-sort')
const SelectionSort = require('./selection-sort')
const MergeSort = require('./merge-sort')
const QuickSort = require('./quick-sort')
const {generateRandomData , testSort, copy} = require('./util.js')

const n = 100000

const data = generateRandomData(n,0,n)
const data1 = copy(data)
const data2 = copy(data)
const data3 = copy(data)
testSort("InsertionSort", InsertionSort, data)
testSort("SelectionSort", SelectionSort, data1)
testSort("MergeSort", MergeSort, data2)
testSort("QuickSort", QuickSort, data3)

