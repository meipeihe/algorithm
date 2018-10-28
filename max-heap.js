const {swap} =  require('./util')


class MaxHeap{
    constructor(capacity){
        this.capacity = capacity
        this.count = 0
        this.data = Array(capacity)
    }

    size(){
        return this.count
    }

    isEmpy() {
        return this.count === 0
    }

    insert(item) {
        this.data[this.count + 1] = item
        this.count ++
        this._shiftup(this.count)
    }

    extractItem() {
        if (this.count === 0) return
        const item = this.data[1]
        swap(this.data, 1, this.count)
        this.count --
        this._shiftDown(1)
        return item

    }
    _shiftDown(index) {
        while(index * 2 <= this.count){
            let j = index * 2
            if((j+1)<=this.count && this.data[j+1] > this.data[j]){
                j = j + 1
            }

            if(this.data[index] > this.data[j]){
                break
            }else {
                swap(this.data, index,j)
                index = j
            }
        }
    }
    _shiftup(count){
        while(this.data[count] > this.data[(count / 2) | 0] && count > 1){
            swap(this.data, (count / 2) | 0, count)
            count = (count / 2) | 0
        }
    }

    print(){
        console.log(this.test())
        let s = '['
        for(let i = 1; i <= this.count; i++){
            s += this.data[i] + ','
        }
        s = s.slice(0, -1)
        s += ']'
        console.log(s)
    }

    test(){
        for(let i = this.count; i > 1; i--) {
            if(this.data[i] > this.data[(i/2) | 0]){
                return false
            }
        }
        return true
    }
}

const heap = new MaxHeap(100)

for(let i = 0; i < 10; i ++) {
    heap.insert((Math.random() * 20 + 1) | 0)
}

heap.print()

for(let i = 0; i < 10; i ++){
    console.log('extract:',heap.extractItem())

    heap.print()
}



